import Image, { StaticImageData } from 'next/image'

export default function FullImage(props: {
  src: StaticImageData
  alt: string
}) {
  return (
    <section className="aspect-video overflow-hidden">
      <Image src={props.src} alt={props.alt} data-speed="auto" />
    </section>
  )
}
