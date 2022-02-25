interface IAnswerResult {
	word: string;
	marked: boolean;
	shouldBeMarked: boolean;
}

export const countPoints = (answersResults: IAnswerResult[]): number => {
	return answersResults.reduce((pts: number, answerResult: IAnswerResult) => {
		if (answerResult.marked && answerResult.shouldBeMarked) return (pts += 2);
		if (!answerResult.marked && answerResult.shouldBeMarked) return (pts -= 1);
		if (answerResult.marked && !answerResult.shouldBeMarked) return (pts -= 1);
		return pts;
	}, 0);
};
