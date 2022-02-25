import axios from 'axios';

const BASE_URL = '/mockApi.json';
const instance = axios.create({ baseURL: BASE_URL });

const get = <R>(url: string): Promise<R> => {
	return instance.get(url);
};

export { get };
