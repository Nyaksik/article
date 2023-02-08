import { useContext } from 'react'
import { Theme, THEME_KEY, ThemeContext } from 'app/providers/themeProvider/lib/ThemeContext'

interface IUseTheme {
  toggleTheme: () => void
  theme: Theme
}

export default function (): IUseTheme {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = (): void => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK

    if (setTheme) {
      setTheme(newTheme)
    }

    localStorage.setItem(THEME_KEY, newTheme)
  }

  return { theme, toggleTheme }
}
