# Modern Customizable Portfolio

A beautiful, highly customizable portfolio website built with pure HTML, CSS, and JavaScript. Designed to avoid generic "AI slop" aesthetics with two distinctive theme options and easy content customization.

![Portfolio Preview](assets/images/og-image.jpg)

## ✨ Features

- **Two Distinctive Themes**: Modern Minimal (sophisticated elegance) and Creative Bold (vibrant energy)
- **Light/Dark Mode**: Smooth toggle with localStorage persistence
- **Fully Customizable**: All content managed through a single `data.js` file
- **Responsive Design**: Mobile-first approach with touch-friendly interactions
- **Smooth Animations**: Scroll-triggered animations with reduced motion support
- **Accessible**: WCAG AA compliant with semantic HTML and keyboard navigation
- **Performance Optimized**: No heavy frameworks, lazy loading, optimized CSS
- **SEO Ready**: Proper meta tags, Open Graph, and JSON-LD structured data

## 🚀 Quick Start

### 1. Download or Clone

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio.git

# Or download and extract the ZIP file
```

### 2. Customize Your Content

Open `js/data.js` and replace the placeholder content with your information:

```javascript
const portfolioData = {
  personal: {
    name: "Your Name",
    title: "Your Title",
    tagline: "Your tagline here",
    email: "your@email.com",
    // ... more fields
  },
  // ... rest of your data
};
```

### 3. Choose Your Theme

Open `js/theme.js` and change the `selectedTheme` value:

```javascript
const THEME_CONFIG = {
  selectedTheme: 'modern-minimal', // Options: 'modern-minimal', 'creative-bold'
  defaultMode: 'light', // Options: 'light', 'dark'
  // ...
};
```

### 4. Add Your Images

Place your images in the `assets/images/` folder:
- `profile.jpg` - Your profile photo
- `project-*.jpg` - Project screenshots
- `og-image.jpg` - Social media preview image (1200x630px recommended)

### 5. Open in Browser

Simply open `index.html` in your browser to view your portfolio locally.

## 📁 File Structure

```
portfolio/
├── index.html              # Main HTML file
├── css/
│   ├── main.css           # Core styles and layout
│   ├── themes.css         # Theme-specific styles
│   └── animations.css     # Animation definitions
├── js/
│   ├── data.js            # ⭐ YOUR CONTENT GOES HERE
│   ├── theme.js           # Theme configuration
│   ├── app.js             # Main application logic
│   └── animations.js      # Scroll animations
├── assets/
│   └── images/            # Your images
└── README.md              # This file
```

## 🎨 Theme Comparison

### Modern Minimal
- **Style**: Sophisticated, restrained, elegant
- **Colors**: High contrast neutrals with warm gold accent
- **Typography**: Serif headings (Playfair Display) + geometric sans body (DM Sans)
- **Details**: Subtle shadows, minimal ornamentation, timeline-style experience section

### Creative Bold
- **Style**: Vibrant, energetic, expressive
- **Colors**: Warm orange primary with navy accent
- **Typography**: Bold geometric (Space Grotesk) + friendly sans (Outfit)
- **Details**: Larger border radius, colored shadows, card-based experience section

## ✏️ Customization Guide

### Editing Your Data

The `data.js` file contains all your portfolio content organized into sections:

#### Personal Information
```javascript
personal: {
  name: "Your Full Name",
  title: "Your Professional Title",
  tagline: "A short description of what you do",
  email: "your@email.com",
  phone: "+1234567890",
  location: "City, Country",
  profileImage: "assets/images/profile.jpg",
  resumeUrl: "assets/resume.pdf"
}
```

#### Social Links
```javascript
social: [
  { platform: "GitHub", url: "https://github.com/username", icon: "github" },
  { platform: "LinkedIn", url: "https://linkedin.com/in/username", icon: "linkedin" },
  { platform: "Twitter", url: "https://twitter.com/username", icon: "twitter" }
]
```

Available icons: `github`, `linkedin`, `twitter`, `dribbble`, `email`, `external`

#### Work Experience
```javascript
experience: [
  {
    company: "Company Name",
    position: "Your Role",
    duration: "Jan 2022 - Present",
    location: "City, State",
    description: "Brief description of your role",
    achievements: [
      "Key achievement with metrics",
      "Another accomplishment"
    ],
    technologies: ["React", "Node.js", "PostgreSQL"]
  }
]
```

#### Projects
```javascript
projects: [
  {
    title: "Project Name",
    description: "Short description",
    longDescription: "Detailed description for featured projects",
    image: "assets/images/project-name.jpg",
    technologies: ["React", "TypeScript"],
    liveUrl: "https://project-url.com",
    githubUrl: "https://github.com/username/project",
    featured: true,  // Featured projects are displayed larger
    year: "2024"
  }
]
```

#### Skills
```javascript
skills: {
  "Category Name": ["Skill 1", "Skill 2", "Skill 3"],
  "Another Category": ["Skill A", "Skill B"]
}
```

### Adding Custom Colors

To modify theme colors, edit `js/theme.js`:

```javascript
themes: {
  'modern-minimal': {
    colors: {
      light: {
        accent: '#your-color',    // Main accent color
        accentHover: '#darker',   // Hover state
        accentLight: '#lighter',  // Light variant for backgrounds
        // ... other colors
      },
      dark: {
        // Dark mode variants
      }
    }
  }
}
```

### Converting Your Resume

Map your resume sections to `data.js`:

| Resume Section | data.js Field |
|----------------|---------------|
| Contact Info | `personal` |
| Summary | `about.summary` |
| Experience | `experience[]` |
| Education | `education[]` |
| Skills | `skills{}` |
| Certifications | `certifications[]` |
| Projects | `projects[]` |

**Tips:**
- Convert bullet points to `achievements` arrays
- Add `technologies` arrays for each role
- Use the `featured: true` flag for your best projects

## 🌐 Deployment

### GitHub Pages

1. Push your code to a GitHub repository
2. Go to Settings → Pages
3. Select "Deploy from a branch"
4. Choose `main` branch and `/ (root)` folder
5. Your site will be live at `https://username.github.io/repo-name`

