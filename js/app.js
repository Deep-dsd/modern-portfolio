/**
 * MAIN APPLICATION
 * ================
 * 
 * Core application logic that initializes the portfolio and populates content
 * from the data.js configuration file.
 * 
 * Features:
 * - Graceful handling of missing data (no errors if sections are empty)
 * - Flexible data structure support
 * - Safe property access throughout
 * 
 * Structure:
 * 1. Initialization
 * 2. Content Population Functions
 * 3. UI Interactions
 * 4. Utility Functions
 * 5. Icons
 */

/* ===========================================
   1. INITIALIZATION
   =========================================== */

/**
 * Main initialization function
 * Called when DOM is fully loaded
 */
document.addEventListener('DOMContentLoaded', () => {
  // Check if portfolioData exists
  if (typeof portfolioData === 'undefined') {
    console.error('Portfolio data not found. Please check data.js is loaded.');
    return;
  }
  
  // Initialize theme system
  if (typeof themeManager !== 'undefined') {
    themeManager.init();
  }
  
  // Populate all content from data.js
  populateContent();
  
  // Set up UI interactions
  setupNavigation();
  setupMobileMenu();
  setupContactForm();
  
  // Initialize animations
  if (typeof animationController !== 'undefined') {
    animationController.init();
  }
  if (typeof setupSmoothScroll !== 'undefined') {
    setupSmoothScroll();
  }
  
  // Update page metadata
  updateMetadata();
  
  // Hide empty sections
  hideEmptySections();
});

/* ===========================================
   2. CONTENT POPULATION FUNCTIONS
   =========================================== */

/**
 * Safe getter for nested properties
 * Returns undefined if any part of the path doesn't exist
 */
function safeGet(obj, path, defaultValue = undefined) {
  const result = path.split('.').reduce((acc, part) => acc && acc[part], obj);
  return result !== undefined ? result : defaultValue;
}

/**
 * Check if a value exists and is not empty
 */
function hasContent(value) {
  if (value === null || value === undefined) return false;
  if (Array.isArray(value)) return value.length > 0;
  if (typeof value === 'object') return Object.keys(value).length > 0;
  if (typeof value === 'string') return value.trim().length > 0;
  return true;
}

/**
 * Main content population function
 */
function populateContent() {
  populateNavigation();
  populateHero();
  populateAbout();
  populateExperience();
  populateProjects();
  populateSkills();
  populateEducation();
  populateContact();
  populateFooter();
}

/**
 * Hide sections that have no content
 */
function hideEmptySections() {
  const sectionChecks = {
    '#about': () => hasContent(safeGet(portfolioData, 'about.summary')),
    '#experience': () => hasContent(safeGet(portfolioData, 'experience')),
    '#projects': () => hasContent(safeGet(portfolioData, 'projects')),
    '#skills': () => hasContent(safeGet(portfolioData, 'skills')),
    '#education': () => hasContent(safeGet(portfolioData, 'education')) || hasContent(safeGet(portfolioData, 'certifications')),
    '#contact': () => hasContent(safeGet(portfolioData, 'personal.email')) || hasContent(safeGet(portfolioData, 'personal.phone'))
  };
  
  Object.entries(sectionChecks).forEach(([selector, hasContentFn]) => {
    const section = document.querySelector(selector);
    if (section && !hasContentFn()) {
      section.style.display = 'none';
      // Also hide corresponding nav link
      const navLink = document.querySelector(`.nav__link[href="${selector}"]`);
      if (navLink) navLink.style.display = 'none';
    }
  });
}

/**
 * Populate navigation with name/logo
 */
function populateNavigation() {
  const logoEl = document.querySelector('.nav__logo');
  const name = safeGet(portfolioData, 'personal.name');
  
  if (logoEl && name) {
    // Use first name for logo
    const firstName = name.split(' ')[0];
    logoEl.textContent = firstName;
  }
}

/**
 * Populate hero section
 */
