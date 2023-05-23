'use client'

import { useRef } from 'react'
import Image from 'next/image'
import hamburgerIcon from '@/public/icons/hamburger-menu-light.svg'
import logoEmblem from '@/public/logos/crftd-emblem-light.svg'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import useIsomorphicLayoutEffect from '@/components/helpers/isomorphicEffect'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

export default function Navbar() {
  const el = useRef<HTMLDivElement>(null)

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const anim = gsap
        .from(el.current, {
          autoAlpha: 0,
          paused: true,
          duration: 0.4,
          ease: 'power3.out',
        })
        .progress(1)

      ScrollTrigger.create({
        start: 'top top',
        end: 99999,
        onUpdate: (self) => {
          self.direction === -1 ? anim.play() : anim.reverse()
        },
      })
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <header
      ref={el}
      className="pointer-events-none fixed top-6 z-30 w-full text-crftd-white md:top-12"
    >
      <div className="container mx-auto px-8 md:px-4">
        <div className="-mx-4 flex flex-wrap items-center justify-between">
          <div className="pointer-events-auto px-4">
            <Link href="/" aria-label="Link to home page">
              <Image src={logoEmblem} alt="menu hamburger icon" />
            </Link>
          </div>
          <div className="pointer-events-auto px-4">
            <button
              type="button"
              data-type="button"
              className="ia flex h-16 w-16 items-center justify-center before:absolute before:h-16 before:w-16 before:rounded-full before:border before:border-crftd-gray before:transition-all before:duration-300 before:ease-out hover:before:h-24 hover:before:w-24 hover:before:border-0 hover:before:bg-crftd-purple"
              aria-label="Button to open hamburger menu"
            >
              <Image
                src={hamburgerIcon}
                alt="menu hamburger icon"
                className="z-0"
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
