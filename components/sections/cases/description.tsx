export default function Description(props: { bg?: string, padding?: string }) {
    let bg = ''
    let padding = ''

    switch (props.bg) {
        case 'dark':
            bg = 'bg-black';
            break;
        case 'light':
            bg = 'bg-crftd-white';
            break;
        default:
            bg = '';
            break;
    }

    switch (props.padding) {
        case 'pt':
            padding = 'pt-12 md:pt-24';
            break;
        case 'pb':
            padding = 'pb-12 md:pb-24';
            break;
        case 'py':
            padding = 'py-12 md:py-24';
            break;
        default:
            padding = '';
            break;
    }

    let className = `${bg} ${padding}`;

    return (
        <section className={className}>
            <div className="container mx-auto px-8 md:px-4">
                <div className="-mx-4 flex flex-wrap justify-center">
                    <div className="w-full px-4 md:w-10/12">
                        <h3 className="font-archia text-3xl lowercase leading-tight md:leading-tight md:text-6xl">
                            with this fictional, hybrid body care brand, we show a conceivable
                            evolution from consumer brands to platforms that bring together
                            different products and services under one name.
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    )
}