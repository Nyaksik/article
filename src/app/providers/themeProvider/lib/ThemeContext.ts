import { createContext } from 'react'

export enum Theme {
  LIGHT = 'app_light_theme',
  DARK = 'app_dark_theme',
  ORANGE = 'app_orange_theme'
}

export interface IThemeContextProps {
  theme: Theme
  setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<IThemeContextProps>({ theme: Theme.LIGHT })

export const THEME_KEY = 'theme'
