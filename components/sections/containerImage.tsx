import Image, { StaticImageData } from 'next/image'

export default function ContainerImage(props: {
  src: StaticImageData
  alt: string
  bg?: string
  padding?: string
}) {
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

  return (
    <section className={className}>
      <div className="container mx-auto px-8 md:px-4">
        <div className="aspect-video overflow-hidden">
          <Image src={props.src} alt={props.alt} data-speed="auto" />
        </div>
      </div>
    </section>
  )
}
