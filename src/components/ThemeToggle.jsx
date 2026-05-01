'use client';

import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Check initial theme
    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
    setTheme(savedTheme);
    if (savedTheme === 'light') {
      document.documentElement.classList.add('light');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
    if (newTheme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative w-12 h-12 flex items-center justify-center rounded-full glass-card hover:scale-105 transition-transform overflow-hidden group"
      aria-label="Toggle Theme"
      suppressHydrationWarning
    >
      {/* Background glow effect based on theme */}
      <div className={`absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity ${theme === 'dark' ? 'bg-brand-purple' : 'bg-brand-blue'}`} />
      
      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'dark' ? 0 : 180,
          scale: theme === 'dark' ? 1 : 0
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 10 }}
        className="absolute"
      >
        <Moon className="w-5 h-5 text-brand-purple" />
      </motion.div>
      
      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'light' ? 0 : -180,
          scale: theme === 'light' ? 1 : 0
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 10 }}
        className="absolute"
      >
        <Sun className="w-5 h-5 text-yellow-500 drop-shadow-md" />
      </motion.div>
    </button>
  );
}
