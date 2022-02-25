const getBoxBoundaries = (gameBox: HTMLElement | null) => {
	if (gameBox) {
		const { top, left, right, bottom } = gameBox.getBoundingClientRect();
		return { top, left, right, bottom };
	}
	return { top: 0, left: 0, right: 0, bottom: 0 };
};

export const pickPositions = (numOfPositions: number, gameBox: HTMLElement | null) => {
	const { top, left, right, bottom } = getBoxBoundaries(gameBox);
	/// kinda wonky algorith I came up with to pick positions for words
	const start = {
		Y: (top + bottom) * 0.33,
		X: (left + right) * 0.4,
	};

	let res = [];
	let angle = Math.random() * Math.PI * 2;
	let r = 0;
	let z = 3;
	for (let i = 0; i < numOfPositions; i++) {
		angle += (1 / z < 0.22 ? 0.22 : 1 / z) * Math.PI * 2;
		if (i % z === 0) {
			r += 70;
			z += i;
		}
		const x = Math.cos(angle) * r;
		const y = Math.sin(angle) * r;

		const top = y + start.Y;
		const left = x + start.X;

		res.push({ top, left });
	}
	return res;
};
