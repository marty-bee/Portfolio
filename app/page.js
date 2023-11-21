import Image from 'next/image'

// component imports
import Titler from './_components/title'

export default function Home() {
  return (
    <>
    <nav>Nav</nav>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    < Titler />
    </main>
    <footer>footer</footer>
    </>
  )
}
