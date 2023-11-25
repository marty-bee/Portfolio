// google font import
import { Quicksand } from 'next/font/google'
const quicksand = Quicksand({ subsets: ['latin'], variable: '--font-quicksand', });

// component imports
import Titler from './_components/title';
import Navbar from './_components/navbar';
import GetInTouch from './_components/footer';
import ProjectBox from './_components/projectBox';
import Toolbox from './_components/toolbox';
import AboutMe from './_components/aboutMe';

// data import
import { projectsData } from "./projectData/projectCardData.js";    // array of project objects
import { toolBoxData } from './projectData/toolBoxData' // array of tools

// home function is called 
export default function Home() {
  return (
    <>
    <main className={`${quicksand.variable} font-sans flex flex-col pl-40 pr-40`}>
    < Navbar />
    < Titler />
    < ProjectBox projectsArray={projectsData} />
    < Toolbox />
    < AboutMe />
    < GetInTouch />
    </main>
    </>
  )
}
