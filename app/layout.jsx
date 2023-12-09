//css import
import './globals.css'

// font imports and set up
import { Quicksand } from 'next/font/google'
const quicksand = Quicksand({ subsets: ['latin'], variable: '--font-quicksand', });

// component imports
import Navbar from './_components/navbar'
import Footer from './_components/footer'

export const metadata = {
  title: 'Mart Software',
  description: 'Martyn Billings, Full Stack Developer Portfolio',
}

// darkmode component
import { Providers } from './utlity_functions/darkModeToggler';

export default function RootLayout({ children }) {
  return (
    <>
    <html>
    <body className={`bg-white text-zinc-900 dark:bg-zinc-900 dark:text-white `}>
    {/* next themes dark mode comp */}
    <Providers attribute='class'>
    <main className={`${quicksand.variable} font-sans flex flex-col pl-4 pr-4 md:pl-40 md:pr-40 w-full max-w-screen-2xl 2xl:m-auto dark:text-white`}>
      {/* commented out until it's ready */}
      < Navbar />
      {children}
      < Footer />
    </main>
    {/* next themes dark mode comp close */}
    </Providers>
    </body>
    </html>
    </>
  )
}
