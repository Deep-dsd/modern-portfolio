/**
 * THEME CONFIGURATION
 * ===================
 * 
 * This file controls the visual theme of your portfolio.
 * 
 * TO CHANGE THEMES:
 * 1. Find the 'selectedTheme' variable below
 * 2. Change its value to one of the available theme names:
 *    - 'modern-minimal' : Sophisticated, clean aesthetic with warm metallic accents
 *    - 'creative-bold'  : Vibrant, energetic design with warm color palette
 * 3. Save and refresh your browser
 * 
 * DARK/LIGHT MODE:
 * The toggle in the navigation allows users to switch between light and dark modes.
 * Both themes support both modes. User preference is saved in localStorage.
 */

const THEME_CONFIG = {
  
  // =============================================
  // THEME SELECTION - CHANGE THIS VALUE
  // =============================================
  selectedTheme: 'modern-minimal', // Options: 'modern-minimal', 'creative-bold'
  
  // Default color mode when user first visits
  defaultMode: 'light', // Options: 'light', 'dark'
  
  // =============================================
  // THEME DEFINITIONS
  // =============================================
  themes: {
    
    /**
     * MODERN MINIMAL THEME
     * --------------------
     * A sophisticated, restrained aesthetic featuring:
     * - High contrast neutrals for clarity
     * - Warm gold accent for premium feel
     * - Classic serif/sans pairing for elegance
     * - Subtle shadows and minimal ornamentation
     */
    'modern-minimal': {
      name: 'Modern Minimal',
      description: 'Sophisticated elegance with warm metallic accents',
      
      colors: {
        light: {
          // Primary brand color - used for headings and key elements
          primary: '#1a1a1a',
          // Secondary color - used for supporting text and elements
          secondary: '#4a4a4a',
          // Accent color - the "pop" color for CTAs and highlights
          accent: '#b8860b',        // Dark goldenrod
          accentHover: '#9a7209',   // Darker gold for hover states
          accentLight: '#f5e6c8',   // Light gold for backgrounds
          // Background colors
          background: '#fefefe',    // Main page background
          surface: '#f7f6f3',       // Card and section backgrounds
          surfaceElevated: '#ffffff', // Elevated elements like modals
          // Text colors
          text: '#1a1a1a',          // Primary text
          textSecondary: '#5a5a5a', // Secondary/muted text
          textMuted: '#8a8a8a',     // Very muted text
          // Border and divider colors
          border: '#e8e6e1',        // Standard borders
          borderLight: '#f0eeea',   // Subtle borders
          // State colors
          success: '#2d5a27',
          error: '#a63d40',
          warning: '#b8860b'
        },
        dark: {
          primary: '#f5f5f5',
          secondary: '#c0c0c0',
          accent: '#d4a825',         // Brighter gold for dark mode
          accentHover: '#e6b82a',
          accentLight: '#2a2518',
          background: '#0c0c0c',
          surface: '#161616',
          surfaceElevated: '#1e1e1e',
          text: '#f5f5f5',
          textSecondary: '#a0a0a0',
          textMuted: '#707070',
          border: '#2a2a2a',
          borderLight: '#1e1e1e',
          success: '#4a9c44',
          error: '#e05555',
          warning: '#d4a825'
        }
      },
      
      fonts: {
        // Serif heading creates classic, authoritative feel
        heading: "'Playfair Display', 'Georgia', serif",
        // Clean geometric sans for body text
        body: "'DM Sans', 'Helvetica Neue', sans-serif",
        // Monospace for code and technical content
        mono: "'JetBrains Mono', 'Fira Code', monospace",
        // Font sizes (base is 1rem = 16px)
        sizes: {
          xs: '0.75rem',    // 12px
          sm: '0.875rem',   // 14px
          base: '1rem',     // 16px
          lg: '1.125rem',   // 18px
          xl: '1.25rem',    // 20px
          '2xl': '1.5rem',  // 24px
          '3xl': '1.875rem', // 30px
          '4xl': '2.25rem', // 36px
          '5xl': '3rem',    // 48px
          '6xl': '3.75rem', // 60px
          '7xl': '4.5rem'   // 72px
        },
        weights: {
          normal: 400,
          medium: 500,
          semibold: 600,
          bold: 700
        }
      },
      
      effects: {
        // Border radius - smaller values for minimal look
        borderRadius: {
          sm: '2px',
          md: '4px',
          lg: '8px',
          xl: '12px',
          full: '9999px'
        },
        // Shadows - subtle and refined
        shadows: {
          sm: '0 1px 2px rgba(0, 0, 0, 0.04)',
          md: '0 4px 12px rgba(0, 0, 0, 0.06)',
          lg: '0 8px 24px rgba(0, 0, 0, 0.08)',
          xl: '0 16px 48px rgba(0, 0, 0, 0.1)'
        },
        // Transitions
        transitions: {
          fast: '150ms ease',
          normal: '250ms ease',
          slow: '400ms ease'
        }
      },
      
      // Layout-specific settings
      layout: {
        maxWidth: '1200px',
        sectionSpacing: '6rem',
        contentPadding: '2rem'
      }
    },
    
    /**
     * CREATIVE BOLD THEME
     * -------------------
     * An energetic, expressive aesthetic featuring:
     * - Warm, vibrant orange as the hero color
     * - Deep navy as grounding contrast
     * - Modern geometric type for energy
     * - Bolder shadows and playful borders
     */
    'creative-bold': {
      name: 'Creative Bold',
      description: 'Vibrant energy with warm, confident colors',
      
      colors: {
        light: {
          primary: '#d94f00',        // Burnt orange - confident and warm
          secondary: '#1e3a5f',      // Deep navy - professional anchor
          accent: '#e85d04',         // Vivid orange for CTAs
          accentHover: '#dc5200',
          accentLight: '#fff2e8',
          background: '#fffbf7',     // Warm white
          surface: '#ffffff',
          surfaceElevated: '#ffffff',
          text: '#1a1a1a',
          textSecondary: '#4a4a4a',
          textMuted: '#7a7a7a',
          border: '#f0e6dc',
          borderLight: '#f7f0e8',
          success: '#2d6a4f',
          error: '#c1292e',
          warning: '#e85d04'
        },
        dark: {
          primary: '#ff7b3d',        // Lighter orange for dark mode
          secondary: '#6db3f2',      // Light blue complement
          accent: '#ff8c4a',
          accentHover: '#ff9d61',
          accentLight: '#2a1a10',
          background: '#0f0f0f',
          surface: '#1a1a1a',
          surfaceElevated: '#252525',
          text: '#f5f5f5',
          textSecondary: '#b0b0b0',
          textMuted: '#707070',
          border: '#333333',
          borderLight: '#252525',
          success: '#52b788',
          error: '#ff6b6b',
          warning: '#ff8c4a'
        }
      },
      
      fonts: {
        // Bold geometric sans for impact
        heading: "'Space Grotesk', 'Arial Black', sans-serif",
        // Friendly, readable body font
        body: "'Outfit', 'Helvetica Neue', sans-serif",
        mono: "'Source Code Pro', 'Fira Code', monospace",
        sizes: {
          xs: '0.75rem',
          sm: '0.875rem',
          base: '1rem',
          lg: '1.125rem',
          xl: '1.25rem',
          '2xl': '1.5rem',
          '3xl': '2rem',
          '4xl': '2.5rem',
          '5xl': '3.5rem',
          '6xl': '4.5rem',
          '7xl': '5.5rem'
        },
        weights: {
          normal: 400,
          medium: 500,
          semibold: 600,
          bold: 700
        }
      },
      
      effects: {
        // Larger radius for playful feel
        borderRadius: {
          sm: '4px',
          md: '8px',
          lg: '16px',
          xl: '24px',
          full: '9999px'
        },
        // Bolder shadows with color tint
        shadows: {
          sm: '0 2px 4px rgba(217, 79, 0, 0.06)',
          md: '0 4px 16px rgba(217, 79, 0, 0.1)',
          lg: '0 8px 32px rgba(217, 79, 0, 0.12)',
          xl: '0 16px 64px rgba(217, 79, 0, 0.15)'
        },
        transitions: {
          fast: '150ms ease-out',
          normal: '250ms ease-out',
          slow: '400ms cubic-bezier(0.4, 0, 0.2, 1)'
        }
      },
      
      layout: {
        maxWidth: '1280px',
        sectionSpacing: '7rem',
        contentPadding: '2rem'
      }
    }
  }
};

