import { useState, useEffect } from 'react';

const useApi = <D>(apiFunction: Function): [boolean, D | null, string | null] => {
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState<D | null>(null);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		apiFunction()
			.then(({ data }: { data: D }) => {
				setData(data);
				setError(null);
				setIsLoading(false);
			})
			.catch(() => {
				setError('Something went wrong');
				setIsLoading(false);
			});
	}, [apiFunction]);

	return [isLoading, data, error];
};

export default useApi;
