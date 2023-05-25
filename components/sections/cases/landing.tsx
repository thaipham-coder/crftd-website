export default function Landing() {
  return (
    <section className="flex min-h-[50vh] items-end bg-black pb-16 text-crftd-white md:pb-24 xl:pb-32">
      <div className="container mx-auto px-8 md:px-4">
        <div className="-mx-4 flex flex-wrap items-end justify-center gap-8 md:gap-0">
          <div className="w-full px-4 md:w-5/12">
            <h1 className="font-archia text-6xl lowercase">
              Small actions with a huge impact
            </h1>
          </div>
          <div className="hidden w-2/12 px-4 md:block">
            <hr className="border-1 grow border-crftd-white" />
          </div>
          <div className="flex w-full px-4 md:w-3/12 md:justify-end">
            <p>UX design / UI design / webdevelopment</p>
          </div>
        </div>
      </div>
    </section>
  )
}
