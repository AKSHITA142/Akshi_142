'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mic, Bot, Sparkles, Briefcase, Zap, User, Mail, FileText } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ChatInterface() {
  const router = useRouter();
  const [messages, setMessages] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const saved = sessionStorage.getItem('portfolioChatHistory');
    if (saved) {
      setMessages(JSON.parse(saved));
    } else {
      setMessages([{ id: '1', type: 'system', content: "Hello! I'm your AI portfolio assistant. I can help you navigate through different sections, answer questions, or provide quick insights. Try asking me something!" }]);
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      sessionStorage.setItem('portfolioChatHistory', JSON.stringify(messages));
    }
  }, [messages, isLoaded]);

  const handleSendMessage = useCallback(async (text) => {
    if (!text.trim()) return;

    const newUserMsg = { id: Date.now().toString(), type: 'user', content: text };
    setMessages(prev => [...prev, newUserMsg]);
    setInputValue('');
    setIsTyping(true);

    try {
      // Pass the message to our Gemini API route
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
          // If you had a currentProject state, it would go here
          currentProject: null 
        })
      });

      const data = await res.json();
      
      const sysReply = { 
        id: (Date.now() + 1).toString(), 
        type: 'system', 
        content: data.reply || "Sorry, I couldn't process that." 
      };

      setMessages(prev => [...prev, sysReply]);

      // Combine UI actions based on user intent
      const lower = text.toLowerCase();
      if (lower.includes('show me your projects') || lower.includes('open projects')) {
        setTimeout(() => router.push('/projects'), 900);
      } else if (lower.includes('what are your skills') || lower.includes('open skills')) {
        setTimeout(() => router.push('/skills'), 900);
      } else if (lower.includes('contact you') || lower.includes('open contact')) {
        setTimeout(() => router.push('/contact'), 900);
      } else if (lower.includes('resume') || lower.includes('experience')) {
        setTimeout(() => router.push('/resume'), 900);
      } else if (lower.includes('about')) {
        setTimeout(() => router.push('/about'), 900);
      }

    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { 
        id: (Date.now() + 1).toString(), 
        type: 'system', 
        content: "Network error. Please try again later." 
      }]);
    } finally {
      setIsTyping(false);
    }
  }, [router]);

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-6 p-4 md:p-8 min-h-[calc(100vh-80px)]">
      
      {/* Left Sidebar */}
      <div className="w-full md:w-1/3 lg:w-1/4 flex flex-col gap-6">
        <div className="glass-card p-6 flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-blue to-brand-purple p-[2px] mb-4">
            <div className="w-full h-full rounded-full bg-brand-dark flex items-center justify-center relative overflow-hidden">
              <Bot className="w-10 h-10 text-brand-purple relative z-10" />
              <div className="absolute inset-0 bg-brand-purple/20 blur-xl"></div>
            </div>
          </div>
          <h2 className="text-xl font-bold mb-1">AI Assistant</h2>
          <div className="flex items-center gap-2 text-sm text-foreground/60">
            <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]"></span>
            Online
          </div>
        </div>

        <div className="glass-card p-5 flex flex-col gap-3">
          <h3 className="font-semibold flex items-center gap-2 text-brand-purple">
            <Sparkles className="w-4 h-4" /> Quick Tips
          </h3>
          <ul className="text-sm text-foreground/70 space-y-2">
            <li>• Ask me about projects</li>
            <li>• Explore skills & tech stack</li>
            <li>• Learn more about me</li>
            <li>• Get contact information</li>
            <li>• View my resume</li>
          </ul>
        </div>

        <div className="glass-card p-5 flex flex-col gap-3">
          <h3 className="font-semibold flex items-center gap-2 text-yellow-500">
            <Zap className="w-4 h-4" /> Try Asking
          </h3>
          <div className="flex flex-col gap-2">
            {['"What projects have you built?"', '"What are your skills?"', '"How can I contact you?"'].map(q => (
              <button key={q} onClick={() => handleSendMessage(q.replace(/"/g, ''))} className="text-left text-xs bg-white/5 hover:bg-white/10 p-2 rounded-lg transition-colors text-foreground/80">
                {q}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="w-full md:w-2/3 lg:w-3/4 glass-card flex flex-col h-[70vh] md:h-auto">
        <div className="p-4 border-b border-white/5 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-brand-purple/20 flex items-center justify-center">
            <Bot className="w-5 h-5 text-brand-purple" />
          </div>
          <div>
            <h2 className="font-bold">AI Portfolio Assistant</h2>
            <div className="flex items-center gap-2 text-xs text-foreground/60">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Active now
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6 flex flex-col">
          <AnimatePresence>
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'} gap-3 w-full`}
              >
                {msg.type === 'system' && (
                  <div className="w-8 h-8 rounded-full bg-brand-purple/20 flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4 text-brand-purple" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-2xl p-4 text-sm leading-relaxed ${
                    msg.type === 'user'
                      ? 'bg-brand-purple/20 border border-brand-purple/30 text-white'
                      : 'bg-white/5 border border-white/10 text-foreground/90'
                  }`}
                >
                  {msg.type === 'system' && msg.id === '1' && <span className="mr-2">👋</span>}
                  {msg.content}
                </div>
              </motion.div>
            ))}
            {isTyping && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-brand-purple/20 flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4 text-brand-purple" />
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex gap-1 items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-purple animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-purple animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-purple animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div ref={messagesEndRef} />
        </div>

        <div className="p-4 bg-black/20 mt-auto border-t border-white/5">
          <div className="flex flex-wrap gap-2 mb-4 justify-center">
            {[
              { label: 'Projects', icon: Briefcase },
              { label: 'Skills', icon: Zap },
              { label: 'About', icon: User },
              { label: 'Contact', icon: Mail },
              { label: 'Resume', icon: FileText }
            ].map((btn) => (
              <button
                key={btn.label}
                onClick={() => handleSendMessage(`Show me your ${btn.label.toLowerCase()}`)}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <btn.icon className="w-3.5 h-3.5 text-brand-purple" />
                {btn.label}
              </button>
            ))}
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); handleSendMessage(inputValue); }}
            className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl p-2"
            suppressHydrationWarning
          >
            <button type="button" className="p-2 text-foreground/50 hover:text-brand-purple transition-colors" suppressHydrationWarning>
              <Mic className="w-5 h-5" />
            </button>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask me anything about this portfolio..."
              className="flex-1 bg-transparent outline-none text-sm px-2"
              suppressHydrationWarning
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="p-2 bg-brand-purple hover:bg-brand-purple/80 text-white rounded-lg transition-colors disabled:opacity-50"
              suppressHydrationWarning
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>

    </div>
  );
}
