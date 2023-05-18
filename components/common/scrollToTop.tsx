'use client'

import Image from 'next/image'
import arrowIcon from '@/public/icons/arrow-up-light.svg'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin)

/**
 * A component that provides a "Scroll to top" button that appears when scrolling down the page.
 * Clicking the button smoothly scrolls the window to the top of the page.
 */

export default function ScrollToTop() {
  const btn = useRef<HTMLButtonElement>(null)
  const stt = () => {
    gsap.to(window, { duration: 0.6, scrollTo: 0, ease: 'power3.out' })
  }

  useEffect(() => {
    if (!btn.current) return
    btn.current.classList.add('xl:flex')
  }, [])

  return (
    <button
      type="button"
      data-type="button"
      ref={btn}
      className="ia absolute bottom-[41px] right-[41px] hidden h-8 w-8 items-center justify-center before:absolute before:h-8 before:w-8 before:rounded-full before:border before:border-crftd-gray before:transition-all before:duration-300 before:ease-out hover:before:h-12 hover:before:w-12 hover:before:border-0 hover:before:bg-crftd-purple"
      aria-label="Scroll to top"
      onClick={stt}
    >
      <Image src={arrowIcon} alt="arrow up icon" className="z-0" />
    </button>
  )
}
