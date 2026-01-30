/**
 * PORTFOLIO DATA CONFIGURATION
 * ============================
 * 
 * Edit this file to customize your portfolio content.
 * All text, links, and information displayed on the website comes from here.
 * 
 * INSTRUCTIONS:
 * 1. Replace all placeholder text with your actual information
 * 2. Add or remove items from arrays as needed
 * 3. Update image paths to point to your actual images
 * 4. Save the file and refresh your browser to see changes
 * 
 * FLEXIBILITY:
 * - All sections are optional. If you leave an array empty or remove a section,
 *   the portfolio will gracefully hide that section.
 * - You can remove any field you don't need - no errors will occur.
 */

const portfolioData = {
  
  // ============================================
  // PERSONAL INFORMATION
  // ============================================
  // Basic details shown in the hero section and throughout the site
  personal: {
    name: "Arjun Sharma",
    title: "Senior Software Engineer & Tech Lead",
    tagline: "Crafting scalable solutions and leading teams to build impactful products",
    email: "arjun.sharma@techmail.in",
    phone: "+91 98765 43210",
    location: "Bengaluru, Karnataka",
    profileImage: "assets/images/profile.jpg",
    resumeUrl: "assets/resume.pdf" // Link to downloadable resume (optional - remove if not needed)
  },
  
  // ============================================
  // SOCIAL MEDIA LINKS
  // ============================================
  // Add or remove platforms as needed
  // Available icons: github, linkedin, twitter, dribbble, email, external
  social: [
    { 
      platform: "GitHub", 
      url: "https://github.com/arjunsharma", 
      icon: "github" 
    },
    { 
      platform: "LinkedIn", 
      url: "https://linkedin.com/in/arjunsharma", 
      icon: "linkedin" 
    },
    { 
      platform: "Twitter", 
      url: "https://twitter.com/arjun_codes", 
      icon: "twitter" 
    }
  ],
  
  // ============================================
  // ABOUT SECTION
  // ============================================
  // Your bio and key highlights/achievements
  about: {
    // Main summary - can include multiple paragraphs separated by \n\n
    summary: `I'm a software engineer with 8+ years of experience building web applications and distributed systems. Currently leading a team of 12 engineers at a unicorn startup in Bengaluru, where we're reimagining fintech for Bharat.

My journey started at IIT Bombay, where I fell in love with algorithms and system design. Since then, I've worked across the stack—from optimizing database queries to crafting pixel-perfect UIs. I believe great software is invisible to users and empowering to businesses.

When I'm not coding, you'll find me mentoring at local coding bootcamps, contributing to open source, or exploring the Western Ghats on weekend treks.`,
    
    // Key highlights shown as bullet points or tags
    highlights: [
      "Led engineering for a product serving 10M+ users across India",
      "Open source contributor - 3K+ GitHub stars across projects",
      "Speaker at JSFoo, ReactFoo, and Gophercon India",
      "Mentor at GirlScript and Coding Ninjas bootcamps",
      "Built India's first open-source UPI SDK"
    ]
  },
  
  // ============================================
  // WORK EXPERIENCE
  // ============================================
  // Listed from most recent to oldest
  // Remove this array or leave empty if you don't want to show experience
  experience: [
    {
      company: "PayRight Technologies",
      position: "Tech Lead - Platform Engineering",
      duration: "2022 - Present",
      location: "Bengaluru, Karnataka",
      description: "Leading platform engineering for India's fastest-growing B2B payments company. Architecting systems that process ₹500Cr+ in daily transactions.",
      achievements: [
        "Scaled payment processing from 1K to 50K TPS with 99.99% uptime",
        "Built real-time fraud detection system reducing chargebacks by 40%",
        "Led migration from monolith to microservices, improving deployment frequency 10x",
        "Mentoring team of 12 engineers across Bengaluru and Hyderabad offices"
      ],
      technologies: ["Go", "Kubernetes", "PostgreSQL", "Redis", "Kafka", "AWS"]
    },
    {
      company: "Flipkart",
      position: "Senior Software Engineer",
      duration: "2019 - 2022",
      location: "Bengaluru, Karnataka",
      description: "Full-stack development on seller platform serving 500K+ sellers. Owned end-to-end features from design to deployment.",
      achievements: [
        "Built inventory management system handling 100M+ SKUs",
        "Reduced page load time by 60% through performance optimizations",
        "Implemented A/B testing framework used across seller dashboard",
        "Led Big Billion Days tech readiness for seller platform"
      ],
      technologies: ["React", "Node.js", "Java", "MySQL", "Elasticsearch", "Docker"]
    },
    {
      company: "Infosys",
      position: "Systems Engineer",
      duration: "2016 - 2019",
      location: "Pune, Maharashtra",
      description: "Started career at Infosys working on enterprise applications for global banking clients. Grew from fresher to team lead.",
      achievements: [
        "Developed core banking module used by 50+ branches",
        "Automated deployment pipeline reducing release time from days to hours",
        "Received 'Infy Maker' award for innovation in process automation"
      ],
      technologies: ["Java", "Spring Boot", "Oracle", "Angular", "Jenkins"]
    }
  ],
  
  // ============================================
  // PROJECTS
  // ============================================
  // Featured projects with descriptions and links
  // Remove or leave empty if you don't want to show projects
  projects: [
    {
      title: "BharatPay SDK",
      description: "Open-source UPI SDK for Indian developers. Simplifies UPI integration with clean APIs and comprehensive documentation. Used by 200+ apps.",
      longDescription: "BharatPay SDK was born from frustration with existing UPI integration options. It provides a unified API across all UPI apps, handles edge cases gracefully, and includes built-in analytics. The SDK supports both Android and iOS with React Native bindings.",
      image: "assets/images/project-bg-one.jpg",
      technologies: ["Kotlin", "Swift", "React Native", "UPI"],
      liveUrl: "https://bharatpay-sdk.dev",
      githubUrl: "https://github.com/arjunsharma/bharatpay-sdk",
      featured: true,
      year: "2024"
    },
    {
      title: "Dukaan Analytics",
      description: "Real-time analytics dashboard for small merchants. Provides insights on sales, inventory, and customer behavior with simple visualizations.",
      longDescription: "Built for the 60M+ small merchants in India who deserve enterprise-grade analytics. The dashboard works offline, syncs when connected, and provides actionable insights in Hindi and English.",
      image: "assets/images/project-bg-two.jpg",
      technologies: ["Next.js", "D3.js", "Supabase", "PWA"],
      liveUrl: "https://dukaan-analytics.in",
      githubUrl: "https://github.com/arjunsharma/dukaan-analytics",
      featured: true,
      year: "2023"
    },
    {
      title: "CodeGuru",
      description: "AI-powered code review assistant trained on Indian coding patterns. Helps teams maintain consistent code quality with culturally-aware suggestions.",
      longDescription: "CodeGuru understands common patterns in Indian codebases, including naming conventions, documentation styles, and architecture preferences. It integrates with GitHub and GitLab.",
      image: "assets/images/project-bg-three.jpg",
      technologies: ["Python", "FastAPI", "OpenAI", "Docker"],
      liveUrl: null,
      githubUrl: "https://github.com/arjunsharma/codeguru",
      featured: true,
      year: "2023"
    },
    {
      title: "Chai.css",
      description: "A lightweight CSS framework inspired by Indian design aesthetics. Features warm colors, thoughtful spacing, and RTL support for Hindi/Urdu.",
      image: "assets/images/project-bg-four.jpg",
      technologies: ["CSS", "PostCSS", "Storybook"],
      liveUrl: "https://chai-css.dev",
      githubUrl: "https://github.com/arjunsharma/chai-css",
      featured: false,
      year: "2022"
    },
    {
      title: "Jugaad CI",
      description: "Minimal CI/CD tool designed for resource-constrained environments. Perfect for startups running on tight budgets.",
      image: "assets/images/project-bg-five.jpg",
      technologies: ["Go", "Docker", "SQLite"],
      liveUrl: null,
      githubUrl: "https://github.com/arjunsharma/jugaad-ci",
      featured: false,
      year: "2021"
    }
  ],
  
  // ============================================
  // SKILLS
  // ============================================
  // Organized by category - add or remove categories as needed
  // Remove or leave empty if you don't want to show skills
  skills: {
    "Languages": [
      "JavaScript/TypeScript",
      "Go",
      "Python",
      "Java",
      "SQL"
    ],
    "Frontend": [
      "React",
      "Next.js",
      "Vue.js",
      "Tailwind CSS",
      "React Native"
    ],
    "Backend": [
      "Node.js",
      "Go (Gin/Echo)",
      "Spring Boot",
      "PostgreSQL",
      "Redis"
    ],
    "Infrastructure": [
      "AWS",
      "Kubernetes",
      "Docker",
      "Terraform",
      "GitHub Actions"
    ],
    "Practices": [
      "System Design",
      "Microservices",
      "TDD",
      "Agile/Scrum",
      "Technical Writing"
    ]
  },
  
  // ============================================
  // EDUCATION
  // ============================================
  // Remove or leave empty if you don't want to show education
  education: [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Indian Institute of Technology, Bombay",
      year: "2016",
      gpa: "8.7/10",
      achievements: [
        "Dean's List - 6 semesters",
        "Best B.Tech Project Award",
        "Google Summer of Code participant"
      ]
    }
  ],
  
  // ============================================
  // CERTIFICATIONS
  // ============================================
  // Remove or leave empty if you don't want to show certifications
  certifications: [
    {
      name: "AWS Solutions Architect - Professional",
      issuer: "Amazon Web Services",
      year: "2023",
      credentialId: "AWS-SAP-2023",
      credentialUrl: "https://aws.amazon.com/verification"
    },
    {
      name: "Certified Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      year: "2022",
      credentialId: "CKA-2022-ARJUN",
      credentialUrl: "https://cncf.io/verify"
    },
    {
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      year: "2021",
      credentialId: "GCP-DEV-2021",
      credentialUrl: "https://google.com/verify"
    }
  ],
  
  // ============================================
  // TESTIMONIALS (Optional)
  // ============================================
  // Quotes from colleagues, managers, or clients
  // Remove this section entirely if you don't have testimonials
  testimonials: [
    {
      quote: "Arjun is one of the most thorough engineers I've worked with. He doesn't just solve problems—he anticipates them. His leadership transformed our platform team.",
      author: "Priya Krishnamurthy",
      role: "VP of Engineering at PayRight",
      image: "assets/images/testimonial-priya.jpg"
    },
    {
      quote: "Working with Arjun on the seller platform was a masterclass in building scalable systems. His ability to balance technical excellence with business needs is rare.",
      author: "Rahul Menon",
      role: "Principal Engineer at Flipkart",
      image: "assets/images/testimonial-rahul.jpg"
    }
  ],
  
  // ============================================
  // SITE METADATA
  // ============================================
  // SEO and social sharing configuration
  meta: {
    siteTitle: "Arjun Sharma - Senior Software Engineer",
    siteDescription: "Portfolio of Arjun Sharma, a senior software engineer specializing in scalable systems and fintech solutions.",
    siteUrl: "https://arjunsharma.dev",
    ogImage: "assets/images/og-image.jpg",
    twitterHandle: "@arjun_codes",
    keywords: ["software engineer", "tech lead", "full-stack developer", "fintech", "bengaluru", "india"]
  }
};

// Export for use in other modules
// Note: In a vanilla JS setup, this is available globally
// For module systems, uncomment: export default portfolioData;
