"use client"

import { useEffect, useRef, useState } from "react"

/** Silent screen recording that loops while on screen; paused with controls under reduced motion */
export function CaseStudyVideo({
  src,
  poster,
  width,
  height,
  label,
}: {
  src: string
  poster: string
  width: number
  height: number
  label: string
}) {
  const ref = useRef<HTMLVideoElement>(null)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const video = ref.current
    if (!video) return

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReducedMotion(motion.matches)
    if (motion.matches) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { threshold: 0.25 },
    )
    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      width={width}
      height={height}
      muted
      loop
      playsInline
      preload="none"
      controls={reducedMotion}
      aria-label={label}
      className="block h-auto w-full"
    />
  )
}
