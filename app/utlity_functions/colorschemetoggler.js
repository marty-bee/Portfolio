// function to toggle the color scheme from dark to light
export function toggleColorScheme() {
    console.log(`switching colour theme`)

    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const root = document.documentElement;
  
    if (prefersDarkMode) {
      root.style.setProperty('--foreground-rgb', '0, 0, 0');
      root.style.setProperty('--background-start-rgb', '#D9D9D9');
      root.style.setProperty('--background-end-rgb', '#D9D9D9');
    } else {
      // Light mode variables
      root.style.setProperty('--foreground-rgb', '#D9D9D9');
      root.style.setProperty('--background-start-rgb', '0, 0, 0');
      root.style.setProperty('--background-end-rgb', '0, 0, 0');
    }
  }
  