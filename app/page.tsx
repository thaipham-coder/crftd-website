import Preloader from '@/components/common/preloader'
import Landing from '@/components/sections/home/landing'
import Link from 'next/link'
import Showreel from '@/components/sections/home/showreel'
import Cases from '@/components/sections/home/cases'
import Case from "@/components/partials/case";
import mika from "@/public/images/BuiteNOM_Exterieur07_LR.jpg";

export default function Home() {
  return (
    <main>
      {/*<Preloader />*/}
      <Landing />
      <Showreel />
      {/*<Cases />*/}
        <div className="-mx-4 flex flex-wrap justify-center">
            <div className="flex w-full flex-col gap-16 px-4 md:w-10/12">
                <Case
                    title="Boddy"
                    intro="Small actions with a huge impact – a well thought-out website"
                    category="UI-design&nbsp;&nbsp;/&nbsp;&nbsp;UX-design"
                    src={mika}
                    href="/domslim"
                />
                <Case
                    title="Boddy"
                    intro="Made the impossible possible – an attactive re-branding"
                    category="branding&nbsp;&nbsp;/&nbsp;&nbsp;webdesign"
                    src={mika}
                    href="/domslim"
                />
                <Case
                    title="Boddy"
                    intro="Where automotive meets finesse – accessible app for employees"
                    category="app design&nbsp;&nbsp;/&nbsp;&nbsp;app development"
                    src={mika}
                    href="/domslim"
                />
            </div>
        </div>
    </main>
  )
}
