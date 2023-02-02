import {Theme, THEME_KEY, ThemeContext} from "./ThemeContext";
import {useContext} from "react";

interface IUseTheme {
	toggleTheme: () => void
	theme: Theme
}

export default function (): IUseTheme {
	const { theme, setTheme } = useContext(ThemeContext)

	const toggleTheme = () => {
		const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK

		setTheme(newTheme)

		localStorage.setItem(THEME_KEY, newTheme)
	}

	return { theme, toggleTheme }
}
