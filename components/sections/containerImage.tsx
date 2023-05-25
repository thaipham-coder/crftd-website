import Image, {StaticImageData} from "next/image";

export default function ContainerImage(props: { src: StaticImageData, alt: string }) {
    return (
        <section>
            <div className="container mx-auto px-8 md:px-4">
                <div className="overflow-hidden aspect-video">
            <Image src={props.src} alt={props.alt} data-speed="auto"/>
                </div>
            </div>
        </section>
    )
}