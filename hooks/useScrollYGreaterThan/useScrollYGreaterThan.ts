'use client'

import { useState, useEffect } from 'react'

export function useScrollYGreaterThan(comparisonValue: number) {
  const [isGreater, setIsGreater] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= comparisonValue) setIsGreater(true)
      else setIsGreater(false)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [comparisonValue])

  return { isGreater }
}
