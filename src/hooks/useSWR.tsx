import useNativeSWR from "swr";

export default function useSWR(key, fetcher?, options?) {
	//@ts-ignore
	const fetchFunction = fetcher || ((...args) => fetch(...args).then(res => res.json()));

	return useNativeSWR(key, fetchFunction, options);
}