### Netlify

1. Push your code to GitHub/GitLab/Bitbucket
2. Log in to [Netlify](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Deploy settings: leave defaults (no build command needed)
6. Click "Deploy site"

**Custom domain**: Add your domain in Site settings → Domain management

### Vercel

1. Push your code to GitHub
2. Log in to [Vercel](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Framework Preset: "Other"
6. Click "Deploy"

### Manual Hosting

Upload all files to your web hosting provider's `public_html` or `www` folder via FTP or file manager.

## 🔧 Technical Details

### Browser Support

- Chrome/Edge 80+
- Firefox 75+
- Safari 13+
- Mobile browsers (iOS Safari, Chrome for Android)

### Performance

- No external JavaScript frameworks
- CSS custom properties for instant theme switching
- Intersection Observer for efficient scroll animations
- Lazy loading for images below the fold
- ~15KB CSS (unminified), ~20KB JavaScript (unminified)

### Accessibility

- Semantic HTML5 elements
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus indicators
- Skip link for main content
- Respects `prefers-reduced-motion`
- Color contrast meets WCAG AA standards

## 🛠️ Development

### Local Development

Simply open `index.html` in your browser. No build step required!

For live reload during development, you can use:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (install serve globally first)
npx serve

# Using PHP
php -S localhost:8000
```

### Customizing Styles

- **main.css**: Core layout, typography, and component styles
- **themes.css**: Theme-specific overrides and variations
- **animations.css**: All animation definitions

CSS custom properties are used extensively. Override them in your browser's dev tools to preview changes before editing.

### Adding New Sections

1. Add HTML structure in `index.html`
2. Add corresponding data in `data.js`
3. Create a populate function in `app.js`
4. Call the function in `populateContent()`
5. Style in `main.css`

## 📝 License

MIT License - feel free to use this for your personal portfolio!

## 🙏 Credits

- Fonts: [Google Fonts](https://fonts.google.com)
- Icons: Custom SVG (Feather-style)
- Inspiration: Modern portfolio design trends

---

**Questions?** Open an issue or reach out!

Made with ☕ and attention to detail.
