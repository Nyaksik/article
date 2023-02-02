import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {Suspense} from "react";
import classNames from "shared/lib/classNames";
import {useTheme} from "app/providers/themeProvider";
import {AboutPage} from "pages/aboutPage";
import {MainPage} from "pages/mainPage";

const App = () => {
	const { theme, toggleTheme } = useTheme()

	return (
		<div className={classNames('app', {}, [theme])}>
			<button onClick={toggleTheme}>theme</button>

			<Link to={'/about'}>about</Link>
			<Link to={'/'}>main</Link>

			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path={'/about'} element={<AboutPage/>}/>
					<Route path={'/'} element={<MainPage/>}/>
				</Routes>
			</Suspense>
		</div>
	);
};

export default App;
