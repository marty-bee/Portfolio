'use client'

//import block
import { useEffect, useState } from "react";


export default function ThemeToggler() {
    // setting state
    const [darkMode, setDarkMode] = useState(true)
    
    // use effect to run when component mounts, so if user uses darkmode it defaults to dark mode for them
    useEffect(() => {
        // gets the theme from the users local storage
        const theme = localStorage.getItem('theme')
        // log intial theme
        console.log('intial theme:', theme)
        if (theme === 'dark') setDarkMode(true)
        // no dependency array only runs when mounts
    }, [])

    // Use effect runs when ever our state changes
    useEffect(() => {
        console.log('theme switched') // debug logger
        // if it's dark mode
        if (darkMode) {
            // adds dark class to the html root element
            document.documentElement.classList.add('dark')
            // store the theme setting inside users local storage
            localStorage.setItem('theme', 'dark')
        } else {
            // if not dark mode (light mode)
            // remove dark class to the html root element
            document.documentElement.classList.remove('dark')
            // store the theme setting inside users local storage
            localStorage.setItem('theme', 'light')
        }
    }, [darkMode])

    return (
        <button onClick={() => setDarkMode(!darkMode)} className="hover:scale-105">Color mode</button>
    )
}