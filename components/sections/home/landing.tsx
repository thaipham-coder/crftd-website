'use client'

import { useRef } from 'react'
import useIsomorphicLayoutEffect from '@/components/helpers/isomorphicEffect'
import { gsap } from 'gsap'

export default function Landing() {
  const el = useRef<HTMLDivElement>(null)

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('#crftd path', {
        yPercent: 110,
        stagger: 0.06,
        duration: 1,
        delay: 1,
        ease: 'power3.out',
      })
    }, el)
    return () => ctx.revert()
  }, [])
  return (
    <section
      ref={el}
      className="flex min-h-[60vh] items-end bg-black pb-8 text-crftd-white md:pb-16"
    >
      <div className="container mx-auto px-8 md:px-4">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 md:w-7/12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="crftd"
              viewBox="0 0 1080 358.4"
            >
              <path
                id="c"
                d="M0 229.2C0 157.3 52.1 100 127.3 100c57.8 0 106.2 32.4 120.3 92.1L195 204.8c-6.6-31.9-32.9-52.1-66.2-52.1-42.7 0-71.9 33.4-71.9 76.6 0 44.2 30.1 76.6 72.3 76.6 33.4 0 59.7-19.7 66.2-51.7l52.6 12.7c-14.1 59.7-62.5 91.6-120.3 91.6C51.2 358.4 0 301.1 0 229.2z"
                fill="#f2f2f2"
              />
              <path
                id="r"
                d="M290.3 106.2h55v36.2h3.8c9.4-20.7 33.4-42.3 64.8-42.3h18.3v55.4h-24.4c-40.4 0-62 28.7-62 75.2v121.7h-55.4V106.2z"
                fill="#f2f2f2"
              />
              <path
                id="f"
                d="M547.3 106.2v-32c0-17.4 7-25.8 24.4-25.8h40.4V0h-41.3c-47.4 0-78.9 21.6-78.9 73.8v32.4h-43.2V155h43.2v197.3h55.4V155h16.1l48.9-48.9h-65z"
                fill="#f2f2f2"
              />
              <path
                id="t"
                d="M677.4 278.6V155h-65.1v-48.9h68.4v-69h52.6v69.1h69.5V155h-69.5v123.1c0 17.4 7 24.9 24 24.9H800v49.3h-43.2c-47.9 0-79.4-21.6-79.4-73.7z"
                fill="#f2f2f2"
              />
              <path
                id="d"
                d="M1024.6 0v137.6h-4.2c-10.8-14.1-31.9-37.6-75.6-37.6-66.3.1-113.8 56-113.8 129.2 0 74.7 50.7 129.2 117 129.2 42.7 0 62.9-22.5 73.3-35.2h4.2v29.1h54.5V0h-55.4zm-67.7 306.8c-38.5 0-70-30.5-70-77 0-45.6 30.1-77.5 69.5-77.5 38.1 0 69.5 28.7 69.5 77.5.1 41.7-27.2 77-69 77z"
                fill="#f2f2f2"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
