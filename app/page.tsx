import Preloader from '@/components/common/preloader'
import Landing from '@/components/sections/home/landing'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      {/*<Preloader />*/}
      <Landing />
      <Link href="/cases/domslim">naar case</Link>
    </main>
  )
}
