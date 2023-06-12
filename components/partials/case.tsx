'use client'

import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { gsap } from 'gsap'
import useIsomorphicLayoutEffect from '@/components/helpers/isomorphicEffect'
import { useRef } from 'react'

export default function Case(props: {
  title: string
  intro: string
  category: string
  src: StaticImageData
  href: string
}) {
  const el = useRef<HTMLAnchorElement>(null)

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(el.current, {
        yPercent: 40,
        scrollTrigger: {
          trigger: el.current,
          start: 'top-=100% bottom',
          end: 'top 40%',
          scrub: 1.5,
        },
      })

      let hoverAnimation = gsap.timeline().fromTo(
        el.current,
        {
          clipPath:
            'polygon(0rem 0%, 100% 0%, 100% calc(100% - 0rem), calc(100% - 0rem) 100%, 0% 100%, 0% 0rem)',
        },
        {
          clipPath:
            'polygon(6rem 0%, 100% 0%, 100% calc(100% - 6rem), calc(100% - 6rem) 100%, 0% 100%, 0% 6rem)',
          ease: 'power3.out',
          duration: 0.6,
        },
      )

      if (el.current) {
        el.current.addEventListener('mouseenter', () => {
          if (hoverAnimation) {
            hoverAnimation.play()
          }
        })
        el.current.addEventListener('mouseleave', () => {
          if (hoverAnimation) {
            hoverAnimation.reverse()
          }
        })
      }
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <Link
      ref={el}
      href={`/cases${props.href}`}
      id={`${props.title.toLowerCase()}-case`}
      data-type="link"
      className="ia relative aspect-3/4 overflow-hidden before:pointer-events-none before:absolute before:inset-0 before:z-10 before:bg-gradient-to-t before:from-black before:to-transparent before:to-60% before:opacity-60 md:aspect-video md:before:bg-gradient-to-tr"
    >
      <div className="absolute bottom-8 left-8 right-8 z-20 md:bottom-12 md:left-12 md:w-3/6">
        <p className="mb-2 font-archia text-2xl lowercase text-crftd-white md:text-4xl">
          {props.intro}
        </p>
        <p className="text-crftd-purple">{props.category}</p>
      </div>
      <Image
        src={props.src}
        alt={`${props.title} thumbnail image`}
        className="h-full w-full object-cover object-center md:h-auto md:w-[unset]"
      />
    </Link>
  )
}
