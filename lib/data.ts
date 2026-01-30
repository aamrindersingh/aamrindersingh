export const personalInfo = {
  name: "Amrinder Singh",
  role: "Software Engineer Intern @ InterviewBit",
  tagline: "Backend & AI Integration | Cloud Deployments | Scalable APIs",
  avatar: "https://avatars.githubusercontent.com/u/180407147?v=4",
  email: "officialamrindersinghh@gmail.com",
  github: "https://github.com/aamrindersingh",
  linkedin: "https://www.linkedin.com/in/amrinder-singh-873a47325/",
  bio: "Software Engineer Intern at InterviewBit with a strong focus on problem-solving, backend systems, and scalable APIs. Passionate about building real-world, production-grade solutions with clean design and strong fundamentals. Experienced in authentication workflows, cloud deployments, and AI-powered systems.",
};

export const skills = {
  languages: [
    { name: "Java", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "TypeScript", level: 85 },
    { name: "Python", level: 80 },
    { name: "SQL", level: 75 },
  ],
  frameworks: [
    { name: "Node.js", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "React", level: 85 },
    { name: "Express", level: 90 },
    { name: "Spring Boot", level: 80 },
  ],
  databases: [
    { name: "MongoDB", level: 85 },
    { name: "PostgreSQL", level: 80 },
    { name: "SQLite", level: 75 },
    { name: "Firebase", level: 80 },
  ],
  tools: [
    { name: "Docker", level: 75 },
    { name: "Git", level: 90 },
    { name: "Prisma", level: 80 },
    { name: "REST APIs", level: 90 },
  ],
  cloud: [
    { name: "Render", level: 85 },
    { name: "Vercel", level: 85 },
    { name: "Netlify", level: 80 },
  ],
};

export const projects = [
  {
    id: 1,
    title: "Linear.app Clone",
    description: "Full-featured project management tool inspired by Linear with issues management, Kanban boards, projects, and teams functionality.",
    image: "/projects/linear-clone.png",
    tech: ["React", "TypeScript", "Express", "Prisma", "SQLite", "Tailwind CSS"],
    github: "https://github.com/aamrindersingh/Linear.app-Clone",
    demo: null,
    featured: true,
  },
  {
    id: 2,
    title: "Taskify",
    description: "Beautiful task management app with dark mode and smooth animations. Features JWT authentication, categories, priorities, and dashboard statistics.",
    image: "/projects/taskify.png",
    tech: ["MongoDB", "Express", "React", "Node.js", "Framer Motion", "Tailwind CSS"],
    github: "https://github.com/aamrindersingh/Taskify-2",
    demo: null,
    featured: true,
  },
  {
    id: 3,
    title: "NutriScan",
    description: "AI-powered nutrition tracking app with barcode scanning, AI recommendations, and daily goals tracking. Built as a Progressive Web App.",
    image: "/projects/nutriscan.png",
    tech: ["Next.js", "TypeScript", "PWA", "Gemini AI", "PostgreSQL"],
    github: "https://github.com/aamrindersingh/NutriScan",
    demo: "https://nutriscanner-frontend-1.onrender.com/",
    featured: true,
  },
  {
    id: 4,
    title: "Travel Sync",
    description: "Travel companion matching platform with smart algorithms. Features user matching, score breakdown, and travel planning capabilities.",
    image: "/projects/travel-sync.png",
    tech: ["Next.js", "TypeScript", "Matching Algorithms"],
    github: "https://github.com/aamrindersingh/Travel_Sync_Frontend",
    demo: null,
    featured: false,
  },
  {
    id: 5,
    title: "RideShare",
    description: "Backend API for ride sharing with secure authentication. Features role-based auth, ride management, and driver/user flows.",
    image: "/projects/rideshare.png",
    tech: ["Spring Boot", "Java", "MongoDB Atlas", "JWT"],
    github: "https://github.com/aamrindersingh/RideShare",
    demo: null,
    featured: false,
  },
];

export const experience = [
  {
    id: 1,
    company: "InterviewBit",
    role: "Software Engineer Intern",
    period: "November 2025 - Present",
    description: [
      "Working on interview-focused problem-solving and backend logic",
      "Contributing to internal tools, evaluation pipelines, and solution design",
      "Strengthening DSA, system thinking, and scalable backend practices",
    ],
    tech: ["Backend Systems", "Scalable APIs", "Authentication", "Cloud Deployments"],
    current: true,
  },
  {
    id: 2,
    company: "Innovation Lab",
    role: "Frontend Engineer",
    period: "June 2025 - August 2025",
    description: [
      "Implemented API integrations and optimized backend-frontend communication",
      "Built AI-powered chatbot workflows using ML endpoints",
      "Worked with cloud deployments (Render, Neon) and real-time data pipelines",
    ],
    tech: ["React", "API Integration", "AI/ML", "Cloud Deployments"],
    current: false,
  },
];
