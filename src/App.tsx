import React, { useContext } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { routes } from 'routing/routes';
import { GameContext } from 'context/GameContext';
import './App.scss';

const App = () => {
	const { username } = useContext(GameContext);

	return (
		<div className="appContainer">
			<div className="app__body">
				<BrowserRouter>
					<Routes>
						{routes.map(({ path, component }) => {
							if (username === '' && path !== '/') {
								return <Route key={path} element={<Navigate to="/" />} />;
							}
							return <Route path={path} element={component} key={path} />;
						})}
						<Route path="*" element={<Navigate to="/" />} />
					</Routes>
				</BrowserRouter>
			</div>
		</div>
	);
};

export default App;
