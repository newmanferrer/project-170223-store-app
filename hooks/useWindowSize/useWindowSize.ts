'use client'

import { useState, useEffect } from 'react'
import { IWindowSize } from './model'

const windowSizeInitialState: IWindowSize = {
  width: 0,
  height: 0
}

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<IWindowSize>(windowSizeInitialState)

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}