/**
 * Theme Manager Class
 * Handles theme application, dark/light mode toggling, and persistence
 */
class ThemeManager {
  constructor() {
    this.currentTheme = THEME_CONFIG.selectedTheme;
    this.currentMode = this.getSavedMode() || THEME_CONFIG.defaultMode;
    this.themeData = THEME_CONFIG.themes[this.currentTheme];
  }
  
  /**
   * Initialize the theme system
   * Call this on page load
   */
  init() {
    this.applyTheme();
    this.setupToggleButton();
    this.setupSystemPreferenceListener();
    
    // Add loaded class after theme is applied to enable transitions
    requestAnimationFrame(() => {
      document.body.classList.add('theme-loaded');
    });
  }
  
  /**
   * Get saved color mode from localStorage
   */
  getSavedMode() {
    return localStorage.getItem('portfolio-color-mode');
  }
  
  /**
   * Save color mode preference
   */
  saveMode(mode) {
    localStorage.setItem('portfolio-color-mode', mode);
  }
  
  /**
   * Apply the current theme and mode to the document
   */
  applyTheme() {
    const theme = this.themeData;
    const colors = theme.colors[this.currentMode];
    const root = document.documentElement;
    
    // Set data attribute for CSS targeting
    document.body.setAttribute('data-theme', this.currentMode);
    document.body.setAttribute('data-theme-name', this.currentTheme);
    
    // Apply color variables
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${this.camelToKebab(key)}`, value);
    });
    
    // Apply font variables
    root.style.setProperty('--font-heading', theme.fonts.heading);
    root.style.setProperty('--font-body', theme.fonts.body);
    root.style.setProperty('--font-mono', theme.fonts.mono);
    
    Object.entries(theme.fonts.sizes).forEach(([key, value]) => {
      root.style.setProperty(`--text-${key}`, value);
    });
    
    Object.entries(theme.fonts.weights).forEach(([key, value]) => {
      root.style.setProperty(`--font-${key}`, value);
    });
    
    // Apply effect variables
    Object.entries(theme.effects.borderRadius).forEach(([key, value]) => {
      root.style.setProperty(`--radius-${key}`, value);
    });
    
    Object.entries(theme.effects.shadows).forEach(([key, value]) => {
      root.style.setProperty(`--shadow-${key}`, value);
    });
    
    Object.entries(theme.effects.transitions).forEach(([key, value]) => {
      root.style.setProperty(`--transition-${key}`, value);
    });
    
    // Apply layout variables
    Object.entries(theme.layout).forEach(([key, value]) => {
      root.style.setProperty(`--layout-${this.camelToKebab(key)}`, value);
    });
    
    // Update meta theme-color for mobile browsers
    this.updateMetaThemeColor(colors.background);
  }
  
  /**
   * Toggle between light and dark modes
   */
  toggleMode() {
    this.currentMode = this.currentMode === 'light' ? 'dark' : 'light';
    this.saveMode(this.currentMode);
    this.applyTheme();
    this.updateToggleButton();
  }
  
  /**
   * Set up the theme toggle button
   */
  setupToggleButton() {
    const toggle = document.getElementById('theme-toggle');
    if (!toggle) return;
    
    toggle.addEventListener('click', () => this.toggleMode());
    this.updateToggleButton();
  }
  
  /**
   * Update toggle button appearance based on current mode
   */
  updateToggleButton() {
    const toggle = document.getElementById('theme-toggle');
    if (!toggle) return;
    
    const sunIcon = toggle.querySelector('.icon-sun');
    const moonIcon = toggle.querySelector('.icon-moon');
    
    if (this.currentMode === 'dark') {
      sunIcon?.classList.remove('hidden');
      moonIcon?.classList.add('hidden');
      toggle.setAttribute('aria-label', 'Switch to light mode');
    } else {
      sunIcon?.classList.add('hidden');
      moonIcon?.classList.remove('hidden');
      toggle.setAttribute('aria-label', 'Switch to dark mode');
    }
  }
  
  /**
   * Listen for system preference changes
   */
  setupSystemPreferenceListener() {
    // Only auto-switch if user hasn't set a preference
    if (this.getSavedMode()) return;
    
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    mediaQuery.addEventListener('change', (e) => {
      if (!this.getSavedMode()) {
        this.currentMode = e.matches ? 'dark' : 'light';
        this.applyTheme();
        this.updateToggleButton();
      }
    });
  }
  
  /**
   * Update meta theme-color for mobile browser chrome
   */
  updateMetaThemeColor(color) {
    let metaTheme = document.querySelector('meta[name="theme-color"]');
    if (!metaTheme) {
      metaTheme = document.createElement('meta');
      metaTheme.name = 'theme-color';
      document.head.appendChild(metaTheme);
    }
    metaTheme.content = color;
  }
  
  /**
   * Convert camelCase to kebab-case
   */
  camelToKebab(str) {
    return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
  }
  
  /**
   * Get current theme data
   */
  getTheme() {
    return this.themeData;
  }
  
  /**
   * Get current color mode
   */
  getMode() {
    return this.currentMode;
  }
}

// Create global theme manager instance
const themeManager = new ThemeManager();
