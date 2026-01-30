/**
 * ANIMATIONS MODULE
 * =================
 * 
 * Handles scroll-triggered animations using Intersection Observer.
 * Provides smooth, performant animations without heavy libraries.
 * 
 * Features:
 * - Scroll-triggered fade/slide animations
 * - Staggered animations for lists
 * - Hero section load animations
 * - Navigation scroll effects
 * - Respects prefers-reduced-motion
 */

class AnimationController {
  constructor() {
    // Check for reduced motion preference
    this.prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    
    // Observer options
    this.observerOptions = {
      root: null,
      rootMargin: '0px 0px -10% 0px', // Trigger slightly before element enters viewport
      threshold: 0.1
    };
    
    // Track initialized elements
    this.observedElements = new Set();
    
    // Bind methods
    this.handleIntersection = this.handleIntersection.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }
  
  /**
   * Initialize all animations
   */
  init() {
    // Skip animations if user prefers reduced motion
    if (this.prefersReducedMotion) {
      document.body.classList.add('animations-ready');
      this.showAllElements();
      return;
    }
    
    // Set up intersection observer for scroll animations
    this.setupScrollAnimations();
    
    // Set up navigation scroll effects
    this.setupNavScroll();
    
    // Trigger hero animations on load
    this.triggerHeroAnimations();
    
    // Mark animations as ready
    requestAnimationFrame(() => {
      document.body.classList.add('animations-ready');
    });
  }
  
  /**
   * Set up intersection observer for scroll-triggered animations
   */
  setupScrollAnimations() {
    this.observer = new IntersectionObserver(
      this.handleIntersection,
      this.observerOptions
    );
    
    // Observe all elements with data-animate attribute
    const animatedElements = document.querySelectorAll('[data-animate]');
    animatedElements.forEach((element) => {
      this.observer.observe(element);
      this.observedElements.add(element);
    });
    
    // Set up stagger indices
    this.setupStaggerIndices();
  }
  
  /**
   * Handle intersection events
   */
  handleIntersection(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add visible class to trigger animation
        entry.target.classList.add('is-visible');
        
        // Stop observing once animated
        this.observer.unobserve(entry.target);
        this.observedElements.delete(entry.target);
      }
    });
  }
  
  /**
   * Set stagger indices for child elements
   */
  setupStaggerIndices() {
    const staggerContainers = document.querySelectorAll('[data-animate-stagger]');
    
    staggerContainers.forEach((container) => {
      const children = container.querySelectorAll('[data-animate]');
      children.forEach((child, index) => {
        child.style.setProperty('--stagger-index', index);
      });
    });
  }
  
  /**
   * Trigger hero section animations
   */
  triggerHeroAnimations() {
    const hero = document.querySelector('.hero');
    const nav = document.querySelector('.nav');
    
    if (hero) {
      // Small delay to ensure styles are applied
      requestAnimationFrame(() => {
        hero.classList.add('loaded');
      });
    }
    
    if (nav) {
      requestAnimationFrame(() => {
        nav.classList.add('loaded');
      });
    }
  }
  
  /**
   * Set up navigation scroll effects
   */
  setupNavScroll() {
    const nav = document.querySelector('.nav');
    if (!nav) return;
    
    let lastScroll = 0;
    let ticking = false;
    
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          this.handleScroll(nav, lastScroll);
          lastScroll = window.scrollY;
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
    
    // Initial check
    this.handleScroll(nav, 0);
  }
  
  /**
   * Handle scroll for navigation effects
   */
  handleScroll(nav, lastScroll) {
    const currentScroll = window.scrollY;
    const scrollThreshold = 50;
    
    // Add/remove scrolled class for background
    if (currentScroll > scrollThreshold) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
    
    // Optional: Hide nav on scroll down, show on scroll up
    // Uncomment below if desired
    /*
    if (currentScroll > lastScroll && currentScroll > 200) {
      nav.style.transform = 'translateY(-100%)';
    } else {
      nav.style.transform = 'translateY(0)';
    }
    */
  }
  
  /**
   * Show all elements immediately (for reduced motion)
   */
  showAllElements() {
    const animatedElements = document.querySelectorAll('[data-animate]');
    animatedElements.forEach((element) => {
      element.classList.add('is-visible');
    });
    
    const hero = document.querySelector('.hero');
    const nav = document.querySelector('.nav');
    
    if (hero) hero.classList.add('loaded');
    if (nav) nav.classList.add('loaded');
  }
  
  /**
   * Manually trigger animation for an element
   */
  triggerAnimation(element) {
    if (element && !element.classList.contains('is-visible')) {
      element.classList.add('is-visible');
    }
  }
  
  /**
   * Reset animation for an element (can be triggered again)
   */
  resetAnimation(element) {
    if (element) {
      element.classList.remove('is-visible');
      
      // Re-observe if observer exists
      if (this.observer) {
        this.observer.observe(element);
        this.observedElements.add(element);
      }
    }
  }
  
  /**
   * Add new animated elements (useful for dynamically added content)
   */
  observeNew(selector) {
    if (this.prefersReducedMotion || !this.observer) return;
    
    const newElements = document.querySelectorAll(selector);
    newElements.forEach((element) => {
      if (!this.observedElements.has(element)) {
        this.observer.observe(element);
        this.observedElements.add(element);
      }
    });
  }
  
  /**
   * Clean up observers
   */
  destroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
    this.observedElements.clear();
  }
}

