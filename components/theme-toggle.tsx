"use client"

import { useEffect, useState } from "react"

type Theme = "light" | "dark"

function applyTheme(t: Theme) {
  const root = document.documentElement
  if (t === "dark") {
    root.classList.add("dark")
  } else {
    root.classList.remove("dark")
  }
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light")

  useEffect(() => {
    // initialize from localStorage or prefers-color-scheme
    const saved = (typeof window !== "undefined" && localStorage.getItem("theme")) as Theme | null
    const prefersDark =
      typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    const initial = saved ?? (prefersDark ? "dark" : "light")
    setTheme(initial)
    applyTheme(initial)
  }, [])

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark"
    setTheme(next)
    applyTheme(next)
    try {
      localStorage.setItem("theme", next)
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle theme"
      className="inline-flex items-center gap-2 rounded-full border border-border bg-card text-foreground px-3 py-1.5 text-xs transition-colors hover:bg-card/80"
    >
      {/* sun icon */}
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className={`h-4 w-4 ${theme === "light" ? "" : "opacity-50"}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4V2m0 20v-2M4 12H2m20 0h-2M5.64 5.64 4.22 4.22m15.56 15.56-1.42-1.42M18.36 5.64l1.42-1.42M4.22 19.78l1.42-1.42"
        />
        <circle cx="12" cy="12" r="4" />
      </svg>
      {/* moon icon */}
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className={`h-4 w-4 ${theme === "dark" ? "" : "opacity-50"}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
      </svg>
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