function populateHero() {
  const personal = safeGet(portfolioData, 'personal', {});
  const social = safeGet(portfolioData, 'social', []);
  
  // Tagline
  const taglineEl = document.querySelector('.hero__tagline');
  if (taglineEl && personal.title) {
    taglineEl.textContent = personal.title;
  }
  
  // Title (name)
  const titleEl = document.querySelector('.hero__title');
  if (titleEl && personal.name) {
    titleEl.textContent = personal.name;
  }
  
  // Description
  const descEl = document.querySelector('.hero__description');
  if (descEl && personal.tagline) {
    descEl.textContent = personal.tagline;
  }
  
  // Social links
  const socialContainer = document.querySelector('.hero__social');
  if (socialContainer) {
    if (hasContent(social)) {
      socialContainer.innerHTML = social.map(({ platform, url, icon }) => `
        <a href="${url || '#'}" 
           class="hero__social-link" 
           target="_blank" 
           rel="noopener noreferrer"
           aria-label="${platform || 'Social link'}">
          ${getIcon(icon || 'external')}
        </a>
      `).join('');
    } else {
      socialContainer.style.display = 'none';
    }
  }
  
  // Resume button - hide if no resume URL
  const resumeBtn = document.querySelector('.hero__actions .btn--secondary[download]');
  if (resumeBtn && !personal.resumeUrl) {
    resumeBtn.style.display = 'none';
  } else if (resumeBtn && personal.resumeUrl) {
    resumeBtn.href = personal.resumeUrl;
  }
}

/**
 * Populate about section
 */
function populateAbout() {
  const about = safeGet(portfolioData, 'about', {});
  const personal = safeGet(portfolioData, 'personal', {});
  
  // Profile image
  const imageEl = document.querySelector('.about__image');
  if (imageEl) {
    if (personal.profileImage) {
      imageEl.src = personal.profileImage;
      imageEl.alt = `${personal.name || 'Profile'} photo`;
    } else {
      // Hide image wrapper if no image
      const imageWrapper = imageEl.closest('.about__image-wrapper');
      if (imageWrapper) imageWrapper.style.display = 'none';
    }
  }
  
  // Summary text
  const textContainer = document.querySelector('.about__text');
  if (textContainer) {
    if (about.summary) {
      // Split by double newlines for paragraphs
      const paragraphs = about.summary.split('\n\n');
      textContainer.innerHTML = paragraphs
        .map((p) => `<p>${p}</p>`)
        .join('');
    } else {
      textContainer.innerHTML = '';
    }
  }
  
  // Highlights
  const highlightsSection = document.querySelector('.about__highlights');
  const highlightsContainer = document.querySelector('.about__highlights-list');
  if (highlightsContainer) {
    if (hasContent(about.highlights)) {
      highlightsContainer.innerHTML = about.highlights
        .map((highlight) => `<li class="about__highlight">${highlight}</li>`)
        .join('');
    } else if (highlightsSection) {
      highlightsSection.style.display = 'none';
    }
  }
}

/**
 * Populate experience section
 */
function populateExperience() {
  const experience = safeGet(portfolioData, 'experience', []);
  const container = document.querySelector('.experience__list');
  
  if (!container) return;
  
  if (!hasContent(experience)) {
    container.innerHTML = '';
    return;
  }
  
  container.innerHTML = experience.map((job) => {
    // Safely get all properties with defaults
    const company = job.company || 'Company';
    const position = job.position || 'Position';
    const duration = job.duration || '';
    const location = job.location || '';
    const description = job.description || '';
    const achievements = job.achievements || [];
    const technologies = job.technologies || [];
    
    return `
      <article class="experience__item" data-animate="fade-up">
        <div class="experience__meta">
          ${duration ? `<div class="experience__duration">${duration}</div>` : ''}
          ${location ? `<div class="experience__location">${location}</div>` : ''}
        </div>
        <div class="experience__content">
          <h3 class="experience__company">${company}</h3>
          <div class="experience__position">${position}</div>
          ${description ? `<p class="experience__description">${description}</p>` : ''}
          ${hasContent(achievements) ? `
            <ul class="experience__achievements">
              ${achievements.map((achievement) => `
                <li class="experience__achievement">${achievement}</li>
              `).join('')}
            </ul>
          ` : ''}
          ${hasContent(technologies) ? `
            <div class="experience__technologies">
              ${technologies.map((tech) => `
                <span class="tag">${tech}</span>
              `).join('')}
            </div>
          ` : ''}
        </div>
      </article>
    `;
  }).join('');
}

/**
 * Populate projects section
 */
