import { GameContextProvider } from 'context/GameContext';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './main.scss';

ReactDOM.render(
	<React.StrictMode>
		<GameContextProvider>
			<App />
		</GameContextProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
