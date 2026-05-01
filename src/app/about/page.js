'use client';

import { motion } from 'framer-motion';
import { Target, CheckCircle2, Smile, Laptop, UserCircle2, Bot, Globe, Palette, PenTool, BookOpen, Lightbulb } from 'lucide-react';

const INTERESTS = [
  { label: "AI & Machine Learning", icon: <Bot className="w-5 h-5 text-brand-blue" />, color: "bg-brand-blue/20" },
  { label: "Open Source", icon: <Globe className="w-5 h-5 text-green-500" />, color: "bg-green-500/20" },
  { label: "UI/UX Design", icon: <Palette className="w-5 h-5 text-pink-500" />, color: "bg-pink-500/20" },
  { label: "Tech Writing", icon: <PenTool className="w-5 h-5 text-yellow-500" />, color: "bg-yellow-500/20" },
  { label: "Teaching", icon: <BookOpen className="w-5 h-5 text-orange-500" />, color: "bg-orange-500/20" },
  { label: "Innovation", icon: <Lightbulb className="w-5 h-5 text-cyan-500" />, color: "bg-cyan-500/20" }
];

export default function AboutPage() {
  return (
    <main className="w-full max-w-6xl mx-auto p-6 md:p-12 pb-24 space-y-6">
      <div className="mb-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-brand-blue">About Me</h1>
        <p className="text-foreground/60">Get to know me better</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Main Info */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:w-2/3 glass-card p-8 flex flex-col gap-6"
        >
          <div className="flex items-center gap-4 mb-2">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-purple p-[1px]">
              <div className="w-full h-full bg-brand-dark rounded-2xl flex items-center justify-center">
                 <UserCircle2 className="w-8 h-8 text-brand-blue" />
              </div>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold">Full Stack Developer & Designer</h2>
              <p className="text-sm text-foreground/50">Building digital experiences that matter</p>
            </div>
          </div>

          <div className="text-foreground/80 space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              Hey there! I'm a passionate full-stack developer and designer who loves creating beautiful, 
              functional experiences that solve real problems. With over 5 years of experience in web 
              development, I've had the privilege of working on diverse projects ranging from AI-powered 
              platforms to e-commerce solutions.
            </p>
            <p>
              I believe in the power of clean code, thoughtful design, and user-centric development. My 
              approach combines technical expertise with creative thinking to build products that not only work 
              well but also delight users.
            </p>
            <p>
              When I'm not coding, you'll find me exploring the latest AI technologies, contributing to open 
              source projects, or sharing knowledge through tech writing and mentoring.
            </p>
          </div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:w-1/3 glass-card p-8 flex flex-col"
        >
          <h3 className="text-lg font-bold mb-6">Quick Stats</h3>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
              <Target className="w-8 h-8 text-pink-500" />
              <div>
                <h4 className="font-bold text-lg">5+</h4>
                <p className="text-xs text-foreground/60">Years Experience</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
              <CheckCircle2 className="w-8 h-8 text-green-500" />
              <div>
                <h4 className="font-bold text-lg">50+</h4>
                <p className="text-xs text-foreground/60">Projects Completed</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
              <Smile className="w-8 h-8 text-orange-500" />
              <div>
                <h4 className="font-bold text-lg">30+</h4>
                <p className="text-xs text-foreground/60">Happy Clients</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
              <Laptop className="w-8 h-8 text-blue-500" />
              <div>
                <h4 className="font-bold text-lg">10K+</h4>
                <p className="text-xs text-foreground/60">Code Commits</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Interests & Passions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="w-full glass-card p-8"
      >
        <h3 className="text-lg font-bold mb-6">Interests & Passions</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {INTERESTS.map((interest) => (
            <div key={interest.label} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${interest.color}`}>
                {interest.icon}
              </div>
              <span className="text-sm font-medium text-foreground/90">{interest.label}</span>
            </div>
          ))}
        </div>
      </motion.div>

    </main>
  );
}
