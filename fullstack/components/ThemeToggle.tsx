
"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function getCurrentTheme(): Theme {
  const t = document.documentElement.dataset.theme;
  return t === "dark" ? "dark" : "light";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const isDark = theme === "dark";

  useEffect(() => {
    setTheme(getCurrentTheme());
  }, []);

  function applyTheme(next: Theme) {
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
    setTheme(next);
  }

  return (
    <button
      type="button"
      onClick={() => applyTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="
        relative inline-flex h-9 w-16 items-center rounded-full
        border border-[var(--muted)] bg-[var(--border)] p-1
        transition
      "
    >
      <span
        className={`
          inline-block h-7 w-7 rounded-full bg-[var(--text)]
          border border-[var(--muted)]
          transition-transform
          ${isDark ? "translate-x-7" : "translate-x-0"}
        `}
      />
      <span className="sr-only">Theme: {theme}</span>
    </button>
  );
}
