export const portfolioData = {
  name: "AI Portfolio Owner",
  role: "Full Stack Developer & Designer",
  about: "A passionate full-stack developer and designer who loves creating beautiful, functional experiences that solve real problems. Over 5 years of experience in web development.",
  skills: [
    { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Vue.js"] },
    { category: "Backend", items: ["Node.js", "Python", "Express", "PostgreSQL", "MongoDB"] },
    { category: "AI & ML", items: ["OpenAI API", "LangChain", "TensorFlow", "PyTorch", "Prompt Engineering"] },
    { category: "DevOps", items: ["Git", "Docker", "AWS", "CI/CD", "Vercel"] }
  ],
  projects: [
    {
      id: 1,
      name: "AI Chat Platform",
      tech: ["React", "Node.js", "WebSocket", "OpenAI"],
      type: "fullstack",
      description: "Real-time collaboration platform with AI-powered chat and document sharing.",
      level: "advanced"
    },
    {
      id: 2,
      name: "E-Commerce Dashboard",
      tech: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
      type: "frontend",
      description: "Complete e-commerce solution with payment integration and analytics.",
      level: "advanced"
    },
    {
      id: 3,
      name: "Data Visualization Tool",
      tech: ["React", "D3.js", "Python", "FastAPI"],
      type: "fullstack",
      description: "Interactive data visualization dashboard with real-time updates.",
      level: "advanced"
    },
    {
      id: 4,
      name: "Social Media App",
      tech: ["React Native", "Firebase", "Redux", "Expo"],
      type: "mobile",
      description: "Mobile-first social networking platform with content sharing.",
      level: "intermediate"
    },
    {
      id: 5,
      name: "Portfolio Generator",
      tech: ["Vue.js", "Express", "MongoDB", "Tailwind"],
      type: "fullstack",
      description: "AI-powered portfolio website generator with custom templates.",
      level: "intermediate"
    },
    {
      id: 6,
      name: "Task Management System",
      tech: ["Angular", "Spring Boot", "MySQL", "Docker"],
      type: "fullstack",
      description: "Collaborative task management with kanban boards and time tracking.",
      level: "intermediate"
    }
  ],
  experience: [
    { role: "Senior Full Stack Developer", company: "Tech Innovations Inc.", period: "2023 - Present" },
    { role: "Full Stack Developer", company: "Digital Solutions Ltd.", period: "2021 - 2023" }
  ],
  contact: {
    email: "hello@portfolio.com",
    github: "github.com/yourprofile",
    linkedin: "linkedin.com/in/yourprofile"
  }
};
