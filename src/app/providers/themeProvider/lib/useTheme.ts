import { useContext } from 'react'
import { Theme, THEME_KEY, ThemeContext } from 'app/providers/themeProvider/lib/ThemeContext'

interface IUseTheme {
  toggleTheme: () => void
  theme: Theme
}

export default function (): IUseTheme {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = (): void => {
    let newTheme: Theme

    switch (theme) {
      case Theme.DARK:
        newTheme = Theme.LIGHT
        break
      case Theme.LIGHT:
        newTheme = Theme.ORANGE
        break
      case Theme.ORANGE:
        newTheme = Theme.DARK
        break
      default:
        newTheme = Theme.LIGHT
    }

    setTheme?.(newTheme)

    document.body.className = newTheme

    localStorage.setItem(THEME_KEY, newTheme)
  }

  return { theme, toggleTheme }
}