function populateProjects() {
  const projects = safeGet(portfolioData, 'projects', []);
  const container = document.querySelector('.projects__grid');
  
  if (!container) return;
  
  if (!hasContent(projects)) {
    container.innerHTML = '';
    return;
  }
  
  // Separate featured and regular projects
  const featuredProjects = projects.filter((p) => p.featured);
  const regularProjects = projects.filter((p) => !p.featured);
  
  // Render featured projects first, then regular
  const allProjects = [...featuredProjects, ...regularProjects];
  
  container.innerHTML = allProjects.map((project) => {
    const title = project.title || 'Untitled Project';
    const description = project.description || '';
    const longDescription = project.longDescription || description;
    const image = project.image || '';
    const technologies = project.technologies || [];
    const year = project.year || '';
    const liveUrl = project.liveUrl;
    const githubUrl = project.githubUrl;
    const featured = project.featured;
    
    return `
      <article class="project-card ${featured ? 'project-card--featured' : ''}" data-animate="fade-up">
        ${image ? `
          <div class="project-card__image-wrapper hover-zoom">
            <img 
              src="${image}" 
              alt="${title} preview"
              class="project-card__image"
              loading="lazy"
              onerror="this.parentElement.style.display='none'"
            />
          </div>
        ` : ''}
        <div class="project-card__content">
          ${year ? `<span class="project-card__year">${year}</span>` : ''}
          <h3 class="project-card__title">${title}</h3>
          ${description ? `
            <p class="project-card__description">
              ${featured ? longDescription : description}
            </p>
          ` : ''}
          ${hasContent(technologies) ? `
            <div class="project-card__technologies">
              ${technologies.map((tech) => `
                <span class="tag tag--accent">${tech}</span>
              `).join('')}
            </div>
          ` : ''}
          <div class="project-card__links">
            ${liveUrl ? `
              <a href="${liveUrl}" 
                 class="project-card__link hover-arrow" 
                 target="_blank" 
                 rel="noopener noreferrer">
                ${getIcon('external')} Live Demo
              </a>
            ` : ''}
            ${githubUrl ? `
              <a href="${githubUrl}" 
                 class="project-card__link hover-arrow" 
                 target="_blank" 
                 rel="noopener noreferrer">
                ${getIcon('github')} Source
              </a>
            ` : ''}
          </div>
        </div>
      </article>
    `;
  }).join('');
}

/**
 * Populate skills section
 */
function populateSkills() {
  const skills = safeGet(portfolioData, 'skills', {});
  const container = document.querySelector('.skills__grid');
  
  if (!container) return;
  
  if (!hasContent(skills)) {
    container.innerHTML = '';
    return;
  }
  
  container.innerHTML = Object.entries(skills).map(([category, skillList]) => {
    if (!hasContent(skillList)) return '';
    
    return `
      <div class="skill-category" data-animate="fade-up">
        <h3 class="skill-category__title">${category}</h3>
        <ul class="skill-category__list">
          ${skillList.map((skill) => `
            <li class="skill-category__item">${skill}</li>
          `).join('')}
        </ul>
      </div>
    `;
  }).filter(Boolean).join('');
}

/**
 * Populate education and certifications section
 */
