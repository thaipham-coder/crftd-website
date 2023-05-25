import Image, {StaticImageData} from "next/image";

export default function FullImage(props: { src: StaticImageData, alt: string }) {
    return (
        <section className="overflow-hidden aspect-video">
            <Image src={props.src} alt={props.alt} data-speed="auto"/>
        </section>
    )
}