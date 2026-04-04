import { HiSun, HiMoon } from 'react-icons/hi2'; // Using Heroicons set
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { useTheme } from "../hooks/ThemeContext";
import { LuMoon, LuSun } from 'react-icons/lu';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:scale-110 transition-all active:scale-95 w-8 h-8 flex items-center justify-center"
      aria-label="Toggle Theme"
    >
          {theme === 'light' ? (
            <LuMoon/>
          ) : (
            <LuSun/>
          )}
    </button>
  );
}