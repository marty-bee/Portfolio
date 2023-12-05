'use client'
import { toggleColorScheme } from "../utlity_functions/colorschemetoggler";

export default function Navbar() {


    return (
        <>
            <nav className="flex font-sans text-right p-4 md:text-xl w-full justify-between sm:justify-end">
                {/* home link */}
                {/* go to home and scroll to work */}
                {/* go to home and scroll to about */}
                {/* go to home and scroll to contact form */}
                {/* go to CV page */}
                {/* go to linkedIn page */}
                {/* toggle between light and dark mode */}
                <button className="font-sans sm:pr-20">Work</button>
                <button className="font-sans sm:pr-20">About</button>
                <button className="font-sans sm:pr-20">Contact</button>
                <button className="font-sans sm:pr-20">CV</button>
                <button id='linkedInProfile'></button>
                {/* button to toggle dark/light theme */}
                <button className='font-sans sm:pr-4' onClick={toggleColorScheme}>Theme</button>
            </nav>
        </>
    )
}
