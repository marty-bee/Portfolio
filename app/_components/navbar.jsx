'use client'

// import block
import { useScroller, scroller } from '../_customHooks/useScroll'
import Image from "next/image"
import Link from "next/link"
import { toggleColorScheme } from "../utlity_functions/colorschemetoggler";


export default function Navbar() {





    return (
        <>
            <nav className="flex font-sans text-right p-4 md:text-xl w-full justify-between sm:justify-end">

                <Link href={'/'} className="font-sans sm:mr-auto text-center">Home</Link>
                {/* <button className="font-sans pl-2 pr-2 sm:mr-20">Work</button> */}
                {/* <button className="font-sans pl-2 pr-2 sm:mr-20">About</button> */}
                {/* <button className="font-sans pl-2 pr-2 sm:mr-20">Contact</button> */}
                {/* <button className="font-sans pl-2 pr-2 sm:mr-20">CV</button> */}
                <Link href={'https://github.com/Mart510'} className="flex items-center pl-2 pr-2 font-sans sm:mr-20">GitHub</Link>
                <Link href={'https://www.linkedin.com/in/martbillings/'} className="flex items-center pl-2 pr-2 font-sans">LinkedIn</Link>
                {/* button to toggle dark/light theme */}
                {/* <button className='font-sans sm:pr-4'>Theme</button> */}
            </nav>
        </>
    )
}
