import Image from 'next/image'

// google font import
import { Quicksand } from 'next/font/google'

const quicksand = Quicksand({ subsets: ['latin'], variable: '--font-quicksand', });

// component imports
import Titler from './_components/title';
import Navbar from './_components/navbar';
import Footer from './_components/footer';
import ProjectBox from './_components/projectBox';

// data import
import { projectsData } from "./projectData/projectCardData.js";    // array of project objects

export default function Home() {
  return (
    <>
    <main className={`${quicksand.variable} font-sans`}>
    < Navbar />
    < Titler />
    < ProjectBox projectsArray={projectsData} />
    {/* < Toolbox /> */}
    {/* < AboutMe /> */}
    < Footer />
    </main>
    </>
  )
}