function populateEducation() {
  const education = safeGet(portfolioData, 'education', []);
  const certifications = safeGet(portfolioData, 'certifications', []);
  
  // Education
  const educationContainer = document.querySelector('.education__list');
  if (educationContainer) {
    if (hasContent(education)) {
      educationContainer.innerHTML = education.map((edu) => {
        const degree = edu.degree || 'Degree';
        const institution = edu.institution || 'Institution';
        const year = edu.year || '';
        const gpa = edu.gpa;
        const achievements = edu.achievements || [];
        
        return `
          <article class="education__item" data-animate="fade-up">
            <div class="education__info">
              <h3 class="education__degree">${degree}</h3>
              <div class="education__institution">${institution}</div>
              ${gpa ? `<div class="education__gpa">GPA: ${gpa}</div>` : ''}
              ${hasContent(achievements) ? `
                <ul class="education__achievements">
                  ${achievements.map((a) => `
                    <li class="education__achievement">${a}</li>
                  `).join('')}
                </ul>
              ` : ''}
            </div>
            ${year ? `<div class="education__year">${year}</div>` : ''}
          </article>
        `;
      }).join('');
    } else {
      educationContainer.innerHTML = '';
    }
  }
  
  // Certifications
  const certsContainer = document.querySelector('.certifications__grid');
  if (certsContainer) {
    if (hasContent(certifications)) {
      certsContainer.innerHTML = certifications.map((cert) => {
        const name = cert.name || 'Certification';
        const issuer = cert.issuer || '';
        const year = cert.year || '';
        const credentialUrl = cert.credentialUrl;
        
        return `
          <article class="certification-card" data-animate="fade-up">
            <h4 class="certification-card__name">${name}</h4>
            ${issuer ? `<div class="certification-card__issuer">${issuer}</div>` : ''}
            ${year ? `<div class="certification-card__year">${year}</div>` : ''}
            ${credentialUrl ? `
              <a href="${credentialUrl}" 
                 class="certification-card__link hover-arrow"
                 target="_blank"
                 rel="noopener noreferrer">
                Verify ${getIcon('external')}
              </a>
            ` : ''}
          </article>
        `;
      }).join('');
    } else {
      certsContainer.innerHTML = '';
    }
  }
}

/**
 * Populate contact section
 */
function populateContact() {
  const personal = safeGet(portfolioData, 'personal', {});
  const social = safeGet(portfolioData, 'social', []);
  
  // Email
  const emailItem = document.querySelector('.contact__item:has([data-contact="email"])');
  const emailEl = document.querySelector('[data-contact="email"]');
  if (emailEl) {
    if (personal.email) {
      emailEl.innerHTML = `<a href="mailto:${personal.email}">${personal.email}</a>`;
    } else if (emailItem) {
      emailItem.style.display = 'none';
    }
  }
  
  // Phone
  const phoneItem = document.querySelector('.contact__item:has([data-contact="phone"])');
  const phoneEl = document.querySelector('[data-contact="phone"]');
  if (phoneEl) {
    if (personal.phone) {
      phoneEl.innerHTML = `<a href="tel:${personal.phone.replace(/\s/g, '')}">${personal.phone}</a>`;
    } else if (phoneItem) {
      phoneItem.style.display = 'none';
    }
  }
  
  // Location
  const locationItem = document.querySelector('.contact__item:has([data-contact="location"])');
  const locationEl = document.querySelector('[data-contact="location"]');
  if (locationEl) {
    if (personal.location) {
      locationEl.textContent = personal.location;
    } else if (locationItem) {
      locationItem.style.display = 'none';
    }
  }
  
  // Social links in contact section
  const socialContainer = document.querySelector('.contact__social');
  if (socialContainer) {
    if (hasContent(social)) {
      socialContainer.innerHTML = social.map(({ platform, url, icon }) => `
        <a href="${url || '#'}" 
           class="hero__social-link" 
           target="_blank" 
           rel="noopener noreferrer"
           aria-label="${platform || 'Social link'}">
          ${getIcon(icon || 'external')}
        </a>
      `).join('');
    } else {
      socialContainer.style.display = 'none';
    }
  }
}

/**
 * Populate footer
 */
function populateFooter() {
  const personal = safeGet(portfolioData, 'personal', {});
  
  // Copyright year
  const yearEl = document.querySelector('[data-year]');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
  
  // Name in footer
  const nameEl = document.querySelector('[data-footer-name]');
  if (nameEl && personal.name) {
    nameEl.textContent = personal.name;
  }
}

/**
 * Update page metadata
 */
function updateMetadata() {
  const meta = safeGet(portfolioData, 'meta', {});
  const personal = safeGet(portfolioData, 'personal', {});
  
  // Page title
  document.title = meta.siteTitle || (personal.name ? `${personal.name} - Portfolio` : 'Portfolio');
  
  // Meta description
  const descMeta = document.querySelector('meta[name="description"]');
  if (descMeta) {
    descMeta.content = meta.siteDescription || personal.tagline || '';
  }
  
  // Open Graph tags
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.content = meta.siteTitle || personal.name || 'Portfolio';
  
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.content = meta.siteDescription || personal.tagline || '';
  
  const ogImage = document.querySelector('meta[property="og:image"]');
  if (ogImage && meta.ogImage) ogImage.content = meta.ogImage;
  
  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl && meta.siteUrl) ogUrl.content = meta.siteUrl;
  
  // Twitter tags
  const twTitle = document.querySelector('meta[name="twitter:title"]');
  if (twTitle) twTitle.content = meta.siteTitle || personal.name || 'Portfolio';
  
  const twDesc = document.querySelector('meta[name="twitter:description"]');
  if (twDesc) twDesc.content = meta.siteDescription || personal.tagline || '';
}

