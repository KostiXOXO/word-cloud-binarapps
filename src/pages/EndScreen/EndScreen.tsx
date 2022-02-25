import { GameContext } from 'context/GameContext';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './EndScreen.scss';

const EndScreen = () => {
	const { username, points } = useContext(GameContext);

	return (
		<div className="endGameContainer">
			<div className="result">
				<p>{`Congratulations, ${username}!`}</p>
				<p>Your score:</p>
				<p>{`${points} points`}</p>
			</div>
			<div className="tryAgain">
				<p>
					Wanna{' '}
					<Link to={'/game'} data-testid="tryAgainLink">
						try again
					</Link>
					?
				</p>
			</div>
		</div>
	);
};

export { EndScreen };
