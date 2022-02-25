import { TooltipState } from 'pages/Game/Game';
import React, { useState } from 'react';
import { WordStyled } from './Word.styled';

interface IProps {
	top: number;
	left: number;
	animationTime: number;
	tooltipState: TooltipState;
	children: string;
	disabled?: boolean;
}

const assignClass = (tooltipState: TooltipState): string => {
	if (tooltipState === TooltipState.Good) return 'good';
	if (tooltipState === TooltipState.Bad) return 'bad';
	return 'hidden';
};

const Word = ({ top, left, animationTime, tooltipState, children, disabled }: IProps) => {
	const [isChecked, setIsChecked] = useState<boolean>(false);

	return (
		<div>
			<WordStyled
				top={top}
				left={left}
				animationTime={animationTime}
				isChecked={isChecked}
				onClick={!disabled ? () => setIsChecked((isChecked) => !isChecked) : undefined}
				className={assignClass(tooltipState)}
			>
				{children}
			</WordStyled>
		</div>
	);
};

export default Word;
