import { get } from 'api/adapters';

export interface IGameApiRes {
	question: string;
	all_words: string[];
	good_words: string[];
}

const getGameData = async () => {
	return await get<IGameApiRes>('/');
};

export { getGameData };
