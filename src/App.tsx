import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {AboutPageAsync} from "./pages/aboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/mainPage/MainPage.async";
import {Suspense} from "react";
import useTheme from "./theme/useTheme";
import classNames from "./helpers/classNames";

const App = () => {
	const { theme, toggleTheme } = useTheme()

	return (
		<div className={classNames('app', {}, [theme])}>
			<button onClick={toggleTheme}>theme</button>

			<Link to={'/about'}>about</Link>
			<Link to={'/'}>main</Link>

			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path={'/about'} element={<AboutPageAsync/>}/>
					<Route path={'/'} element={<MainPageAsync/>}/>
				</Routes>
			</Suspense>
		</div>
	);
};

export default App;
