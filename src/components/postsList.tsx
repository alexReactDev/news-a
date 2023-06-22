'use client'

import Link from "next/link";
import cn from "classnames";

import style from "../styles/Components/posts.module.css";
import { useEffect, useState } from "react";
import Pagination from "./pagination";
import IPost from "../interfaces/IPost";

interface IProps {
	url: string,
	total: number,
	initialPosts: IPost[]
	className?: string
}

function PostsList({ url, initialPosts, total, className }: IProps) {
	const [posts, setPosts] = useState(initialPosts);
	const [page, setPage] = useState(1);

	console.log(page);
	console.log(url);

	useEffect(() => {
		(async () => {
			console.log("loading start");
			const res = await fetch(`${url}?page=${page}`);
			const loadedPosts = await res.json();
			console.log(loadedPosts);
			setPosts(loadedPosts.posts);
		})();
	}, [page, url])

	return (
		<>
			<ul className={cn(style.list, className)}>
				{
					posts.map((post) => {
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