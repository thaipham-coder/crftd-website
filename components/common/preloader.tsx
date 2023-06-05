'use client'

import Image from 'next/image'
import useIsomorphicLayoutEffect from '@/components/helpers/isomorphicEffect'
import { useRef } from 'react'
import { gsap } from 'gsap'

/**
 * A component that displays a preloader animation on initial page load which hides itself when the content below is ready.
 */

export default function Preloader() {
  const el = useRef<HTMLDivElement>(null)

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('#info', {
        autoAlpha: 1,
      })
      gsap.from('p', {
        yPercent: 100,
        duration: 0.6,
        ease: 'power3.out',
      })
      gsap.to('#progress', {
        innerText: '100%',
        snap: {
          innerText: 4,
        },
        ease: 'power3.out',
        duration: 4.2,
      })
      const tl = gsap
        .timeline({
          onStart: () => {
            document.body.style.overflow = 'hidden'
            document.body.style.cursor = 'wait'
          },
        })
        .set('#smallBlob', {
          filter: 'blur(96px)',
        })
        .set('#largeBlob', {
          filter: 'blur(64px)',
        })
        .to('#smallBlob', {
          width: 2400,
          height: 1800,
          rotate: -135,
          autoAlpha: 0.2,
          ease: 'power3.out',
          duration: 6,
        })
        .to(
          '#largeBlob',
          {
            width: 480,
            height: 360,
            rotate: 45,
            autoAlpha: 0.8,
            ease: 'back.out(3)',
            duration: 2,
          },
          '<+=0.8',
        )
        .to(
          '#largeBlob',
          {
            width: 4800,
            height: 3600,
            rotate: 90,
            filter: 'blur(128px)',
            duration: 1.6,
            ease: 'power3.inOut',
          },
          '<+=2',
        )
        .to(
          el.current,
          {
            autoAlpha: 0,
            duration: 1.2,
            ease: 'power3.out',
            onStart: () => {
              document.body.style.overflow = 'auto'
              document.body.style.cursor = 'auto'
            },
          },
          '<+=0.8',
        )
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={el}
      aria-busy="true"
      aria-label="Loading"
      data-type="loader"
      className="ia fixed inset-0 z-50 flex h-[100dvh] w-full items-center justify-center bg-black"
    >
      <div
        id="smallBlob"
        className="fouc absolute rounded-full bg-gradient-to-br from-transparent to-crftd-purple will-change-[filter]"
      ></div>
      <div
        id="largeBlob"
        className="fouc absolute rounded-full bg-gradient-conic from-crftd-purple via-crftd-purple-dark will-change-[filter]"
      ></div>
      <div
        id="info"
        className="fouc lp absolute bottom-6 left-6 right-6 flex justify-between font-archia text-2xl leading-none text-crftd-white md:bottom-12 md:left-12 md:right-12"
      >
        <p>crftd</p>
        <p id="progress">0%</p>
      </div>
    </div>
  )
}
