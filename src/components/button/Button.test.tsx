import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';

import Button from './Button';

it('Should not fail any accessibility tests', async () => {
	const { container } = render(<Button text="test text" onClick={jest.fn()} />);
	expect(await axe(container)).toHaveNoViolations();
});

it('Should render text passed as prop correctly', () => {
	render(<Button text="test text" onClick={jest.fn()} />);
	const elem = screen.getByText('test text');
	expect(elem).toBeInTheDocument();
});

it('Should render text passed as prop correctly', () => {
	const mockFn = jest.fn();
	render(<Button text="test text" onClick={mockFn} />);
	const elem = screen.getByText('test text');
	fireEvent.click(elem);
	expect(mockFn).toBeCalledTimes(1);
});
