import Image from 'next/image'

// google font import
import { Quicksand } from 'next/font/google'

const quicksand = Quicksand({ subsets: ['latin'], variable: '--font-quicksand', });

// component imports
import Titler from './_components/title'
import Navbar from './_components/navbar';

export default function Home() {
  return (
    <>
    <main className={`${quicksand.variable} font-sans`}>
    < Navbar />
    < Titler />
    </main>
    <footer>footer</footer>
    </>
  )
}
