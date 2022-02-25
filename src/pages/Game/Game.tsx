import React, { useContext, useEffect, useState } from 'react';
import { GameContext } from 'context/GameContext';
import Button from 'components/button/Button';
import Spinner from 'components/spinner/Spinner';
import { useNavigate } from 'react-router-dom';
import { getRandomIntBetween } from 'utils/helpers/getRandomIntBetween';
import useApi from 'utils/hooks/useApi';
import Word from 'components/word/Word';
import { countPoints } from 'pages/Game/functions/countPoints';
import { pickPositions } from 'pages/Game/functions/pickPositions';
import { getGameData, IGameApiRes } from 'api/gameApi';
import './Game.scss';
import useWindowDimensions from 'utils/hooks/useWindowDimension';

export enum TooltipState {
	Hidden,
	Good,
	Bad,
}

interface IApiRes {
	question: string;
	all_words: string[];
	good_words: string[];
}

interface IAnswer {
	word: string;
	marked: boolean;
	shouldBeMarked: boolean;
}

const Game = () => {
	const navigate = useNavigate();
	const { setPoints } = useContext(GameContext);
	const { winWidth, winHeight } = useWindowDimensions();
	const [, data] = useApi<IGameApiRes[]>(getGameData);

	const [gameData, setGameData] = useState<IApiRes | null>(null);
	const [answers, setAnswers] = useState<IAnswer[]>([]);
	const [positions, setPositions] = useState<{ top: number; left: number }[]>([]);

	const [isGameFinished, setIsGameFinished] = useState<boolean>(false);

	useEffect(() => {
		if (!data) return;
		const gameData = data[getRandomIntBetween(0, data.length - 1)];
		setGameData(gameData);
	}, [data]);

	useEffect(() => {
		if (!gameData) return;

		const answers = gameData.all_words.map((word: string) => {
			return {
				word,
				marked: false,
				shouldBeMarked: gameData.good_words.includes(word),
			};
		});
		setAnswers(answers);
	}, [gameData]);

	useEffect(() => {
		if (!gameData) return;
		const gameBox = document.getElementById('gbx');
		const positions = pickPositions(gameData.all_words.length, gameBox);
		setPositions(positions);
	}, [gameData, winHeight, winWidth]);

	const assignTooltipState = (marked: boolean, shouldBeMarked: boolean): TooltipState => {
		if (!isGameFinished || !marked) return TooltipState.Hidden;
		return marked === shouldBeMarked ? TooltipState.Good : TooltipState.Bad;
	};

	const handleWordClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (isGameFinished) return;

		const currentWord = e.currentTarget.innerText;
		const newAnswerDataArr = answers.map((wordData) =>
			wordData.word === currentWord ? { ...wordData, marked: !wordData.marked } : wordData
		);

		setAnswers(newAnswerDataArr);
	};

	const handleCheckAnswers = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		const points = countPoints(answers);
		setPoints(points);
		setIsGameFinished(true);
	};

	const handleEndGame = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		if (isGameFinished) return navigate('/end');
	};

	return !gameData ? (
		<Spinner />
	) : (
		<div className="gameContainer" data-testid="gameContainer">
			<div className="game">
				<div className="game__question">{gameData.question}</div>
				<div className="game__box" id="gbx">
					{answers.map(({ word, marked, shouldBeMarked }, key) => {
						return (
							<span onClick={handleWordClick} key={`${key}-${word}`} data-testid={`item-${key}`}>
								<Word
									top={positions[key].top}
									left={positions[key].left}
									animationTime={1000 + key * 300}
									tooltipState={assignTooltipState(marked, shouldBeMarked)}
									disabled={isGameFinished}
								>
									{word}
								</Word>
							</span>
						);
					})}
				</div>
				<div className="game__button">
					{!isGameFinished && <Button text="check answers" onClick={(e) => handleCheckAnswers(e)} />}
					{isGameFinished && <Button text="finish game" onClick={(e) => handleEndGame(e)} />}
				</div>
			</div>
		</div>
	);
};

export { Game };
