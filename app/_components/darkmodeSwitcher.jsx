'use client'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

export const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <>
    {/* <label for='value'>Choose a Theme</label> */}
    <select className='pl-4 pr-1 text-center rounded-lg' value={theme} onChange={e => setTheme(e.target.value)}>
      <option value="system">System Theme</option>
      <option value="dark">Dark Theme</option>
      <option value="light">Light Theme</option>
    </select>
    </>
  )
}

//   function switchTheme() {
//     let newTheme;
//     switch (localStorage.theme) {
//       // use system colors (be it light or dark)
//       case 'system':
//         if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
//           newTheme = 'light';
//         } else {
//           newTheme = 'dark';
//         }
//         break;
//       // use dark mode
//       case 'dark':
//         newTheme = 'light';
//         break;
//       // use light mode
//       case 'light':
//         newTheme = 'dark';
//         break;
//       default:
//         newTheme = 'light'; // Default to light mode if no theme is set
//     }

//     // Update the theme in localStorage
//     localStorage.theme = newTheme;

//     // Apply the new theme to the document
//     document.documentElement.classList.toggle('dark', newTheme === 'dark');
//     document.documentElement.setAttribute('color-theme', newTheme);
//   }

//   return <button onClick={switchTheme}>Toggle Theme</button>;
// }