/**
 * Smooth scroll to element
 */
function smoothScrollTo(target, offset = 80) {
  const element = typeof target === 'string'
    ? document.querySelector(target)
    : target;
  
  if (!element) return;
  
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.scrollY - offset;
  
  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

/**
 * Set up smooth scroll for anchor links
 */
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      
      // Skip if just "#"
      if (href === '#') return;
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        smoothScrollTo(target);
        
        // Update URL hash without jumping
        history.pushState(null, '', href);
        
        // Close mobile menu if open
        const navLinks = document.querySelector('.nav__links');
        const menuBtn = document.querySelector('.nav__menu-btn');
        if (navLinks?.classList.contains('nav__links--open')) {
          navLinks.classList.remove('nav__links--open');
          menuBtn?.classList.remove('nav__menu-btn--open');
        }
      }
    });
  });
}

/**
 * Parallax effect for elements (subtle)
 */
function setupParallax() {
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;
  
  if (prefersReducedMotion) return;
  
  const parallaxElements = document.querySelectorAll('[data-parallax]');
  if (parallaxElements.length === 0) return;
  
  let ticking = false;
  
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrolled = window.scrollY;
        
        parallaxElements.forEach((element) => {
          const speed = parseFloat(element.dataset.parallax) || 0.5;
          const rect = element.getBoundingClientRect();
          const inView = rect.top < window.innerHeight && rect.bottom > 0;
          
          if (inView) {
            const yPos = (scrolled - element.offsetTop) * speed;
            element.style.transform = `translateY(${yPos}px)`;
          }
        });
        
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

/**
 * Counter animation for numbers
 */
function animateCounter(element, target, duration = 2000) {
  const start = 0;
  const increment = target / (duration / 16);
  let current = start;
  
  const updateCounter = () => {
    current += increment;
    
    if (current < target) {
      element.textContent = Math.floor(current);
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target;
    }
  };
  
  updateCounter();
}

/**
 * Set up counter animations for elements with data-counter
 */
function setupCounterAnimations() {
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;
  
  const counterElements = document.querySelectorAll('[data-counter]');
  if (counterElements.length === 0) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.dataset.counter, 10);
        
        if (prefersReducedMotion) {
          entry.target.textContent = target;
        } else {
          animateCounter(entry.target, target);
        }
        
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  counterElements.forEach((el) => observer.observe(el));
}

// Create and export animation controller instance
const animationController = new AnimationController();

// Export for use in app.js
// Note: In vanilla JS, these are available globally
// For module systems, uncomment: export { animationController, smoothScrollTo, setupSmoothScroll };
