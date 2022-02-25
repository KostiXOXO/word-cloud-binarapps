import React, { createContext, useState } from 'react';

type TGameContext = {
	username: string;
	setUsername: (name: string) => void;
	points: number;
	setPoints: (points: number) => void;
};

export const GameContext = createContext<TGameContext>({
	username: '',
	setUsername: () => {},
	points: 0,
	setPoints: () => {},
});

export const GameContextProvider = ({ children }: { children: JSX.Element }) => {
	const [username, setUsername] = useState('');
	const [points, setPoints] = useState(0);

	return <GameContext.Provider value={{ username, setUsername, points, setPoints }}>{children}</GameContext.Provider>;
};
