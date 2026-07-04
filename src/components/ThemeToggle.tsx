"use client";

import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  function toggleTheme() {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 dark:border-white/10 text-foreground/70 hover:text-foreground hover:border-black/20 dark:hover:border-white/20 transition-colors cursor-pointer"
    >
      <Sun size={18} className="hidden dark:block" />
      <Moon size={18} className="block dark:hidden" />
    </button>
  );
}
