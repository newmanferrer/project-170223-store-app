'use client'

import { useState } from 'react'

const initialState = {
  isScrollingToTop: false,
  isScrollingToBottom: false
}

export function useScrollingYDirection() {
  const [scrollingDirectionY, setScrollingDirectionY] = useState(initialState)
  let scrollPosition = document.body.getBoundingClientRect().y

  window.addEventListener('scroll', (ev: Event) => {
    if (document.body.getBoundingClientRect().top > scrollPosition) {
      //* TO TOP
      setScrollingDirectionY({
        ...scrollingDirectionY,
        isScrollingToTop: true,
        isScrollingToBottom: false
      })
    } else {
      //* TO BOTTOM
      scrollPosition = document.body.getBoundingClientRect().top
      setScrollingDirectionY({
        ...scrollingDirectionY,
        isScrollingToTop: false,
        isScrollingToBottom: true
      })
    }
  })

  return { scrollingDirectionY }
}
