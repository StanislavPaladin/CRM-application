import PropTypes from "prop-types";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { getLocalStorage } from "@utils/localStorage";
import routesConfig from "@routes/routesConfig";
import { changeCSSVariables } from "@services/changeCSSVariables";
import Sidebar from "@components/Sidebar";

// rc-tooltip-styles
import 'rc-tooltip/assets/bootstrap_white.css';
// module styles
import styles from "./App.module.css";


const App = () => {
	const theme = getLocalStorage("theme");
	useEffect(() => {
		changeCSSVariables(theme);
	}, []);
	return (
		<div className={styles.container}>
			<BrowserRouter>
				
				<Sidebar />
				<Routes>
					{routesConfig.map((route, index) => (
						<Route
							path={route.path}
							key={index}
							element={route.element}
							exact={route.exact}
						/>
					))}
				</Routes>
			</BrowserRouter>
		</div>
	);
};

App.propTypes = {
	propName: PropTypes.string,
};

export default App;
