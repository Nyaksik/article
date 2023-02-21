import { Theme, THEME_KEY, ThemeContext } from 'app/providers/themeProvider/lib/ThemeContext'
import { type FC, useCallback, useMemo, useState } from 'react'

const defaultTheme = localStorage.getItem(THEME_KEY) as Theme || Theme.LIGHT

interface IThemeProviderProps {
  initialTheme?: Theme
}

export const ThemeProvider: FC<IThemeProviderProps> = (props) => {
  const {
    children,
    initialTheme
  } = props

  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme)

  const toggleTheme = useCallback((): void => {
    setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)
  }, [theme])

  const defaultProps = useMemo(() => ({
    theme,
    setTheme: toggleTheme
  }), [theme, toggleTheme])

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )
}
