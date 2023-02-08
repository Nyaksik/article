import classNames from 'shared/lib/classNames/classNames'
import { Theme, useTheme } from 'app/providers/themeProvider'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import { Button, ThemeButton } from 'shared/button/Button'
import { type FC } from 'react'

interface IThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: FC<IThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button theme={ThemeButton.CLEAR} className={classNames('', {}, [className || ''])} type={'button'}
            onClick={toggleTheme}>
      {theme === Theme.DARK ? <DarkIcon/> : <LightIcon/>}
    </Button>
  )
}
