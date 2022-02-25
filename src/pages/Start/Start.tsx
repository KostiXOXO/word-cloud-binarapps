import React, { useContext, useEffect } from 'react';
import { GameContext } from 'context/GameContext';
import { useNavigate } from 'react-router-dom';
import Button from 'components/button/Button';
import './Start.scss';

const Start = () => {
	const navigate = useNavigate();
	const { username, setUsername } = useContext(GameContext);

	const handlePlay = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
		if (!username.length) return;
		navigate('/game');
	};

	return (
		<div className="startContainer">
			<div className="start">
				<div className="start__title">
					<h1>Wordcloud game</h1>
				</div>
				<form>
					<div className="start__searchbox">
						<input
							autoFocus={true}
							type="text"
							placeholder="Enter your nickname here..."
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>
					<div className="start__buttons">
						<Button text="play" onClick={(e) => handlePlay(e)} />
					</div>
				</form>
			</div>
		</div>
	);
};

export { Start };
