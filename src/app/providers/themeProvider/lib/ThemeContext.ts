import { createContext } from 'react'

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}

export interface IThemeContextProps {
  theme: Theme
  setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<IThemeContextProps>({ theme: Theme.LIGHT })

export const THEME_KEY = 'theme'
