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
        x: prev.x + (mousePosition.x - prev.x) * 0.15,
        y: prev.y + (mousePosition.y - prev.y) * 0.15,
      }))
    })

    return () => cancelAnimationFrame(animationFrame)
  }, [mousePosition])

  return (
    <>
      <div
        className={`fixed pointer-events-none z-50 transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: `${delayedPosition.x}px`,
          top: `${delayedPosition.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="relative">
          <div className="absolute inset-0 w-8 h-8 bg-primary/20 rounded-full blur-md animate-pulse"></div>
          <div className="w-4 h-4 bg-primary rounded-full shadow-lg shadow-primary/50"></div>
        </div>
      </div>

      <div
        className={`fixed pointer-events-none z-40 transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: `${delayedPosition.x}px`,
          top: `${delayedPosition.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="w-12 h-12 border border-primary/40 rounded-full"></div>
      </div>
    </>
  )
}
