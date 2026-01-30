# Resume to Portfolio Data Converter

Convert the provided resume into a JSON object matching the exact structure below. Follow these rules:

## Rules
1. Output ONLY valid JSON — no markdown, no explanations, no code blocks
2. Keep the exact field names and structure
3. If information is missing from the resume, use `null` for optional fields or omit the section
4. Write in first person for the `about.summary` field
5. Extract technologies/skills mentioned in each role for the `technologies` array
6. Set `featured: true` for the most impressive 2-3 projects
7. Make the tagline punchy and professional (one line)
8. For achievements, quantify with numbers where possible (keep from resume or infer reasonably)
9. Make sure the object gets generated inside a constant named `portfolioData`

## JSON Structure

```javascript
const portfolioData = {
  personal: {
    name: "",
    title: "",           // Primary job title
    tagline: "",         // One-line professional summary
    email: "",
    phone: "",
    location: "",
    profileImage: "assets/images/profile.jpg",
    resumeUrl: "assets/resume.pdf"
  },
  
  social: [
    { platform: "GitHub", url: "", icon: "github" },
    { platform: "LinkedIn", url: "", icon: "linkedin" },
    { platform: "Twitter", url: "", icon: "twitter" }
  ],
  
  about: {
    summary: "",         // 2-3 paragraphs, first person, separated by \n\n
    highlights: []       // 4-6 key achievements/highlights as strings
  },
  
  experience: [
    {
      company: "",
      position: "",
      duration: "",      // Format: "Mon YYYY - Present" or "Mon YYYY - Mon YYYY"
      location: "",
      description: "",   // 1-2 sentence role summary
      achievements: [],  // Array of bullet points
      technologies: []   // Array of tech used in this role
    }
  ],
  
  projects: [
    {
      title: "",
      description: "",       // Short description (1-2 sentences)
      longDescription: "",   // Detailed description for featured projects
      image: "assets/images/project-bg-one.jpg",  // Increment: project-bg-two.jpg, etc.
      technologies: [],
      liveUrl: "",           // null if not available
      githubUrl: "",         // null if not available
      featured: false,       // true for top 2-3 projects
      year: ""
    }
  ],
  
  skills: {
    "Category Name": ["Skill 1", "Skill 2"]
    // Group logically: Languages, Frontend, Backend, Tools, etc.
  },
  
  education: [
    {
      degree: "",
      institution: "",
      year: "",
      gpa: "",              // null if not mentioned
      achievements: []      // null if none
    }
  ],
  
  certifications: [],       // Empty array if none
  
  meta: {
    siteTitle: "",          // "Name - Title"
    siteDescription: "",    // SEO description
    siteUrl: "",
    ogImage: "assets/images/og-image.jpg",
    twitterHandle: "",
    keywords: []
  }
};
```

---

## Resume

[ADD YOUR RESUME TEXT HERE/UPLOAD RESUME]

---

Now generate the portfolioData JSON:
