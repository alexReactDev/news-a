import Loader from "@/components/loader";
import MainLayout from "@/components/mainLayout";
import { useEffect, useState } from "react";

function Post({ post }) {
	const [comments, setComments] = useState(null);

	useEffect(() => {
		(async () => {
			const data = await fetch(`http://localhost:4500/posts`);
			const comments = await data.json();

			setComments(comments); 
		})();
	}, [])

	const creationDate = new Date(+post.created).toString().match(/.+?(?=GMT)/);

	function renderComments() {
		return (
			<>
			<h3>Comments</h3>
			<ul>
				{
					comments.map((comment) => {
						const creationDate = new Date(+comment.created).toString().match(/.+?(?=GMT)/);

						return (
							<li key={comment.id}>
								<h4>{comment.author}</h4>
								<p>{comment.text}</p>
								<p>Created: {creationDate}</p>
							</li>
						)
					})
				}
			</ul>
			<style jsx>{`
				h3 {
					margin: 25px 0px 15px 0px;
					font-size: 1.1rem;
					font-weight: bold;
				}
				h4 {
					font-weight: bold;
					margin-bottom: 8px;
				}
				ul {

				}
				li {
					border: solid #cdcdcd 1px;
					padding: 5px;
					list-style: none;
				}
				li:not(last-child) {
					margin-bottom: 20px;
				}
				p {
					margin-bottom: 10px;
				}
			`}</style>
			</>
		)
	}
	return (
		<MainLayout>
			<div className="default-body">
				<h2>
					{post.title}
				</h2>
				<p className="text">
					{post.text}
				</p>
				<h4 className="author">
					Author:
					<span>
						{post.author}
					</span>
				</h4>
				<p>Created: {creationDate}</p>
				<div>
					{
						comments ? renderComments() : <Loader />
					}
				</div>
			</div>
			<style jsx>{`
				h2 {
					margin-bottom: 15px;
					font-size: 1.3rem;
					text-transform: uppercase;
					font-weight: bold;
				}	
				.text, .author {
					margin-bottom: 10px;
				}

				.author span {
					margin-left: 8px;
					font-weight: 700;
				}
			`}</style>
		</MainLayout>
	)
}

export async function getStaticPaths() {
	const res = await fetch(`http://localhost:4500/posts`);
	const posts = await res.json();

	const paths = posts.map((post) => ({
		params: { id: post.id + "" }
	}));

	return {paths, fallback: false}
}

export async function getStaticProps({ params }) {
	const res = await fetch(`http://localhost:4500/posts/post/${params.id}`);
	const post = await res.json();

	return {
		props: {post}
	}
}

export default Post;