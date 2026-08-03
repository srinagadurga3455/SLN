import React, { useEffect, useRef, useState } from 'react'

/**
 * HeroBackground Component
 *
 * Displays either a video or image background with cinematic effect.
 * - Video: muted, autoplay, loop with pause when out of view
 * - Image: Ken Burns effect (slow zoom/pan) using a real <img> for LCP
 * - Respects prefers-reduced-motion
 * - Dark green gradient overlay for text readability
 *
 * Props:
 * - videoSrc: path to video file (optional)
 * - imageSrc: path to fallback/main image (required)
 * - imageAlt: alt text for image
 */

const HeroBackground = ({ videoSrc = null, imageSrc, imageAlt = 'Nursery background' }) => {
  const videoRef = useRef(null)
  const [useVideo, setUseVideo] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mediaQuery.matches)

    const handleChange = () => setReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener('change', handleChange)

    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    if (videoSrc && window.innerWidth > 768 && !reducedMotion) {
      setUseVideo(true)
    }
  }, [videoSrc, reducedMotion])

  useEffect(() => {
    if (!videoRef.current || !useVideo) return

    const video = videoRef.current
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {
              setUseVideo(false)
            })
          } else {
            video.pause()
          }
        })
      },
      { threshold: 0.25 }
    )

    observer.observe(video)

    return () => {
      observer.disconnect()
    }
  }, [useVideo])

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Video Background (if available and conditions met) */}
      {useVideo && videoSrc && (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}

      {/* Image Background with Ken Burns Effect */}
      {(!useVideo || !videoSrc) && (
        <img
          src={imageSrc}
          alt={imageAlt}
          width="2532"
          height="1300"
          fetchPriority="high"
          className={`absolute inset-0 w-full h-full object-cover ${
            reducedMotion ? '' : 'animate-ken-burns'
          }`}
          decoding="async"
        />
      )}

      {/* Gradient Overlay for Text Readability */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(20, 50, 10, 0.65), rgba(20, 50, 10, 0.80))',
        }}
      />

      {/* Subtle Grain/Texture Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  )
}

export default HeroBackground
