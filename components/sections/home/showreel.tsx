'use client'

import { useRef } from 'react'
import useIsomorphicLayoutEffect from '@/components/helpers/isomorphicEffect'
import { gsap } from 'gsap'

export default function Showreel() {
  const el = useRef<HTMLDivElement>(null)

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(el.current, {
        clipPath: 'inset(0 40% 40% 40%)',
        scrollTrigger: {
          trigger: el.current,
          start: 'top 75%',
          end: 'bottom 75%',
          scrub: 1,
        },
      })
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={el} className="aspect-video">
      <iframe
        src="https://player.vimeo.com/video/829920535?controls=0&autoplay=1&loop=1&muted=1&title=0&autopause=0&background=1"
        className="pointer-events-none h-full w-full"
        allowFullScreen
      />
    </section>
  )
}
