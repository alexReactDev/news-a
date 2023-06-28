import Link from "next/link";

import style from "./posts.module.css";
import ServerPagination from "../../../components/serverPagination";

export default async function Posts({ params, searchParams }) {
	const res = await fetch(`${process.env.API_BASE_URL}/posts/${params.cat}?page=${searchParams.page || 1}`);
	const { posts, page, total } = await res.json();
	
	return (
		<div>
			<h2 className="title">
				Posts about: {params.cat}
			</h2>
			<ul>
				{
					posts.map((post) => {
						const text = post.text.slice(0, 150) + "...";
			
						return (
							<li key={post.id} className={style.post}>
								<h3 className={style.post__title}>{post.title}</h3>
								<p className={style.post__text}>{text}</p>
								<Link href={`/post/${post.id}`}>
									Learn more {"›"}
								</Link>
							</li>
						)
					})
				}
			</ul>
			<ServerPagination page={page} total={total} basename={`/posts/${params.cat}`} />
		</div>
	)
}