'use client'

import { useState, useEffect, MutableRefObject } from 'react'

interface IObserverOptions {
  root?: HTMLElement | null
  rootMargin?: string
  threshold?: number
}

interface IProps {
  visorRef: MutableRefObject<HTMLElement | null>
  options?: IObserverOptions
}

const initialOptions: IObserverOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0
}

export function useVisible({ visorRef, options = initialOptions }: IProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const current = visorRef?.current

    const callbackFunction = (entries: any) => {
      const entry = entries[0]
      setVisible(entry.isIntersecting)
    }

    const observer = new IntersectionObserver(callbackFunction, options)

    if (current) observer.observe(current)

    return () => {
      if (current) observer.disconnect()
    }
  }, [options, visorRef])

  return { visible }
}
