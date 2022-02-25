import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { EndScreen } from './EndScreen';
import { GameContext } from 'context/GameContext';

const providerProps = {
	username: 'testUser',
	setUsername: jest.fn(),
	points: 10,
	setPoints: jest.fn(),
};

const renderPage = () => {
	return render(
		<GameContext.Provider value={providerProps}>
			<MemoryRouter>
				<EndScreen />
			</MemoryRouter>
		</GameContext.Provider>
	);
};

describe('EndScreen Page', () => {
	it('should render paragraph with correct point count from context', () => {
		const { getByText } = renderPage();
		expect(getByText(/ points$/)).toHaveTextContent('10 points');
	});

	it('should render paragraph with correct username from context', () => {
		const { getByText } = renderPage();
		expect(getByText(/^Congratulations,/)).toHaveTextContent('Congratulations, testUser');
	});
});
