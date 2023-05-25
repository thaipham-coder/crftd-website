'use client'

import useIsomorphicLayoutEffect from '@/components/helpers/isomorphicEffect'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(SplitText, ScrollTrigger)

export default function Description(props: { bg?: string; padding?: string }) {
  let bg = ''
  let padding = ''

  switch (props.bg) {
    case 'dark':
      bg = 'bg-black'
      break
    case 'light':
      bg = 'bg-crftd-white'
      break
    default:
      bg = ''
      break
  }

  switch (props.padding) {
    case 'pt':
      padding = 'pt-16 md:pt-24 xl:pt-32'
      break
    case 'pb':
      padding = 'pb-16 md:pb-24 xl:pb-32'
      break
    case 'py':
      padding = 'py-16 md:py-24 xl:py-32'
      break
    default:
      padding = ''
      break
  }

  let className = `${bg} ${padding}`

  const el = useRef<HTMLDivElement>(null)

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (el.current) {
        const revealElement = el.current.querySelector('.reveal')
        gsap.set(revealElement, { autoAlpha: 1 })
        const childSplit = new SplitText(revealElement, {
          type: 'lines',
          linesClass: 'lc',
        })
        const parentSplit = new SplitText(revealElement, {
          type: 'lines',
          linesClass: 'lp',
        })
        gsap.from(childSplit.lines, {
          yPercent: 100,
          stagger: 0.18,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: revealElement,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        })
      }
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <section className={className} ref={el}>
      <div className="container mx-auto px-8 md:px-4">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 md:w-10/12">
            <h3 className="reveal font-archia text-3xl lowercase leading-tight md:text-6xl md:leading-tight">
              with this fictional, hybrid body care brand, we show a conceivable
              evolution from consumer brands to platforms that bring together
              different products and services under one name.
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}
