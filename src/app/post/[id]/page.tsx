import Image from "next/image";

import messageIcon from "../../../icons/message.png";
import viewIcon from "../../../icons/eye.png";
import Link from "next/link";
import CommentsList from "../../../components/commentsList";
import { Suspense } from "react";
import GifLoader from "../../../components/gif-loader";
import CommentsListPreload from "../../../components/commentsListPreload";

export default async function Post({ params }) {
	const res = await fetch(`${process.env.API_BASE_URL}/posts/post/${params.id}`);
	const post = await res.json();

	const res2 = await fetch(`${process.env.API_BASE_URL}/authors/${post.author}`);
	const author = await res2.json();

	const created = new Date(+post.created).toString().match(/.+?(?=\sGMT)/);

	return (
		<article>
			<div className="flex justify-center mb-5">
				<img src={post.picture} alt={post.title} className="max-h-96" />
			</div>
			<h2 className="title">
				{post.title}
			</h2>
			<p className="mb-5">
				{post.text}
			</p>
			<div className="flex justify-between">
				<p className="mb-4">
					Author:
					<Link href={`/about/authors/${author.id}`} className="hover:underline ml-1.5">
						{author.name}
					</Link>
				</p>
				<p>Created: {created}</p>
			</div>
			<div className="flex justify-end">
				<ul className="flex space-x-4">
					<li className="flex items-center space-x-1">
						<Image src={viewIcon} width={16} height={16} alt="views" />
						<p>{post.views_count}</p>
					</li>
					<li className="flex items-center space-x-1">
						<Image src={messageIcon} width={16} height={16} alt="message" />
						<p>{post.comments_count}</p>
					</li>
				</ul>
			</div>
			<div>
				<Suspense fallback={<GifLoader style={1} />}>
					<CommentsListPreload url={`${process.env.API_BASE_URL}/comments/${post.id}`} className="my-3 p-2 border border-solid border-gray-200" />
				</Suspense>
			</div>
		</article>
	)
}