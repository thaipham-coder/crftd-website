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
        // gsap.set('svg', {
        //     autoAlpha: 1,
        // })
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
        duration: 4.2,
      })
      const tl = gsap
        .timeline({
          onStart: () => {
            document.body.style.overflow = 'hidden'
            document.body.style.cursor = 'wait'
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
            ease: "back.out(3)",
          duration: 2,
        }, '<+=0.8')
          // .from('svg', {
          //     width: 0,
          //     height: 0,
          // }, '<')
          // .to('svg', {
          //     filter: 'blur(0px)',
          //       duration: 2,
          //       ease: 'power3.out',
          // }, '<+=1')
        .to('#grote', {
            width: 4800,
            height: 3600,
            rotate: 90,
            filter: 'blur(256px)',
          duration: 1.6,
            // ease: "back.in(1)",
            ease: "power3.inOut",
        },
            '<+=2.4')
        .to(
          el.current,
          {
            autoAlpha: 0,
            duration: 1,
            ease: 'power3.out',
            onStart: () => {
              document.body.style.overflow = 'auto'
                document.body.style.cursor = 'auto'
            },
          },
          '<+=1',
        )
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
        <svg xmlns="http://www.w3.org/2000/svg" width="96" height="64" viewBox="0 0 96 64" className="fouc blur-xl will-change-[filter] z-50">
            <g id="emblem">
                <path id="emblem_1" d="M283.5,129.4l16-16h16v16Z" transform="translate(-219.5 -113.4)" fill="#F2F2F2"/>
                <path id="emblem_2" d="M120.7,170.1h-48l-16,16v32h16l16-16h-16v-16h32Z" transform="translate(-56.7 -154.1)" fill="#F2F2F2"/>
                <path id="emblem_3" d="M170.1,242.8l16-16h32v16Z" transform="translate(-138.1 -194.8)" fill="#F2F2F2"/>
                <g id="emblem_4" transform="translate(90.667 42.667)">
                    <g id="emblem_5" transform="translate(1.354 1.185)">
                        <path id="a" d="M384.634,270.945H383.59l-.169.536H382.8l.9-2.681h.818l.9,2.681h-.593Zm-.169-.508-.339-1.044H384.1l-.339,1.044Z" transform="translate(-382.8 -268.8)" fill="#F2F2F2"/>
                    </g>
                    <path id="circle"  d="M380.653,264.6a2.653,2.653,0,1,0,2.653,2.653A2.649,2.649,0,0,0,380.653,264.6Zm0,4.741a2.088,2.088,0,1,1,2.088-2.088A2.083,2.083,0,0,1,380.653,269.341Z" transform="translate(-378 -264.6)" fill="#F2F2F2"/>
                </g>
            </g>
        </svg>

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
