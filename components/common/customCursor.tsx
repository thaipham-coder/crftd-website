'use client'

import Image from 'next/image'
import arrowIcon from '@/public/icons/arrow-right-light.svg'
import useIsomorphicLayoutEffect from '@/components/helpers/isomorphicEffect'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * A component that creates a custom cursor element that follows the cursor around the screen.
 * It provides interactive animations based on the cursor's interaction with elements.
 *
 * Example usage for the cursor to grow on hover:
 * <div data-type="link" className="ia">{content}</div>
 *
 * Example usage for the cursor to disappear on hover:
 * <div data-type="button" className="ia">{content}</div>
 */

export default function CustomCursor() {
  const trailerRef = useRef<HTMLDivElement>(null)

  useIsomorphicLayoutEffect(() => {
    if (ScrollTrigger.isTouch) return
    const ctx = gsap.context(() => {
      // Set the initial position of the trailer to the center of the screen.
      gsap.set(trailerRef.current, { xPercent: -50, yPercent: -50 })

      // Define tweens that control the position, size and opacity of the trailer, icon and shadow.
      const oTo = gsap.quickTo(trailerRef.current, 'opacity', {
          duration: 0.4,
          ease: 'power3.out',
        }),
        xTo = gsap.quickTo(trailerRef.current, 'x', {
          duration: 0.4,
          ease: 'power3.out',
        }),
        yTo = gsap.quickTo(trailerRef.current, 'y', {
          duration: 0.4,
          ease: 'power3.out',
        }),
        wTo = gsap.quickTo(trailerRef.current, 'width', {
          duration: 0.4,
          ease: 'power3.out',
        }),
        hTo = gsap.quickTo(trailerRef.current, 'height', {
          duration: 0.4,
          ease: 'power3.out',
        }),
        ihTo = gsap.quickTo('#icon', 'height', {
          duration: 0.4,
          ease: 'power3.out',
        }),
        iwTo = gsap.quickTo('#icon', 'width', {
          duration: 0.4,
          ease: 'power3.out',
        }),
        sTo = gsap.quickTo('#shadow', 'opacity', {
          duration: 0.4,
          ease: 'power3.out',
        })

      // Define the animation that plays when the cursor is not interacting with anything.
      const animate = (e: MouseEvent) => {
        const xOffset = window.innerWidth / 2,
          yOffset = window.innerHeight / 2,
          x = e.clientX - xOffset,
          y = e.clientY - yOffset
        xTo(x)
        yTo(y)
        hTo(16)
        wTo(16)
        ihTo(0)
        iwTo(0)
        sTo(0)
        document.body.style.cursor = 'auto'
      }

      window.addEventListener('mouseover', () => {
        oTo(1)
      })

      // Define the animation that plays when the cursor is interacting with something.
      window.addEventListener('mousemove', (e: MouseEvent) => {
        const interactable = (e.target as HTMLElement)?.closest('.ia')
        animate(e)
        if (interactable) {
          const type = interactable.getAttribute('data-type')
          switch (type) {
            case 'link':
              hTo(128)
              wTo(128)
              ihTo(32)
              iwTo(32)
              sTo(1)
              document.body.style.cursor = 'none'
              return
            case 'button':
              hTo(0)
              wTo(0)
              return
            default:
              return
          }
        }
      })

      window.addEventListener('mouseout', () => {
        oTo(0)
      })
    }, trailerRef)
    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={trailerRef}
      className="pointer-events-none invisible fixed left-1/2 top-1/2 z-40 flex items-center justify-center rounded-full bg-crftd-purple opacity-0 will-change-transform md:visible"
    >
      <Image
        id="icon"
        src={arrowIcon}
        alt="arrow right icon"
        className="will-change-transform"
      />
      <div
        id="shadow"
        className="absolute h-[inherit] w-[inherit] rounded-full shadow-[0px_0px_120px_16px_#9B91FA]"
      />
    </div>
  )
}
