'use client';

import { motion } from 'framer-motion';

export default function HolographicOrb() {
  return (
    <div className="relative flex justify-center items-center w-16 h-16 sm:w-20 sm:h-20">
      {/* Outer glow */}
      <motion.div
        className="absolute w-full h-full rounded-full bg-holo-blue/20 blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Inner core */}
      <motion.div
        className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-holo-blue/50 glass-panel flex items-center justify-center overflow-hidden"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-holo-blue/30 to-holo-purple/30 rounded-full" />
        
        {/* Holographic rings */}
        <motion.div 
          className="absolute w-14 h-14 border border-holo-blue/30 rounded-full"
          animate={{ rotateX: 180, rotateY: 180 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute w-12 h-12 border border-holo-purple/30 rounded-full"
          animate={{ rotateX: -180, rotateY: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
    </div>
  );
}
