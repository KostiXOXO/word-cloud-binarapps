import { renderHook, act } from '@testing-library/react-hooks';

import useApi from '../useApi';

const mockRequestResolve = () => {
	return new Promise((resolve) => {
		resolve({ data: { name: 'Test' } });
	});
};

const mockRequestReject = () => {
	return new Promise((_, reject) => {
		reject({ error: 'Something went wrong' });
	});
};

describe('useApi hook', () => {
	test('should return data object with name: "Test" while resolved', async () => {
		const { result, waitForNextUpdate } = renderHook(() => useApi<{ name: string }>(mockRequestResolve));
		await waitForNextUpdate();
		const [, data] = result.current;
		expect(data).toEqual({ name: 'Test' });
	});

	test('should return "Something went wrong" string when rejected and data should be null', async () => {
		const { result, waitForNextUpdate } = renderHook(() => useApi<{ name: string }>(mockRequestReject));
		await waitForNextUpdate();
		const [, data, error] = result.current;
		expect(data).toEqual(null);
		expect(error).toEqual('Something went wrong');
	});
});
