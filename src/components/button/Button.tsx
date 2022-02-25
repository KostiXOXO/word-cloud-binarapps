import React from 'react';
import './Button.scss';

interface IProps {
	text: string;
	onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button = ({ text, onClick, ...props }: IProps) => {
	return (
		<button className="btnContainer" onClick={onClick} {...props}>
			{text}
		</button>
	);
};

export default Button;
