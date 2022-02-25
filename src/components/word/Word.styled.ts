import styled from 'styled-components';

export const WordStyled = styled('div')<{ animationTime: number; top: number; left: number; isChecked: boolean }>`
	--animationTime: ${(props) => `${props.animationTime}ms`};

	@keyframes animate-in-with-bounce {
		0% {
			transform: scale(0);
		}
		50% {
			transform: scale(0);
		}
		90% {
			transform: scale(110%);
		}
		100% {
			transform: scale(100%);
		}
	}
	position: absolute;
	top: ${(props) => `${props.top}px`};
	left: ${(props) => `${props.left}px`};
	padding: 0.5rem;
	animation: animate-in-with-bounce var(--animationTime) forwards;

	cursor: pointer;
	color: ${(props) => (props.isChecked ? `#1875d7` : `grey`)};
	font-weight: 700;
	font-weight: ${(props) => (props.isChecked ? 900 : 700)};

	&:after {
		position: relative;
		inset: 0;
		top: -0.5rem;
		right: -0.5rem;
	}

	&.good {
		color: green;
		&:after {
			content: '✔';
		}
	}
	&.bad {
		color: red;

		&:after {
			content: '✖';
		}
	}
`;
