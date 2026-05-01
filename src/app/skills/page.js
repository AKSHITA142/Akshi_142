'use client';

import { motion } from 'framer-motion';
import { Palette, Settings, Bot, PenTool } from 'lucide-react';

const SKILL_CATEGORIES = [
  {
    title: "Frontend Development",
    icon: <Palette className="w-6 h-6 text-white" />,
    color: "bg-pink-500",
    skills: [
      { name: "React", level: "95%", progress: 95, barColor: "from-pink-500 to-rose-500" },
      { name: "TypeScript", level: "90%", progress: 90, barColor: "from-pink-500 to-rose-500" },
      { name: "Tailwind CSS", level: "95%", progress: 95, barColor: "from-pink-500 to-rose-500" },
      { name: "Next.js", level: "85%", progress: 85, barColor: "from-pink-500 to-rose-500" },
      { name: "Vue.js", level: "80%", progress: 80, barColor: "from-pink-500 to-rose-500" }
    ]
  },
  {
    title: "Backend Development",
    icon: <Settings className="w-6 h-6 text-white" />,
    color: "bg-cyan-500",
    skills: [
      { name: "Node.js", level: "90%", progress: 90, barColor: "from-cyan-400 to-blue-500" },
      { name: "Python", level: "85%", progress: 85, barColor: "from-cyan-400 to-blue-500" },
      { name: "Express", level: "88%", progress: 88, barColor: "from-cyan-400 to-blue-500" },
      { name: "PostgreSQL", level: "82%", progress: 82, barColor: "from-cyan-400 to-blue-500" },
      { name: "MongoDB", level: "80%", progress: 80, barColor: "from-cyan-400 to-blue-500" }
    ]
  },
  {
    title: "AI & Machine Learning",
    icon: <Bot className="w-6 h-6 text-white" />,
    color: "bg-purple-500",
    skills: [
      { name: "OpenAI API", level: "90%", progress: 90, barColor: "from-purple-400 to-brand-purple" },
      { name: "LangChain", level: "85%", progress: 85, barColor: "from-purple-400 to-brand-purple" },
      { name: "TensorFlow", level: "75%", progress: 75, barColor: "from-purple-400 to-brand-purple" },
      { name: "PyTorch", level: "70%", progress: 70, barColor: "from-purple-400 to-brand-purple" },
      { name: "Prompt Engineering", level: "92%", progress: 92, barColor: "from-purple-400 to-brand-purple" }
    ]
  },
  {
    title: "DevOps & Tools",
    icon: <PenTool className="w-6 h-6 text-white" />,
    color: "bg-emerald-500",
    skills: [
      { name: "Git", level: "95%", progress: 95, barColor: "from-emerald-400 to-green-500" },
      { name: "Docker", level: "85%", progress: 85, barColor: "from-emerald-400 to-green-500" },
      { name: "AWS", level: "80%", progress: 80, barColor: "from-emerald-400 to-green-500" },
      { name: "CI/CD", level: "82%", progress: 82, barColor: "from-emerald-400 to-green-500" },
      { name: "Vercel", level: "90%", progress: 90, barColor: "from-emerald-400 to-green-500" }
    ]
  }
];

export default function SkillsPage() {
  return (
    <main className="w-full max-w-6xl mx-auto p-6 md:p-12 pb-24">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-brand-blue">My Skills</h1>
        <p className="text-foreground/60">Technologies and tools I work with</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SKILL_CATEGORIES.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="glass-card p-6 md:p-8 flex flex-col"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${category.color} shadow-lg`}>
                {category.icon}
              </div>
              <h2 className="text-xl font-bold">{category.title}</h2>
            </div>

            <div className="flex flex-col gap-6">
              {category.skills.map((skill, sIdx) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-foreground/90">{skill.name}</span>
                    <span className="text-foreground/50">{skill.level}</span>
                  </div>
                  <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.progress}%` }}
                      transition={{ duration: 1, delay: 0.2 + (sIdx * 0.1) }}
                      className={`h-full bg-gradient-to-r ${skill.barColor} rounded-full`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
