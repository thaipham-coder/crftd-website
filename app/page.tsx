import Landing from '@/components/sections/home/landing'
import Showreel from '@/components/sections/home/showreel'
import Cases from '@/components/sections/home/cases'
import Disclaimer from '@/components/common/disclaimer'

export default function Home() {
  return (
    <main>
      {/*<Preloader />*/}
      <Disclaimer />
      <Landing />
      <Showreel />
      <Cases />
    </main>
  )
}
