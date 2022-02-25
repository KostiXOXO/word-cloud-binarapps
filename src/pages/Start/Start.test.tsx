import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { Start } from './Start';

describe('Start Page', () => {
	const { getByText, getByPlaceholderText } = render(
		<MemoryRouter>
			<Start />
		</MemoryRouter>
	);

	it('elements renders correctly', () => {
		const heading = getByText('Wordcloud game');
		const input = getByPlaceholderText('Enter your nickname here...');
		const button = getByText('play');
		const pageElements = [heading, input, button];
		pageElements.forEach((elem) => expect(elem).toBeInTheDocument());
	});
});
