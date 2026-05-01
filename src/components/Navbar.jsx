'use client';

import { usePathname, useRouter } from 'next/navigation';
import { MessageSquare, Briefcase, Zap, User, Mail, FileText } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const NAV_ITEMS = [
  { path: '/', label: 'Chat', icon: MessageSquare },
  { path: '/projects', label: 'Projects', icon: Briefcase },
  { path: '/skills', label: 'Skills', icon: Zap },
  { path: '/about', label: 'About', icon: User },
  { path: '/contact', label: 'Contact', icon: Mail },
  { path: '/resume', label: 'Resume', icon: FileText },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <nav className="w-full flex items-center justify-between py-4 px-6 md:px-12 bg-[var(--color-card-bg)] backdrop-blur-md border-b border-[var(--color-card-border)] sticky top-0 z-50 transition-colors">
      <div 
        className="text-xl md:text-2xl font-bold cursor-pointer"
        onClick={() => router.push('/')}
      >
        <span className="text-brand-blue">AI</span> <span className="text-brand-purple">Portfolio</span>
      </div>

      <div className="hidden md:flex items-center gap-2 lg:gap-4">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.path;
          const Icon = item.icon;
          return (
            <button
              key={item.path}
              onClick={() => router.push(item.path)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                isActive 
                  ? 'bg-brand-purple text-white shadow-[0_0_15px_rgba(139,92,246,0.5)]' 
                  : 'bg-[var(--color-card-border)] text-[var(--foreground)] opacity-70 hover:opacity-100 hover:bg-[var(--color-card-bg)]'
              }`}
              suppressHydrationWarning
            >
              <Icon className="w-4 h-4" />
              {item.label}
            </button>
          );
        })}
        <div className="w-px h-6 bg-white/10 mx-2"></div>
        <ThemeToggle />
      </div>

      {/* Mobile Menu Button could go here, omitting for brevity to match desktop screenshot exactly */}
    </nav>
  );
}
