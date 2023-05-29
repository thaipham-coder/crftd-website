'use client'

import Image from 'next/image'
import useIsomorphicLayoutEffect from '@/components/helpers/isomorphicEffect'
import { useRef } from 'react'
import { gsap } from 'gsap'

export default function Preloader() {
  const el = useRef<HTMLDivElement>(null)

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('p', {
        autoAlpha: 1,
      })
      gsap.from('p', {
        yPercent: 100,
        duration: 0.6,
        ease: 'power3.out',
      })
      gsap.to('p', {
        innerText: '100%',
        snap: {
          innerText: 4,
        },
        ease: 'power3.out',
        duration: 3,
      })
      const tl = gsap
        .timeline({
          onStart: () => {
            document.body.style.overflow = 'hidden'
          },
        })
          .to('#kleine', {
            width: 2400,
            height: 1800,
            filter: 'blur(96px)',
            rotate: -135,
            autoAlpha: 0.2,
            ease: 'power3.out',
            duration: 6,
          })
        .to('#grote', {
          width: 480,
          height: 360,
          filter: 'blur(64px)',
          rotate: 45,
          autoAlpha: 0.8,
          // ease: 'power3.out',
            ease: "back.out(3)",
          duration: 2,

        }, '<+=1')
        .to('#grote', {
            width: 4800,
            height: 3600,
            rotate: 135,
            filter: 'blur(96px)',
          duration: 1,
          ease: 'power3.inOut',
        })
        .to(
          el.current,
          {
            opacity: 0,
            duration: 1,
            ease: 'power3.inOut',
            onStart: () => {
              document.body.style.overflow = 'auto'
            },
          },
          '<',
        )
        .set(
          el.current,
          {
            pointerEvents: 'none',
          },
          '<',
        )
        .set(el.current, {
          autoAlpha: 0,
        })
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
      <div id="kleine" className="fouc absolute rounded-full bg-gradient-to-br from-transparent to-crftd-purple  will-change-[filter]"></div>
      <div
        id="grote"
        className="fouc absolute rounded-full bg-gradient-conic from-crftd-purple via-crftd-purple-dark blur-xl will-change-[filter]"
      ></div>
      <div className="lp absolute bottom-6 right-6 md:bottom-12 md:right-12">
        <p className="fouc font-archia text-2xl leading-none text-crftd-white">
          0%
        </p>
      </div>
    </div>
  )
}
