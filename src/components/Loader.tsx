import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const words = ["curiosity", "creativity", "technology", "community", "impact", "innovation"];

const Loader = ({ onComplete, isDark }: { onComplete: () => void; isDark: boolean }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index === words.length) {
      const timer = setTimeout(onComplete, 800);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setIndex(prev => prev + 1);
    }, 400); // Faster cycling for a "sophisticated" feel

    return () => clearTimeout(timer);
  }, [index, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        y: "-100%", 
        transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } 
      }}
      className={`fixed inset-0 z-[100] flex items-center justify-center transition-colors duration-500 ${
        isDark ? 'bg-[#0a0a0c]' : 'bg-[#f8f9fa]'
      }`}
    >
      <div className="flex flex-col items-center">
        <div className="relative overflow-hidden h-[120px] flex items-center justify-center min-w-[300px]">
          <AnimatePresence mode="wait">
            {index < words.length && (
              <motion.div
                key={words[index]}
                initial={{ y: 80, opacity: 0, skewY: 10 }}
                animate={{ y: 0, opacity: 1, skewY: 0 }}
                exit={{ y: -80, opacity: 0, skewY: -10 }}
                transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                className="flex items-center gap-6"
              >
                <div className={`w-2 h-2 rounded-full ${isDark ? 'bg-brand-purple' : 'bg-brand-purple'}`} />
                <h2 className={`text-5xl md:text-7xl font-display font-bold tracking-tighter uppercase italic ${
                  isDark ? 'text-white' : 'text-black'
                }`}>
                  {words[index]}
                </h2>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* Subtle progress indicator */}
        <div className="mt-12 flex gap-3">
          {words.map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.5, opacity: 0.2 }}
              animate={{ 
                scale: index >= i ? 1 : 0.5, 
                opacity: index >= i ? 1 : 0.2,
                backgroundColor: index >= i ? '#2e8a56' : (isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)')
              }}
              className="w-1.5 h-1.5 rounded-full"
            />
          ))}
        </div>
      </div>
      
      {/* Background shape animation for extra flair */}
      <motion.div 
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className={`absolute inset-0 -z-10 opacity-[0.03] ${isDark ? 'invert' : ''}`}
        style={{ 
          backgroundImage: 'radial-gradient(circle, #000 1.5px, transparent 1.5px)', 
          backgroundSize: '80px 80px' 
        }}
      />
    </motion.div>
  );
};

export default Loader;
