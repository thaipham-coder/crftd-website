import Landing from '@/components/sections/home/landing'
import Showreel from '@/components/sections/home/showreel'
import Cases from '@/components/sections/home/cases'
import About from '@/components/sections/home/about'

export default function Home() {
  return (
    <main>
      <Landing />
      <Showreel />
      <About />
      <Cases />
    </main>
  )
}
