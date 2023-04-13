'use client'

import { useState } from 'react'

export function useIsScrolling(seconds: number) {
  const [isScrolling, setIsScrolling] = useState<boolean>(false)
  let scrollTimeOut: NodeJS.Timeout
  const milliseconds = seconds * 1000

  window.addEventListener('scroll', (ev: Event) => {
    setIsScrolling(true)
    window.clearTimeout(scrollTimeOut)
    scrollTimeOut = setTimeout(() => {
      setIsScrolling(false)
    }, milliseconds)
  })

  return { isScrolling }
}

/*
link: https://www.bufa.es/javascript-detectar-cuando-dejas-de-hacer-scroll/

function noScroll (callback, refresh = 100) {
  if (!callback || typeof callback !== 'function') return;
  let isScrolling;
  window.addEventListener('scroll', function (event) {
    document.body.classList.add('is-scrolling');
    window.clearTimeout(isScrolling);
    isScrolling = setTimeout(callback, refresh);
  }, false);
}

noScroll(function () {
  // Scroll stop
  document.body.classList.remove('is-scrolling');
});
*/
