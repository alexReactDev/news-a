'use client'

import Link from "next/link";
import cn from "classnames";

import style from "../styles/Components/posts.module.css";
import { useState } from "react";
import Pagination from "./pagination";
import useSWR from "swr";
import Loader from "./loader";
import Error from "./error";

interface IProps {
	url: string,
	total: number,
	className?: string
}

function PostsList({ url, total, className }: IProps) {
	const [page, setPage] = useState(1);

	const { data: posts, error } = useSWR(`${url}?page=${page}`, (...args) => fetch(...args).then(res => res.json()));

	if(!posts) return <Loader />
	if(error) return <Error />
	return (
		<>
			<ul className={cn(style.list, className)}>
				{
					posts.posts.map((post) => {
						const text = post.text.slice(0, 150) + "...";
				
						return (
							<li key={post.id} className={style.post}>
								<h3 className={style.title}>{post.title}</h3>
								<p className={style.text}>{text}</p>
								<Link href={`/post/${post.id}`}>
									Learn more
								</Link>
							</li>
						)
					})
				}
			</ul>
			<Pagination total={total} onChange={setPage} />
		</>
	)
}

export default PostsList;