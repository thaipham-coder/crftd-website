import { StaticImageData } from 'next/image'
import Image from 'next/image'
import Link from 'next/link'

export default function Case(props: {
  title: string
  intro: string
  category: string
  src: StaticImageData
  href: string
}) {
  return (
    <Link
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
        data-speed="auto"
        className="h-full w-full object-cover object-center md:h-auto md:w-[unset]"
      />
    </Link>
  )
}
