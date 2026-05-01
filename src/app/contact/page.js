'use client';

import { motion } from 'framer-motion';
import { Mail, Briefcase, Terminal, MessageCircle, Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="w-full max-w-6xl mx-auto p-6 md:p-12 pb-24">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-brand-blue">Get In Touch</h1>
        <p className="text-foreground/60">Let's work together on your next project</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:w-1/2 glass-card p-8 flex flex-col gap-6"
        >
          <h2 className="text-xl font-bold">Send a Message</h2>
          
          <form className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-foreground/80">Name</label>
              <input 
                type="text" 
                placeholder="Your name" 
                className="w-full bg-white/5 border border-white/10 rounded-xl p-3 outline-none focus:border-brand-purple/50 transition-colors"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-foreground/80">Email</label>
              <input 
                type="email" 
                placeholder="your@email.com" 
                className="w-full bg-white/5 border border-white/10 rounded-xl p-3 outline-none focus:border-brand-purple/50 transition-colors"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-foreground/80">Message</label>
              <textarea 
                placeholder="Your message..." 
                rows="5"
                className="w-full bg-white/5 border border-white/10 rounded-xl p-3 outline-none focus:border-brand-purple/50 transition-colors resize-none"
              ></textarea>
            </div>
            
            <button 
              type="button" 
              className="mt-2 w-full py-3 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-medium hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Right Column: Links & Status */}
        <div className="lg:w-1/2 flex flex-col gap-6">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-8 flex flex-col gap-6"
          >
            <h2 className="text-xl font-bold">Connect With Me</h2>
            
            <div className="flex flex-col gap-4">
              <a href="mailto:hello@portfolio.com" className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-foreground/80">Email</h4>
                    <p className="text-sm font-bold">hello@portfolio.com</p>
                  </div>
                </div>
                <span className="text-foreground/40 group-hover:text-foreground/80 transition-colors">→</span>
              </a>

              <a href="#" className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-foreground/80">LinkedIn</h4>
                    <p className="text-sm font-bold">linkedin.com/in/yourprofile</p>
                  </div>
                </div>
                <span className="text-foreground/40 group-hover:text-foreground/80 transition-colors">→</span>
              </a>

              <a href="#" className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                    <Terminal className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-foreground/80">GitHub</h4>
                    <p className="text-sm font-bold">github.com/yourprofile</p>
                  </div>
                </div>
                <span className="text-foreground/40 group-hover:text-foreground/80 transition-colors">→</span>
              </a>

              <a href="#" className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-cyan-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-foreground/80">Twitter</h4>
                    <p className="text-sm font-bold">@yourhandle</p>
                  </div>
                </div>
                <span className="text-foreground/40 group-hover:text-foreground/80 transition-colors">→</span>
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-card p-8 flex flex-col gap-4"
          >
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]"></span>
              <h3 className="font-bold">Available for Work</h3>
            </div>
            <p className="text-sm text-foreground/70 leading-relaxed">
              I'm currently available for freelance projects and full-time opportunities. Feel free to reach out if you'd like to work together!
            </p>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
