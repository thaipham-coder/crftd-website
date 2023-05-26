'use client'

import Image from 'next/image'
import Link from 'next/link'

import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import useIsomorphicLayoutEffect from '@/components/helpers/isomorphicEffect'
import arrowIcon from '@/public/icons/arrow-right-dark.svg'
import Case from '@/components/partials/case'
import mika from '@/public/images/BuiteNOM_Exterieur07_LR.jpg'

gsap.registerPlugin(ScrollTrigger)

export default function Cases() {
  const el = useRef<HTMLDivElement>(null)

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: el.current,
        start: 'top top',
        end: 'bottom bottom',
        pin: '#fixed-cases',
        pinSpacing: false,
      })
      gsap.set('#cases', { autoAlpha: 1 })
      gsap.from('#cases path', {
        yPercent: 100,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el.current,
          start: '10% 75%',
          end: '25% 75%',
          scrub: 1.5,
        },
      })
    }, el)
    return () => ctx.revert()
  }, [])
  return (
    <section ref={el} className="bg-crftd-white pb-16 md:pb-24 xl:pb-32">
      <div className="container mx-auto px-8 md:px-4">
        <div
          id="fixed-cases"
          className="pointer-events-none flex h-screen items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="cases"
            width="1920"
            height="378.223"
            viewBox="0 0 1920 378.223"
            className="fouc"
          >
            <path
              d="M201.609,182.755c84.585,0,155.415-46.762,176.046-134.1l-77.02-18.567c-9.628,46.762-48.138,75.645-96.963,75.645-61.891,0-105.9-47.45-105.9-112.092,0-63.266,42.636-112.092,105.215-112.092,48.825,0,87.335,29.57,96.963,76.332l77.02-18.567c-20.63-87.335-91.461-134.785-176.046-134.785-110.029,0-186.361,83.9-186.361,189.112S89.517,182.755,201.609,182.755Zm400.917,0c62.579,0,94.212-32.321,107.966-54.327h6.189c2.751,23.381,19.255,45.387,51.576,45.387h61.2V105.048H813.643c-11,0-16.5-6.189-16.5-15.817V-186.528H715.993v44.011H709.8c-15.817-22.006-48.825-52.951-109.341-52.951-96.275,0-167.794,79.771-167.794,189.112S505.563,182.755,602.526,182.755Zm14.441-78.4C559.89,104.36,515.19,62.412,515.19-5.669c0-66.7,43.324-112.092,101.089-112.092,55.014,0,101.089,40.573,101.089,112.092C717.368,55.535,678.17,104.36,616.967,104.36Zm410.544,78.4c88.711,0,145.1-48.138,145.1-118.968,0-145.1-200.8-81.834-200.8-149.226,0-21.318,20.63-36.447,55.014-36.447s57.765,14.441,64.642,46.074l72.206-19.943c-13.066-64.642-67.393-99.713-136.848-99.713-81.834,0-132.722,47.45-132.722,108.653,0,146.476,195.3,85.272,195.3,158.166,0,24.069-20.63,38.51-59.828,38.51-37.822,0-63.954-17.88-71.519-55.7l-77.02,17.192C890.663,144.933,949.116,182.755,1027.511,182.755Zm387.163,0c74.957,0,140.974-37.135,164.355-112.092l-74.269-17.88c-13.066,39.885-50.888,60.516-90.774,60.516-59.14,0-98.338-38.51-99.026-99.026H1587.97V-8.419c0-107.278-66.7-187.049-176.734-187.049-96.963,0-180.172,76.332-180.172,189.8C1231.064,104.36,1304.646,182.755,1414.675,182.755ZM1315.649-44.866c4.814-43.324,44.011-79.771,95.587-79.771,49.513,0,90.086,30.946,94.212,79.771ZM1789.46,182.755c88.711,0,145.1-48.138,145.1-118.968,0-145.1-200.8-81.834-200.8-149.226,0-21.318,20.63-36.447,55.014-36.447s57.765,14.441,64.642,46.074l72.206-19.943c-13.066-64.642-67.392-99.713-136.848-99.713-81.834,0-132.722,47.45-132.722,108.653,0,146.476,195.3,85.272,195.3,158.166,0,24.069-20.63,38.51-59.828,38.51-37.822,0-63.954-17.88-71.519-55.7l-77.02,17.192C1652.612,144.933,1711.064,182.755,1789.46,182.755Z"
              transform="translate(-14.56 195.468)"
              fill="#000000"
            />
          </svg>
        </div>
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="flex w-full flex-col gap-16 px-4 md:w-10/12">
            <Case
              title="Boddy"
              intro="Small actions with a huge impact – a well thought-out website"
              category="UI-design&nbsp;&nbsp;/&nbsp;&nbsp;UX-design"
              src={mika}
              href="/domslim"
            />
            <Case
              title="Boddy"
              intro="Made the impossible possible – an attactive re-branding"
              category="branding&nbsp;&nbsp;/&nbsp;&nbsp;webdesign"
              src={mika}
              href="/domslim"
            />
            <Case
              title="Boddy"
              intro="Where automotive meets finesse – accessible app for employees"
              category="app design&nbsp;&nbsp;/&nbsp;&nbsp;app development"
              src={mika}
              href="/domslim"
            />
          </div>
        </div>
        <div className="-mx-4 mt-16 flex justify-center md:mt-24 xl:mt-32">
          <Link
            href="/cases"
            data-type="button"
            className="ia group flex w-fit items-center gap-4"
            aria-label="Button to cases page"
          >
            <p>See more</p>
            <button
              type="button"
              className="flex h-8 w-8 items-center justify-center before:absolute before:h-8 before:w-8 before:rounded-full before:border before:border-crftd-gray before:transition-all before:duration-300 before:ease-out group-hover:before:h-12 group-hover:before:w-12 group-hover:before:border-0 group-hover:before:bg-crftd-purple"
            >
              <Image src={arrowIcon} alt="arrow right icon" className="z-0" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
