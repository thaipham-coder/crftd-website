import Preloader from '@/components/common/preloader'
import Landing from '@/components/sections/home/landing'
import Link from 'next/link'
import Showreel from '@/components/sections/home/showreel'
import Cases from '@/components/sections/home/cases'

export default function Home() {
  return (
    <main>
      {/*<Preloader />*/}
      <Landing />
      <Showreel />
      {/*<Cases />*/}
    </main>
  )
}
