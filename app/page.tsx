import Preloader from '@/components/common/preloader'
import Landing from '@/components/sections/home/landing'
import Link from 'next/link'
import Showreel from '@/components/sections/home/showreel'

export default function Home() {
  return (
    <main>
      {/*<Preloader />*/}
      <Landing />
      <Showreel />
      <Link href="/cases/domslim">naar case</Link>
    </main>
  )
}
