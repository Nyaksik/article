import { Theme, THEME_KEY, ThemeContext } from 'app/providers/themeProvider/lib/ThemeContext'
import { type FC, useMemo, useState } from 'react'

const defaultTheme = localStorage.getItem(THEME_KEY) as Theme || Theme.LIGHT

export const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme)

  const toggleTheme = (): void => {
    setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)
  }

  const defaultProps = useMemo(() => ({ theme, setTheme: toggleTheme }), [theme])

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )
}
