'use client'

import Image from 'next/image'
import useIsomorphicLayoutEffect from "@/components/helpers/isomorphicEffect";
import { useRef } from 'react'
import { gsap } from 'gsap'

export default function Preloader() {
    const el = useRef<HTMLDivElement>(null)
    const tl = useRef<GSAPTimeline>()

    useIsomorphicLayoutEffect(() => {
        const ctx = gsap.context(() => {
            tl.current = gsap
                .timeline({
                    onStart: () => {
                        document.body.style.overflow = 'hidden'
                        document.body.style.cursor = 'wait'
                    },
                })
                // .to(
                //     '#preloader-logo',
                //     { yPercent: 160, duration: 1, ease: 'power2.inOut' },
                //     1,
                // )
                .to(
                    el.current,
                    {
                        xPercent: 10,
                        duration: 5,
                    }
                )
                .to(
                    el.current,
                    {
                        yPercent: -100,
                        duration: 0.25,
                        delay: 5,
                        ease: 'power2.inOut',
                        onStart: () => {
                            document.body.style.overflow = 'auto'
                            document.body.style.cursor = 'auto'
                        },
                    },
                    '<+=.5',
                )
        }, el)
        return () => ctx.revert()
    }, [])

  return (
    <div ref={el} aria-busy="true" aria-label="Loading" className="fixed inset-0 z-[500] flex h-full w-full items-center justify-center bg-crftd-purple">
        <h1>hoi</h1>
    </div>
  )
}
