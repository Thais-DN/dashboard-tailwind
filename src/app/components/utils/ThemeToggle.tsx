import { Moon, Sun } from 'lucide-react';
import React, { useState, useEffect } from 'react';

const ThemeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString());
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <button
      onClick={toggleDarkMode}
      className={`p-2 rounded-md text-zinc-800 hover:bg-zinc-200 bg-zinc-500/10 dark:hover:bg-zinc-500/20 dark:text-violet-300 ${darkMode ? 'bg-zinc-800' : 'bg-zinc-200'}`}
    >
      {darkMode ? <Moon /> : <Sun />}
    </button>
  );
};

export default ThemeToggle;
