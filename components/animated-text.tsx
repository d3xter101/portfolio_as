'use client'

import { useEffect, useState } from 'react'

export function AnimatedText() {
  const [displayText, setDisplayText] = useState('Data Engineer &')
  const [phase, setPhase] = useState<'delete' | 'write'>('delete')
  const [index, setIndex] = useState('Data Engineer &'.length)

  const textToDelete = 'Data Engineer &'
  const textToWrite = 'Analytics Professional'

  useEffect(() => {
    const timer = setTimeout(() => {
      if (phase === 'delete') {
        if (index > 0) {
          setIndex(index - 1)
          setDisplayText(textToDelete.substring(0, index - 1))
        } else {
          setPhase('write')
          setIndex(0)
        }
      } else {
        if (index < textToWrite.length) {
          setDisplayText(textToWrite.substring(0, index + 1))
          setIndex(index + 1)
        }
      }
    }, 50)

    return () => clearTimeout(timer)
  }, [index, phase])

  return (
    <span className="inline-block min-w-max">
      {displayText}
      <span className="animate-pulse ml-1">|</span>
    </span>
  )
}
