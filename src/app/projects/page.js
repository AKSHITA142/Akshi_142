'use client';

import { motion } from 'framer-motion';
import { Bot, ShoppingBag, BarChart3, Users, Layout, CheckSquare } from 'lucide-react';

const PROJECTS = [
  {
    title: "AI Chat Platform",
    description: "Real-time collaboration platform with AI-powered chat and document sharing.",
    icon: <Bot className="w-6 h-6 text-white" />,
    color: "bg-blue-500",
    tags: ["React", "Node.js", "WebSocket", "OpenAI"],
  },
  {
    title: "E-Commerce Dashboard",
    description: "Complete e-commerce solution with payment integration and analytics.",
    icon: <ShoppingBag className="w-6 h-6 text-white" />,
    color: "bg-pink-500",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
  },
  {
    title: "Data Visualization Tool",
    description: "Interactive data visualization dashboard with real-time updates.",
    icon: <BarChart3 className="w-6 h-6 text-white" />,
    color: "bg-emerald-500",
    tags: ["React", "D3.js", "Python", "FastAPI"],
  },
  {
    title: "Social Media App",
    description: "Mobile-first social networking platform with content sharing.",
    icon: <Users className="w-6 h-6 text-white" />,
    color: "bg-orange-500",
    tags: ["React Native", "Firebase", "Redux", "Expo"],
  },
  {
    title: "Portfolio Generator",
    description: "AI-powered portfolio website generator with custom templates.",
    icon: <Layout className="w-6 h-6 text-white" />,
    color: "bg-purple-500",
    tags: ["Vue.js", "Express", "MongoDB", "Tailwind"],
  },
  {
    title: "Task Management System",
    description: "Collaborative task management with kanban boards and time tracking.",
    icon: <CheckSquare className="w-6 h-6 text-white" />,
    color: "bg-teal-500",
    tags: ["Angular", "Spring Boot", "MySQL", "Docker"],
  }
];

export default function ProjectsPage() {
  return (
    <main className="w-full max-w-6xl mx-auto p-6 md:p-12 pb-24">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-brand-blue">My Projects</h1>
        <p className="text-foreground/60">Explore my recent work and side projects</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass-card p-6 flex flex-col hover:border-brand-purple/50 transition-colors group cursor-pointer"
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${project.color} shadow-lg group-hover:scale-110 transition-transform`}>
              {project.icon}
            </div>

            <h3 className="text-xl font-bold mb-3">{project.title}</h3>
            <p className="text-sm text-foreground/60 mb-6 flex-1">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-foreground/70">
                  {tag}
                </span>
              ))}
            </div>

            <button className="w-full py-3 rounded-lg bg-white/5 border border-white/10 text-sm hover:bg-brand-purple hover:border-brand-purple transition-all flex items-center justify-center gap-2">
              View Project <span>→</span>
            </button>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
