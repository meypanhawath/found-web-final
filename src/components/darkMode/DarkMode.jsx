import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Check for saved theme preference or default to system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme !== null) {
      setDarkMode(JSON.parse(savedTheme));
    } else {
      setDarkMode(prefersDark);
    }
  }, []);

  // Save theme preference and apply to document
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className={`cursor-pointer relative p-3 rounded-2xl backdrop-blur-lg border transition-all duration-700 hover:scale-110  ${
        darkMode
          ? 'bg-slate-900/80 border-slate-700 shadow-2xl shadow-slate-900/50'
          : 'bg-white/10 border-white/50 shadow-xl'
      }`}
      aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
    >
      <div className={`transition-all duration-700 ${darkMode ? 'rotate-180' : 'rotate-0'}`}>
        {darkMode ? (
          <Moon className="w-5 h-5 text-blue-400" />
        ) : (
          <Sun className="w-5 h-5 text-amber-500" />
        )}
      </div>
      <div className={`absolute inset-0 rounded-2xl transition-all duration-700 ${
        darkMode 
          ? 'bg-gradient-to-br from-blue-500/20 to-purple-600/20' 
          : 'bg-gradient-to-br from-red-200/30 to-blue-300/30'
      }`} />
    </button>
  );
};

export default DarkMode;