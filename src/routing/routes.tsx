import React from 'react';
import { EndScreen, Game, Start } from 'pages';
interface IRoute {
	path: string;
	exact: boolean;
	component: JSX.Element;
}

const routes: IRoute[] = [
	{
		path: '/',
		exact: true,
		component: <Start />,
	},
	{
		path: '/game',
		exact: true,
		component: <Game />,
	},
	{
		path: '/end',
		exact: true,
		component: <EndScreen />,
	},
];

export { routes };
