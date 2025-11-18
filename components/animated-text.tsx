'use client'

import { useEffect, useState } from 'react'

export function AnimatedText() {
  const roles = [
    'Data Engineer',
    'Turning data into insights',
    'ETL Specialist',
    'Cloud Data Solutions Architect',
    'OCI & GCP/Azure Enthusiast'

  ]

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const currentRole = roles[currentRoleIndex]

    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(true)
      }, 2000) // Pause for 2 seconds before deleting
      return () => clearTimeout(pauseTimer)
    }

    const speed = isDeleting ? 30 : 80

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (charIndex < currentRole.length) {
          setDisplayText(currentRole.substring(0, charIndex + 1))
          setCharIndex(charIndex + 1)
        } else {
          // Finished typing, pause before deleting
          setIsPaused(true)
        }
      } else {
        // Deleting
        if (charIndex > 0) {
          setDisplayText(currentRole.substring(0, charIndex - 1))
          setCharIndex(charIndex - 1)
        } else {
          // Finished deleting, move to next role
          setIsDeleting(false)
          setCurrentRoleIndex((currentRoleIndex + 1) % roles.length)
        }
      }
    }, speed)

    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, isPaused, currentRoleIndex, roles])

  return (
    <span className="inline-block min-w-[280px]">
      <span className="font-medium">{displayText}</span>
      <span className="animate-pulse ml-1 font-bold text-primary">|</span>
    </span>
  )
}
