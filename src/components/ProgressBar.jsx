import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function ProgressBar() {
  const [progress, setProgress] = useState(0)
  const { pathname } = useLocation()

  useEffect(() => {
    setProgress(0)
    window.scrollTo(0, 0)

    function onScroll() {
      const h = document.documentElement
      const scrollable = h.scrollHeight - h.clientHeight
      setProgress(scrollable > 0 ? (h.scrollTop / scrollable) * 100 : 0)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname])

  return <div id="progress" aria-hidden="true" style={{ width: `${progress}%` }} />
}
