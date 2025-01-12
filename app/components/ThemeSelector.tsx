'use client';

import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { useState } from 'react';

export default function ThemeSelector() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themes = [
    { 
      id: 'dark', 
      name: 'Dark+', 
      icon: '⚫',
      colors: ['#1e1e1e', '#569cd6', '#4ec9b0']
    },
    { 
      id: 'light', 
      name: 'Light+', 
      icon: '⚪',
      colors: ['#ffffff', '#0000ff', '#267f99']
    },
    { 
      id: 'monokai', 
      name: 'Monokai', 
      icon: '🎨',
      colors: ['#272822', '#f92672', '#66d9ef']
    },
    { 
      id: 'github', 
      name: 'GitHub', 
      icon: '🐱',
      colors: ['#ffffff', '#d73a49', '#005cc5']
    }
  ];

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-md bg-[var(--editor-highlight)] hover:bg-opacity-80 transition-all"
      >
        <span className="text-lg">{themes.find(t => t.id === theme)?.icon}</span>
        <span className="text-[var(--editor-text)]">Theme</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          ▼
        </motion.span>
      </motion.button>

      <motion.div
        initial={false}
        animate={{
          opacity: isOpen ? 1 : 0,
          scale: isOpen ? 1 : 0.95,
          y: isOpen ? 0 : -20
        }}
        transition={{ duration: 0.2 }}
        className={`absolute right-0 mt-2 w-56 rounded-lg overflow-hidden backdrop-blur-lg ${
          isOpen ? 'block' : 'hidden'
        }`}
        style={{
          background: 'var(--editor-header)',
          border: '1px solid var(--editor-border)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
        }}
      >
        {themes.map((t) => (
          <motion.button
            key={t.id}
            whileHover={{ x: 4 }}
            onClick={() => {
              setTheme(t.id as any);
              setIsOpen(false);
            }}
            className="w-full px-4 py-3 flex items-center gap-3 hover:bg-[var(--editor-highlight)] transition-colors"
          >
            <span className="text-lg">{t.icon}</span>
            <div className="flex-1 text-left">
              <span className="text-[var(--editor-text)]">{t.name}</span>
              <div className="flex gap-1 mt-1">
                {t.colors.map((color, i) => (
                  <div
                    key={i}
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
            {theme === t.id && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="text-[var(--editor-keyword)]"
              >
                ✓
              </motion.span>
            )}
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
}