/* ===========================================
   3. UI INTERACTIONS
   =========================================== */

/**
 * Set up navigation active state
 */
function setupNavigation() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__link');
  
  if (sections.length === 0 || navLinks.length === 0) return;
  
  // Update active link on scroll
  const updateActiveLink = () => {
    const scrollPos = window.scrollY + 100;
    
    sections.forEach((section) => {
      // Skip hidden sections
      if (section.style.display === 'none') return;
      
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove('nav__link--active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('nav__link--active');
          }
        });
      }
    });
  };
  
  window.addEventListener('scroll', throttle(updateActiveLink, 100), { passive: true });
  updateActiveLink();
}

/**
 * Set up mobile menu toggle
 */
function setupMobileMenu() {
  const menuBtn = document.querySelector('.nav__menu-btn');
  const navLinks = document.querySelector('.nav__links');
  
  if (!menuBtn || !navLinks) return;
  
  menuBtn.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('nav__links--open');
    menuBtn.classList.toggle('nav__menu-btn--open');
    menuBtn.setAttribute('aria-expanded', isOpen);
    
    // Prevent body scroll when menu is open
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });
  
  // Close menu on link click
  navLinks.querySelectorAll('.nav__link').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('nav__links--open');
      menuBtn.classList.remove('nav__menu-btn--open');
      menuBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
  
  // Close menu on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('nav__links--open')) {
      navLinks.classList.remove('nav__links--open');
      menuBtn.classList.remove('nav__menu-btn--open');
      menuBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });
}

/**
 * Set up contact form handling
 */
function setupContactForm() {
  const form = document.querySelector('.contact__form');
  if (!form) return;
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    // Here you would typically send the data to a server
    // For now, we'll just log it and show a success message
    console.log('Form submitted:', data);
    
    // Show success message (replace with actual implementation)
    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) {
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Message Sent!';
      submitBtn.disabled = true;
      
      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        form.reset();
      }, 3000);
    }
  });
}

/* ===========================================
   4. UTILITY FUNCTIONS
   =========================================== */

/**
 * Throttle function for scroll events
 */
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

/**
 * Debounce function
 */
function debounce(func, wait) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

/* ===========================================
   5. ICONS
   =========================================== */

/**
 * Get SVG icon by name
 */
function getIcon(name) {
  const icons = {
    github: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
      </svg>
    `,
    linkedin: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    `,
    twitter: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
      </svg>
    `,
    dribbble: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"/>
        <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"/>
        <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"/>
      </svg>
    `,
    email: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    `,
    phone: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    `,
    location: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    `,
    external: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
        <polyline points="15 3 21 3 21 9"/>
        <line x1="10" y1="14" x2="21" y2="3"/>
      </svg>
    `,
    download: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="7 10 12 15 17 10"/>
        <line x1="12" y1="15" x2="12" y2="3"/>
      </svg>
    `,
    sun: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="5"/>
        <line x1="12" y1="1" x2="12" y2="3"/>
        <line x1="12" y1="21" x2="12" y2="23"/>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
        <line x1="1" y1="12" x2="3" y2="12"/>
        <line x1="21" y1="12" x2="23" y2="12"/>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
      </svg>
    `,
    moon: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
      </svg>
    `,
    menu: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="3" y1="12" x2="21" y2="12"/>
        <line x1="3" y1="6" x2="21" y2="6"/>
        <line x1="3" y1="18" x2="21" y2="18"/>
      </svg>
    `,
    x: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"/>
        <line x1="6" y1="6" x2="18" y2="18"/>
      </svg>
    `,
    arrow: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="5" y1="12" x2="19" y2="12"/>
        <polyline points="12 5 19 12 12 19"/>
      </svg>
    `
  };
  
  return icons[name] || icons['external'];
}
