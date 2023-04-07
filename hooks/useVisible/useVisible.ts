'use client'

import { useState, useEffect, MutableRefObject, useMemo } from 'react'

interface IObserverOptions {
  root?: HTMLElement | null
  rootMargin?: string
  threshold?: number
}

interface IProps {
  targetRef: MutableRefObject<HTMLElement | null>
  options?: IObserverOptions
}

const initialOptions: IObserverOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0
}

export function useVisible({ targetRef, options = initialOptions }: IProps) {
  const [isVisible, setIsVisible] = useState(false)

  const callbackFunction = (entries: any[]) => {
    const entry = entries[0] // const [entry] = entries
    setIsVisible(entry.isIntersecting)
  }

  const optionsMemo = useMemo(() => {
    return options
  }, [options])

  useEffect(() => {
    const current = targetRef?.current
    const observer = new IntersectionObserver(callbackFunction, optionsMemo)
    if (current) observer.observe(current)

    return () => {
      if (current) observer.disconnect()
    }
  }, [targetRef, optionsMemo])

  return { isVisible }
}
