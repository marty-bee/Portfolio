import Image from 'next/image'

// google font import
import { Quicksand } from 'next/font/google'

const quicksand = Quicksand({ subsets: ['latin'], variable: '--font-quicksand', });

// component imports
import Titler from './_components/title'

export default function Home() {
  return (
    <>
    <nav>Nav</nav>
    <main className={`${quicksand.variable} font-sans flex min-h-screen flex-col items-center justify-between p-24`}>
      < Titler />
    </main>
    <footer>footer</footer>
    </>
  )
}
