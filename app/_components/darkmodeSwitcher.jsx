// dark mode switcher import
// functions to toggle the color scheme from dark to light

export default function ThemeSwitch() {

  function switchTheme() {
    let newTheme;
    switch (localStorage.theme) {
      // use system colors (be it light or dark)
      case 'system':
        if (window.matchMedia('(prefers-color-scheme: dark').matches) {
          newTheme = 'light';
        } else {
          newTheme = 'dark';
        }
        break;
      // use dark mode
      case 'dark':
        newTheme = 'light';
        break;
      // use light mode
      case 'light':
        newTheme = 'dark';
        break;
      default:
        newTheme = 'light'; // Default to light mode if no theme is set
    }

    // Update the theme in localStorage
    localStorage.theme = newTheme;

    // Apply the new theme to the document
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    document.documentElement.setAttribute('color-theme', newTheme);
  }

  return <button onClick={switchTheme}>Toggle Theme</button>;
}
