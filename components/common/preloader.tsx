'use client'

import Image from 'next/image'
import useIsomorphicLayoutEffect from '@/components/helpers/isomorphicEffect'
import { useRef } from 'react'
import { gsap } from 'gsap'

export default function Preloader() {
  const el = useRef<HTMLDivElement>(null)

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
        const tl = gsap.timeline()
            .from("#grote", {
                width: 0,
                height: 0,
                rotate: 45,
                filter: "blur(20px)",
                opacity: 0,
                // xPercent: -50,
                duration: 2,
                ease: "power3.out",

        })
            // .to("#kleine", {
            //     scale: 10,
            //     duration: 2,
            //     ease: "power3.out",
            // })
            // .to("#kleine", {
            //     rotate: 720,
            //     duration: 10,
            // })
            .to("#grote", {
                scale: 10,
                duration: 2,
                ease: "power3.out",
            })
            .to(el.current, {
                opacity: 0,
                duration: 3,
                ease: "power3.out",
            }, "<")


        // gsap.to(el.current, {
        //     backgroundColor: "#9b91fa",
        //     duration: 1,
        //     delay: 1,
        //
        // })
  //     tl.current = gsap
  //       .timeline({
  //         onStart: () => {
  //           document.body.style.overflow = 'hidden'
  //           document.body.style.cursor = 'wait'
  //         },
  //       })
  //       // .to(
  //       //     '#preloader-logo',
  //       //     { yPercent: 160, duration: 1, ease: 'power2.inOut' },
  //       //     1,
  //       // )
  //       .to(el.current, {
  //         xPercent: 10,
  //         duration: 5,
  //       })
  //       .to(
  //         el.current,
  //         {
  //           yPercent: -100,
  //           duration: 0.25,
  //           delay: 5,
  //           ease: 'power2.inOut',
  //           onStart: () => {
  //             document.body.style.overflow = 'auto'
  //             document.body.style.cursor = 'auto'
  //           },
  //         },
  //         '<+=.5',
  //       )
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={el}
      aria-busy="true"
      aria-label="Loading"
      className="fixed inset-0 z-50 flex h-screen w-full items-center justify-center bg-black"
    >
        {/*<div id="kleine" className="  absolute h-[480px] w-[480px] -translate-x-1/3  rounded-full bg-gradient-to-br from-transparent to-crftd-purple opacity-20 blur-2xl lg:h-[360px] "></div>*/}
        <div id="grote" className="  absolute h-[480px] w-[240px]   bg-gradient-conic blur-2xl from-crftd-purple will-change-[filter]  opacity-80 "></div>
    </div>
  )
}
