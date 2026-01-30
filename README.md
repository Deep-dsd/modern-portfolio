# Portfolio

A customizable portfolio website with two themes, light/dark mode, and smooth animations. Pure HTML, CSS, and JavaScript — no build step required.

## Quick Start

1. Edit `js/data.js` with your information
2. Change theme in `js/theme.js` (line 18): `'modern-minimal'` or `'creative-bold'`
3. Add images to `assets/images/`
4. Open `index.html` in browser

## File Structure

```
js/data.js       → Your content (name, experience, projects, etc.)
js/theme.js      → Theme selection and colors
assets/images/   → Profile photo and project images
```

## Customization

### Content (`js/data.js`)

All sections are optional — remove what you don't need:

```javascript
portfolioData = {
  personal: { name, title, email, location, profileImage },
  social: [{ platform, url, icon }],
  about: { summary, highlights },
  experience: [{ company, position, duration, achievements, technologies }],
  projects: [{ title, description, image, technologies, liveUrl, githubUrl, featured }],
  skills: { "Category": ["Skill 1", "Skill 2"] },
  education: [{ degree, institution, year }],
  certifications: [{ name, issuer, year }]
}
```

### Theme (`js/theme.js`)

```javascript
selectedTheme: 'modern-minimal'  // or 'creative-bold'
defaultMode: 'light'             // or 'dark'
```

### Images

- `profile.jpg` — Your photo
- `project-*.jpg` — Project screenshots
- `og-image.jpg` — Social sharing preview (1200x630px)

## Deployment

**GitHub Pages**: Settings → Pages → Deploy from branch → `main`

**Netlify/Vercel**: Connect repo → Deploy (no build command needed)

**Manual**: Upload all files to your hosting provider

## License

MIT
