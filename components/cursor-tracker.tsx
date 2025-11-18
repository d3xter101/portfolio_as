'use client'

import { useEffect, useState } from 'react'

export function CursorTracker() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [delayedPosition, setDelayedPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  useEffect(() => {
    const animationFrame = requestAnimationFrame(() => {
      setDelayedPosition(prev => ({
        x: prev.x + (mousePosition.x - prev.x) * 0.1,
        y: prev.y + (mousePosition.y - prev.y) * 0.1,
      }))
    })

    return () => cancelAnimationFrame(animationFrame)
  }, [mousePosition])

  return (
    <>
      {/* Outer aura glow - largest */}
      <div
        className={`fixed pointer-events-none z-30 transition-opacity duration-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: `${delayedPosition.x}px`,
          top: `${delayedPosition.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="w-64 h-64 bg-gradient-radial from-primary/15 via-primary/5 to-transparent rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Middle aura layer */}
      <div
        className={`fixed pointer-events-none z-40 transition-opacity duration-400 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: `${delayedPosition.x}px`,
          top: `${delayedPosition.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="w-40 h-40 bg-gradient-radial from-primary/25 via-primary/10 to-transparent rounded-full blur-2xl"></div>
      </div>

      {/* Inner aura glow */}
      <div
        className={`fixed pointer-events-none z-45 transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="relative">
          <div className="absolute inset-0 w-16 h-16 bg-primary/30 rounded-full blur-xl"></div>
          <div className="absolute inset-0 w-8 h-8 bg-primary/40 rounded-full blur-md"></div>
          <div className="w-2 h-2 bg-primary rounded-full shadow-lg shadow-primary/60"></div>
        </div>
      </div>

      {/* Outer ring */}
      <div
        className={`fixed pointer-events-none z-50 transition-opacity duration-200 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="w-8 h-8 border border-primary/50 rounded-full animate-ping"></div>
      </div>
    </>
  )
}
