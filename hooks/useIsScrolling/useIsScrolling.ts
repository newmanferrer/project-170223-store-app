import { useState, useEffect } from 'react'

export function useIsScrolling(seconds: number) {
  const [isScrolling, setIsScrolling] = useState<boolean>(false)

  useEffect(() => {
    let scrollTimeOut: NodeJS.Timeout
    const milliseconds = seconds * 1000

    const onScroll = () => {
      setIsScrolling(true)
      window.clearTimeout(scrollTimeOut)
      scrollTimeOut = setTimeout(() => {
        setIsScrolling(false)
      }, milliseconds)
    }

    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [seconds])

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
