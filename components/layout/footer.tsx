'use client'

import Image from 'next/image'
import Link from 'next/link'
import arrowIcon from '@/public/icons/arrow-right-light.svg'
import LiveClock from '@/components/common/liveClock'
import ScrollToTop from '@/components/common/scrollToTop'
import useIsomorphicLayoutEffect from '@/components/helpers/isomorphicEffect'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(SplitText)

export default function Footer() {
  const el = useRef<HTMLDivElement>(null)

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('#crftd', { autoAlpha: 1 })
      gsap.from('#crftd path', {
        yPercent: 100,
        stagger: 0.06,
        scrollTrigger: {
          trigger: el.current,
          start: 'top bottom',
          end: 'top 40%',
          id: 'footer',
          scrub: 1.5,
        },
      })
      gsap.set('footer .reveal', { autoAlpha: 1 })
      const targets = gsap.utils.toArray('footer .reveal') as gsap.DOMTarget[]
      targets.forEach((target) => {
        const childSplit = new SplitText(target, {
          type: 'lines',
          linesClass: 'lc',
        })
        const parentSplit = new SplitText(target, {
          type: 'lines',
          linesClass: 'lp',
        })
        gsap.from(childSplit.lines, {
          yPercent: 100,
          stagger: 0.18,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: target,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        })
      })
    }, el)
    return () => ctx.revert()
  }, [])
  return (
    <footer
      ref={el}
      className="bg-black pb-6 pt-16 text-crftd-white before:pointer-events-none  md:pb-12 md:pt-24 xl:pt-32"
    >
      <div className="container mx-auto px-8 md:px-4">
        <div className="md:mb-18 -mx-4 mb-12 flex flex-wrap justify-between xl:mb-24">
          <div className="mb-12 w-full px-4 md:mb-0 md:w-5/12">
            <Link href="/" aria-label="Link to home page">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="crftd"
                viewBox="0 0 1080 358.4"
                className="fouc"
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
            </Link>
          </div>
          <div className="flex w-full flex-col justify-end gap-6 px-4 md:-mb-2 md:w-6/12 xl:w-5/12">
            <p className="reveal font-archia text-3xl xl:text-4xl">
              we collaborate with ambitious brands and people. have an idea?
            </p>
            <Link
              href="/contact"
              data-type="button"
              className="ia group flex w-fit items-center gap-4"
              aria-label="Button to contact page"
            >
              <p>Let’s talk</p>
              <button
                type="button"
                className="flex h-8 w-8 items-center justify-center before:absolute before:h-8 before:w-8 before:rounded-full before:border before:border-crftd-gray before:transition-all before:duration-300 before:ease-out group-hover:before:h-12 group-hover:before:w-12 group-hover:before:border-0 group-hover:before:bg-crftd-purple"
              >
                <Image src={arrowIcon} alt="arrow right icon" className="z-0" />
              </button>
            </Link>
          </div>
        </div>
        <div className="-mx-4 mb-24 flex flex-wrap justify-between text-crftd-gray md:mb-48 xl:mb-72">
          <div className="mb-8 w-full px-4 md:mb-0 md:w-5/12 xl:w-4/12">
            <p className="reveal text-2xl xl:text-3xl">
              Crafted is an agency specialised in crafting innovative digital
              products of tomorrow.{' '}
              <span className="text-crftd-white">Today.</span>
            </p>
          </div>
          <div className="flex w-full flex-wrap md:w-6/12 xl:w-5/12">
            <div className="mb-8 w-full px-4 text-2xl md:mb-0 md:w-3/6 xl:w-2/5">
              <ul>
                <li>
                  <a
                    href="tel:+31626218714"
                    data-type="button"
                    className="ia transition-all ease-out hover:text-crftd-purple"
                  >
                    +31 6 26218714
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hello@crftd.nl"
                    data-type="button"
                    className="ia transition-all ease-out hover:text-crftd-purple"
                  >
                    hello@crftd.nl
                  </a>
                </li>
              </ul>
            </div>
            <nav className="w-6/12 px-4 md:w-1/6 xl:w-1/5">
              <ul>
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
            <div className="w-6/12 px-4 md:w-1/6 xl:w-1/5">
              <ul>
                <li>
                  <a
                    href="https://www.behance.net/crftd/"
                    data-type="button"
                    target="_blank"
                    className="ia transition-all ease-out hover:text-crftd-purple"
                    rel="noreferrer"
                  >
                    Behance
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/crftd.nl/"
                    data-type="button"
                    target="_blank"
                    className="ia transition-all ease-out hover:text-crftd-purple"
                    rel="noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/crftd-nl/"
                    data-type="button"
                    target="_blank"
                    className="ia transition-all ease-out hover:text-crftd-purple"
                    rel="noreferrer"
                  >
                    Linkedin
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap text-sm text-crftd-gray">
          <div className="flex w-full justify-between px-4 md:w-6/12 xl:w-7/12">
            <p>
              <LiveClock /> CEST
            </p>
            <p className="order-first block md:hidden">
              ©2023 Crafted Digital Agency
            </p>
          </div>
          <div className="flex hidden px-4 md:block md:w-6/12 xl:w-5/12">
            <p>©2023 Crafted Digital Agency</p>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </footer>
  )
}
