'use client'

import { useState, useEffect, useRef } from 'react'

interface IObserverOptions {
  root?: HTMLElement | null
  rootMargin?: string
  threshold?: number
}

const initialOptions: IObserverOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0
}

export function useObserver(options = initialOptions) {
  const [elements, setElements] = useState([])
  const [entries, setEntries] = useState<IntersectionObserverEntry[]>([])

  const observer = useRef(
    new IntersectionObserver((observedEntries, observer) => {
      setEntries(observedEntries)
    }, options)
  )

  useEffect(() => {
    const currentObserver = observer.current
    currentObserver.disconnect()
    if (elements.length > 0) {
      elements.forEach(element => currentObserver.observe(element))
    }

    return () => {
      if (currentObserver) {
        currentObserver.disconnect()
      }
    }
  }, [elements])

  return [observer.current, setElements, entries]
}
