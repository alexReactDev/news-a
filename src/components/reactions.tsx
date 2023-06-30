"use client"

import useSWR from "../hooks/useSWR";
import axios from "axios";
import withCredentialsFetcher from "../utils/withCredentialsFetcher";

interface IProps {
	url: string,
	postId: number,
	className?: string
}

export default function Reactions({ className, url, postId }: IProps) {
	const { data = {}, error, mutate } = useSWR(`${url}/${postId}`, withCredentialsFetcher("get"));

	console.log(data);

	if(error) return <p>Failed to load reactions :(</p>

	async function clickHandler(reaction: string) {
		if(reaction === data.my_reaction) {
			await axios.delete(`${url}/${reaction}/${postId}`, { withCredentials: true});
		}
		else {
			await axios.post(`${url}/${reaction}/${postId}`, null, { withCredentials: true});
		}

		mutate();
	}

	return (
		<div className={className}>
			<ul className="flex space-x-5">
				<li className={`p-1.5 pl-0.5 rounded-md duration-100 ${data.my_reaction === "upvote" ? "bg-gray-600 text-white" : ""}`}>
					<span 
						className="mr-0.5 p-1 cursor-pointer select-none duration-200 rounded hover:bg-gray-200 active:bg-gray-400 active:relative active:top-1"
						onClick={() => clickHandler("upvote")}
					>
						👍
					</span>
					{data.upvote}
				</li>
				<li className={`p-1.5 pl-0.5 rounded-md duration-100 ${data.my_reaction === "downvote" ? "bg-gray-600 text-white" : ""}`}>
					<span 
						className="mr-0.5 p-1 cursor-pointer select-none duration-200 rounded hover:bg-gray-200 active:bg-gray-400 active:relative active:top-1"
						onClick={() => clickHandler("downvote")}
					>
						👎
					</span>
					{data.downvote}
				</li>
				<li className={`p-1.5 pl-0.5 rounded-md duration-100 ${data.my_reaction === "wow" ? "bg-gray-600 text-white" : ""}`}>
					<span 
						className="mr-0.5 p-1 cursor-pointer select-none duration-200 rounded hover:bg-gray-200 active:bg-gray-400 active:relative active:top-1"
						onClick={() => clickHandler("wow")}
					>
						😱
					</span>
					{data.wow}
				</li>
			</ul>
		</div>
	)
}