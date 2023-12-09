// import block
import Link from "next/link"
import ThemeToggler from './themeToggler';
import { ThemeSwitch } from "./darkmodeSwitcher";

export default function Navbar({ initialTheme }) {
    return (
        <>
            <nav className="flex font-sans text-right p-4 md:text-xl w-full justify-between sm:justify-end">

                <Link href={'/'} className="font-sans sm:mr-auto text-center hover:scale-105">mart.codes</Link>
                {/* <button className="font-sans pl-2 pr-2 sm:mr-20 hover:scale-105">Work</button> */}
                {/* <button className="font-sans pl-2 pr-2 sm:mr-20 hover:scale-105">About</button> */}
                {/* <button className="font-sans pl-2 pr-2 sm:mr-20 hover:scale-105">Contact</button> */}
                {/* <button className="font-sans pl-2 pr-2 sm:mr-20 hover:scale-105">CV</button> */}
                <Link href={'https://github.com/Mart510'} className="flex items-center pl-2 pr-2 font-sans sm:mr-20 hover:scale-105">GitHub</Link>
                <Link href={'https://www.linkedin.com/in/martbillings/'} className="flex items-center pl-2 pr-2 
                sm:mr-20
                font-sans hover:scale-105">LinkedIn</Link>
                {/* button to toggle dark/light theme */}
                {/* <button className='font-sans sm:pr-4'>Theme</button> */}
                <ThemeSwitch/>
            </nav>
        </>
    )
}
