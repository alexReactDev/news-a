import axios from "axios";

export default function withCredentialsFetcher(method: string) {
	return async (...args) => (await axios[method](...args, { withCredentials: true })).data;
}