import Preloader from '@/components/common/preloader'

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/*<Preloader />*/}
      <h1>Home</h1>
      <div data-type="link" className="ia h-20 w-20 bg-pink-500">
        hover me (link)
      </div>
      <div data-type="button" className="ia h-20 w-20 bg-green-500">
        hover me (button)
      </div>
    </main>
  )
}
