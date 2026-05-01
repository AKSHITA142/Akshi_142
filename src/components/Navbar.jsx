'use client';

import { usePathname, useRouter } from 'next/navigation';
import { MessageSquare, Briefcase, Zap, User, Mail, FileText } from 'lucide-react';

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
    <nav className="w-full flex items-center justify-between py-4 px-6 md:px-12 bg-black/20 backdrop-blur-md border-b border-white/5 sticky top-0 z-50">
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
                  : 'bg-white/5 text-foreground/70 hover:bg-white/10 hover:text-white'
              }`}
            >
              <Icon className="w-4 h-4" />
              {item.label}
            </button>
          );
        })}
      </div>

      {/* Mobile Menu Button could go here, omitting for brevity to match desktop screenshot exactly */}
    </nav>
  );
}
