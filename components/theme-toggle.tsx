'use client'

import { Sun, Moon } from 'lucide-react'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    setMounted(true)
    setIsDark(document.documentElement.classList.contains('dark'))
  }, [])

  const toggleTheme = () => {
    const html = document.documentElement
    const newIsDark = !isDark

    if (newIsDark) {
      html.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      html.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }

    setIsDark(newIsDark)
  }

  if (!mounted) {
    return (
      <button
        className="p-2 rounded-lg transition-all duration-300 hover:scale-110"
        aria-label="Toggle theme"
        disabled
      >
        <Sun size={20} />
      </button>
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg transition-all duration-300 hover:bg-secondary hover:scale-110 text-foreground"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  )
}
