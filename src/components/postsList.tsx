'use client'

import Link from "next/link";
import cn from "classnames";

import style from "../styles/Components/posts.module.css";
import { useEffect, useState } from "react";
import Pagination from "./pagination";
import IPost from "../interfaces/IPost";
import useSWR from "swr";
import Loader from "./loader";

interface IProps {
	url: string,
	total: number,
	initialPosts: IPost[]
	className?: string
}

function PostsList({ url, initialPosts, total, className }: IProps) {
	const [page, setPage] = useState(1);

	const { data: posts, error, isLoading } = useSWR(`${url}?page=${page}`, (...args) => fetch(...args).then(res => res.json()));

	console.log(posts);
	console.log(isLoading);
	console.log(error);


/*	useEffect(() => {
		(async () => {
			const res = await fetch(`${url}?page=${page}`);
			const loadedPosts = await res.json();
			setPosts(loadedPosts.posts);
		})();
	}, [page, url])
*/

	if(!posts) return <Loader />
	if(error) return <p>Error</p>
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