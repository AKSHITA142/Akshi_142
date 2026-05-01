'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Code2, Trophy, Star } from 'lucide-react';
import { useRouter } from 'next/navigation';

const PROFILES = [
  {
    platform: "LeetCode",
    username: "your_leetcode_handle",
    rating: "1950+",
    solved: "500+",
    rank: "Knight",
    icon: <Code2 className="w-8 h-8 text-yellow-500" />,
    color: "from-yellow-500/20 to-yellow-600/5",
    borderColor: "border-yellow-500/30",
    link: "https://leetcode.com/your_leetcode_handle"
  },
  {
    platform: "Codeforces",
    username: "your_codeforces_handle",
    rating: "1600+",
    solved: "300+",
    rank: "Expert",
    icon: <Trophy className="w-8 h-8 text-blue-500" />,
    color: "from-blue-500/20 to-blue-600/5",
    borderColor: "border-blue-500/30",
    link: "https://codeforces.com/profile/your_codeforces_handle"
  }
];

export default function ProfilesPage() {
  const router = useRouter();

  return (
    <main className="flex h-[100dvh] flex-col items-center p-4 md:p-8 lg:p-12 overflow-y-auto relative">
      {/* Ambient backgrounds */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none fixed">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-holo-blue/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-holo-purple/5 blur-[120px]" />
      </div>

      <div className="max-w-4xl w-full flex flex-col gap-8 relative z-10">
        <header className="flex items-center justify-between pb-6 border-b border-glass-border">
          <button 
            onClick={() => router.push('/')}
            className="flex items-center gap-2 text-holo-blue hover:text-holo-blue/80 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="hidden sm:inline">Back to System</span>
          </button>
          <h1 className="text-2xl font-bold tracking-wider holo-text uppercase">Coding_Profiles</h1>
          <div className="w-24"></div> {/* spacer for centering */}
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROFILES.map((profile, index) => (
            <motion.div
              key={profile.platform}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className={`glass-panel p-8 rounded-3xl flex flex-col gap-6 border ${profile.borderColor} bg-gradient-to-br ${profile.color} hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] transition-all relative overflow-hidden`}
            >
              {/* Decorative background element */}
              <div className="absolute -right-4 -top-4 opacity-10 pointer-events-none transform rotate-12 scale-150">
                {profile.icon}
              </div>

              <div className="flex items-center gap-4 relative z-10">
                <div className="p-3 glass-panel rounded-2xl bg-black/40">
                  {profile.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold tracking-wide">{profile.platform}</h2>
                  <p className="text-foreground/60 font-mono text-sm">@{profile.username}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-2 relative z-10">
                <div className="flex flex-col glass-panel p-4 rounded-xl bg-black/20">
                  <span className="text-xs uppercase tracking-wider text-foreground/50 mb-1">Rating</span>
                  <span className="text-xl font-semibold flex items-center gap-2">
                    {profile.rating} <Star className="w-4 h-4 text-holo-blue" />
                  </span>
                </div>
                <div className="flex flex-col glass-panel p-4 rounded-xl bg-black/20">
                  <span className="text-xs uppercase tracking-wider text-foreground/50 mb-1">Solved</span>
                  <span className="text-xl font-semibold text-holo-blue">{profile.solved}</span>
                </div>
                <div className="flex flex-col glass-panel p-4 rounded-xl bg-black/20 col-span-2">
                  <span className="text-xs uppercase tracking-wider text-foreground/50 mb-1">Current Rank</span>
                  <span className="text-lg font-semibold tracking-wide text-holo-purple">{profile.rank}</span>
                </div>
              </div>

              <a 
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2 w-full py-3 glass-panel rounded-xl hover:bg-white/5 transition-colors text-sm uppercase tracking-widest font-semibold border border-white/10"
              >
                View Profile <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
