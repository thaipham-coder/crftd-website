export default function Context() {
  return (
    <section className="bg-black pb-12 pt-12 text-crftd-white md:pb-24 md:pt-24">
      <div className="container mx-auto px-8 md:px-4">
        <div className="-mx-4 flex flex-wrap gap-y-8">
          <div className="hidden w-1/12 md:block" />
          <div className="w-6/12 px-4 md:w-2/12">
            <p className="mb-1 lowercase text-crftd-gray">Customer</p>
            <h3 className="font-archia text-3xl lowercase">Boddy</h3>
          </div>
          <div className="w-6/12 px-4 md:w-3/12">
            <p className="mb-1 lowercase text-crftd-gray">Year</p>
            <h3 className="font-archia text-3xl lowercase">2023</h3>
          </div>
          <div className="w-full px-4 md:w-4/12">
            <p className="font-bold lowercase">Uitdaging</p>
            <p className="mb-8">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesq.
            </p>
            <p className="font-bold lowercase">Aanpak</p>
            <p>
              Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
              arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
              justo. Nullam dictum felis eu pede mollis pretium. Integer
              tincidunt.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
