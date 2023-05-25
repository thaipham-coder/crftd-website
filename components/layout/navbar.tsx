'use client'

import { useRef } from 'react'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import useIsomorphicLayoutEffect from '@/components/helpers/isomorphicEffect'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

export default function Navbar() {
  const hdr = useRef<HTMLDivElement>(null)

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const anim = gsap.from(hdr.current, {
        autoAlpha: 0,
        paused: true,
        duration: 0.4,
        ease: 'power3.out',
      })

      ScrollTrigger.create({
        start: 'top top',
        end: 99999,
        onUpdate: (self) => {
          self.direction === -1 ? anim.play() : anim.reverse()
        },
      })
    }, hdr)
    return () => ctx.revert()
  }, [])
  return (
    <header
      ref={hdr}
      className="pointer-events-none fixed top-6 z-30 w-full text-crftd-white mix-blend-difference md:top-12"
    >
      <div className="container mx-auto px-8 md:px-4">
        <div className="-mx-4 flex items-center justify-between">
          <div className="pointer-events-auto px-4">
            <Link href="/" aria-label="Link to home page">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="72"
                height="48"
                viewBox="0 0 96 64"
              >
                <g id="emblem">
                  <path
                    id="emblem_1"
                    d="M283.5,129.4l16-16h16v16Z"
                    transform="translate(-219.5 -113.4)"
                    fill="#F2F2F2"
                  />
                  <path
                    id="emblem_2"
                    d="M120.7,170.1h-48l-16,16v32h16l16-16h-16v-16h32Z"
                    transform="translate(-56.7 -154.1)"
                    fill="#F2F2F2"
                  />
                  <path
                    id="emblem_3"
                    d="M170.1,242.8l16-16h32v16Z"
                    transform="translate(-138.1 -194.8)"
                    fill="#F2F2F2"
                  />
                  <g id="emblem_4" transform="translate(90.667 42.667)">
                    <g id="emblem_5" transform="translate(1.354 1.185)">
                      <path
                        id="a"
                        d="M384.634,270.945H383.59l-.169.536H382.8l.9-2.681h.818l.9,2.681h-.593Zm-.169-.508-.339-1.044H384.1l-.339,1.044Z"
                        transform="translate(-382.8 -268.8)"
                        fill="#F2F2F2"
                      />
                    </g>
                    <path
                      id="circle"
                      d="M380.653,264.6a2.653,2.653,0,1,0,2.653,2.653A2.649,2.649,0,0,0,380.653,264.6Zm0,4.741a2.088,2.088,0,1,1,2.088-2.088A2.083,2.083,0,0,1,380.653,269.341Z"
                      transform="translate(-378 -264.6)"
                      fill="#F2F2F2"
                    />
                  </g>
                </g>
              </svg>
            </Link>
          </div>
          <nav className="pointer-events-auto px-4">
            <ul className="flex gap-8">
              <li>
                <Link
                  href="/cases"
                  data-type="button"
                  className="ia transition-all ease-out hover:text-crftd-purple"
                >
                  Cases
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  data-type="button"
                  className="ia transition-all ease-out hover:text-crftd-purple"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  data-type="button"
                  className="ia transition-all ease-out hover:text-crftd-purple"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
