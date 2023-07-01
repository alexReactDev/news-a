'use client'

import { useState } from "react"
import useSWR from "swr";
import Error from "./error";
import Loader from "./loader";
import Pagination from "./pagination";

interface IProps {
	url: string,
	total: number,
	className?: string
}

export default function CommentsList({ url, total, className }: IProps) {
	const [page, setPage] = useState(1);

	const { data: comments, error } = useSWR(`${url}?page=${page}`, (...args) => fetch(...args).then(res => res.json()));

	console.log("COMMENTS");
	console.log(comments);

	if(error) return <Error />
	if(!comments) return <Loader />

	return (
		<>
		<ul className={`${className}`}>
			{
				comments.comments.map((comment) => {
					const created = new Date(+comment.created).toString().match(/.+?(?=\sGMT)/);

					return (
						<li key={comment.id} className="mb-4 p-2 bg-zinc-100">
							<h3 className="text-lg font-bold mb-1">
								{comment.author}
							</h3>
							<p className="mb-2">
								{comment.text}
							</p>
							<p className="text-sm text-gray-500">
								Created: {created}
							</p>
						</li>
					)
				})
			}
		</ul>
		<Pagination current={page} total={total} onChange={setPage} />
	</>
	)
}