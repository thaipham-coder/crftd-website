'use client'

import Image from 'next/image'
import Link from 'next/link'
import useIsomorphicLayoutEffect from '@/components/helpers/isomorphicEffect'
import { useRef } from 'react'
import { gsap } from 'gsap'
import arrowIcon from '@/public/icons/arrow-right-light.svg'

export default function About() {
  const el = useRef<HTMLDivElement | null>(null)

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.aboutTitle', {
        xPercent: -100,
        scrollTrigger: {
          trigger: el.current,
          start: 'top 75%',
          end: 'bottom top',
          scrub: 1.5,
        },
      })
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={el}
      className="bg-black pb-16 pt-16 text-crftd-white md:pb-24 md:pt-24 xl:pb-32 xl:pt-32"
    >
      <div className="container mx-auto flex flex-col gap-12 px-8 md:gap-24 md:px-4">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 md:w-10/12">
            <p className="font-archia text-3xl lowercase md:text-6xl md:leading-tight">
              We integrate different perspectives, collaborate with one another,
              and challenge ourselves to think outside the box. Our focus is on
              producing digital solutions that not only meet but exceed our
              clients’ expectations.
            </p>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4">
            <h2 className="aboutTitle whitespace-nowrap font-archia lowercase">
              About crftd / About crftd / About crftd / About crftd
            </h2>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap justify-end">
          <div className="flex w-full md:w-5/12">
            <div className="flex flex-col gap-6 px-4 md:w-4/5 md:gap-12">
              <p>
                Our approach to design is not just about creating something that
                looks good, but rather, it’s about creating an experience that
                engages and inspires audiences. We believe that great design is
                about creating an emotional connection between our clients and
                their audiences. Our digital solutions are designed to leave a
                lasting impression and to provide a seamless user experience.
              </p>
              <Link
                href="/about"
                data-type="button"
                className="ia group flex w-fit items-center gap-4"
                aria-label="Button to about page"
              >
                <p>Read more</p>
                <button
                  type="button"
                  className="flex h-8 w-8 items-center justify-center before:absolute before:h-8 before:w-8 before:rounded-full before:border before:border-crftd-gray before:transition-all before:duration-300 before:ease-out group-hover:before:h-12 group-hover:before:w-12 group-hover:before:border-0 group-hover:before:bg-crftd-purple"
                >
                  <Image
                    src={arrowIcon}
                    alt="arrow right icon"
                    className="z-0"
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
