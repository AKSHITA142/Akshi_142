'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Monitor, CheckCircle, Download } from 'lucide-react';

const EXPERIENCE = [
  {
    role: "Senior Full Stack Developer",
    company: "Tech Innovations Inc.",
    period: "2023 - Present",
    description: "Leading development of AI-powered web applications and managing a team of developers.",
    achievements: [
      "Built scalable microservices architecture serving 100K+ users",
      "Implemented AI chatbot reducing customer support by 40%",
      "Mentored 5 junior developers"
    ],
    color: "bg-brand-purple"
  },
  {
    role: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    period: "2021 - 2023",
    description: "Developed e-commerce platforms and data visualization tools.",
    achievements: [
      "Created real-time analytics dashboard with 99.9% uptime",
      "Optimized database queries improving performance by 60%",
      "Integrated payment systems processing $2M+ annually"
    ],
    color: "bg-pink-500"
  },
  {
    role: "Frontend Developer",
    company: "Creative Web Studio",
    period: "2020 - 2021",
    description: "Built responsive web applications and UI component libraries.",
    achievements: [
      "Developed reusable component library used across 10+ projects",
      "Improved page load speed by 50% through optimization",
      "Collaborated with designers to create pixel-perfect UIs"
    ],
    color: "bg-rose-500"
  },
  {
    role: "Junior Developer",
    company: "Startup Labs",
    period: "2019 - 2020",
    description: "Started career building MVPs and prototypes for startup projects.",
    achievements: [
      "Shipped 3 MVPs in first 6 months",
      "Learned modern web development stack",
      "Contributed to open source projects"
    ],
    color: "bg-orange-500"
  }
];

const EDUCATION = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Technology",
    period: "2015 - 2019",
    icon: <GraduationCap className="w-5 h-5 text-brand-purple" />
  },
  {
    degree: "Full Stack Web Development Bootcamp",
    institution: "Code Academy",
    period: "2019",
    icon: <Monitor className="w-5 h-5 text-brand-blue" />
  }
];

const CERTIFICATIONS = [
  { title: "AWS Certified Solutions Architect", year: "2023" },
  { title: "Google Cloud Professional", year: "2022" },
  { title: "React Advanced Certification", year: "2021" }
];

export default function ResumePage() {
  return (
    <main className="w-full max-w-6xl mx-auto p-6 md:p-12 pb-24">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-brand-blue">Resume</h1>
          <p className="text-foreground/60">My professional journey</p>
        </div>
        <button className="px-6 py-2.5 rounded-full bg-brand-blue hover:bg-brand-blue/80 text-white font-medium transition-colors w-fit">
          Download PDF
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* Work Experience */}
        <div className="lg:w-2/3 flex flex-col gap-6">
          <h2 className="text-xl font-bold">Work Experience</h2>
          
          <div className="flex flex-col gap-4 border-l border-white/10 ml-4 pl-6 relative">
            {EXPERIENCE.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 md:p-8 relative"
              >
                {/* Timeline connector dot */}
                <div className="absolute top-10 -left-[29px] w-4 h-4 rounded-full bg-[#0a0b10] border-2 border-brand-purple" />
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-lg bg-white/5`}>
                       <Briefcase className={`w-6 h-6 ${exp.color.replace('bg-', 'text-')}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{exp.role}</h3>
                      <p className="text-brand-purple text-sm">{exp.company}</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-foreground/60 w-fit">
                    {exp.period}
                  </span>
                </div>
                
                <p className="text-sm text-foreground/80 mb-4 leading-relaxed">
                  {exp.description}
                </p>
                
                <ul className="space-y-2">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="text-xs text-foreground/60 flex items-start gap-2">
                      <span className="text-brand-purple mt-0.5">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="lg:w-1/3 flex flex-col gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-6 flex flex-col gap-6"
          >
            <h2 className="text-lg font-bold">Education</h2>
            <div className="flex flex-col gap-6">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="mt-1">{edu.icon}</div>
                  <div>
                    <h3 className="font-bold text-sm">{edu.degree}</h3>
                    <p className="text-xs text-foreground/60">{edu.institution}</p>
                    <p className="text-xs text-brand-purple mt-1">{edu.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-card p-6 flex flex-col gap-6"
          >
            <h2 className="text-lg font-bold">Certifications</h2>
            <div className="flex flex-col gap-3">
              {CERTIFICATIONS.map((cert, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                  <div>
                    <h3 className="font-bold text-sm">{cert.title}</h3>
                    <p className="text-xs text-foreground/60 mt-1">{cert.year}</p>
                  </div>
                  <CheckCircle className="w-4 h-4 text-green-500" />
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-card p-6 flex flex-col gap-4 bg-gradient-to-br from-white/5 to-brand-purple/10 border-brand-purple/20"
          >
            <h2 className="text-lg font-bold">Need a PDF?</h2>
            <p className="text-xs text-foreground/70 leading-relaxed mb-2">
              Download my full resume with references and detailed project descriptions.
            </p>
            <button className="w-full py-3 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white text-sm font-medium hover:opacity-90 transition-opacity">
              Download Resume
            </button>
          </motion.div>
        </div>

      </div>
    </main>
  );
}
