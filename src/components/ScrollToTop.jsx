import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * ScrollToTop — resets scroll on route change and scrolls to
 * hash targets (e.g. /#plants) once the target section is rendered.
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      const attempt = () => {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
          return true
        }
        return false
      }
      if (!attempt()) {
        // Section may not be rendered yet on first visit; retry briefly.
        let tries = 0
        const timer = setInterval(() => {
          tries += 1
          if (attempt() || tries > 10) clearInterval(timer)
        }, 120)
        return () => clearInterval(timer)
      }
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return null
}

export default ScrollToTop
