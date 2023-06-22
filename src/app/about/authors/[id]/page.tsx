import "server-only";
import Image from "next/image.js";
import style from "../../../../styles/About/author.module.css";
import PostsListPreload from "../../../../components/postsListPreload";
import { Suspense } from "react";
import GifLoader from "../../../../components/gif-loader";

export default async function Author({ params }) {
	const authorData = await fetch(`${process.env.API_BASE_URL}/authors/${params.id}`);
	const author = await authorData.json();

	const url = `${process.env.API_BASE_URL}/authors/posts/${params.id}`;

	return ( 
		<div>
			<section className={style.data}>
				<article className={style.picture}>
					<Image width={250} height={250} src={"/" + author.picture} alt={author.name}></Image>
				</article>
				<article className={style.info}>
					<h2 className={style.name}>
						{author.name}
					</h2>
					<h4 className={style.entry}>
						{author.gender}, {author.age}
					</h4>
					<h4 className={style.entry}>
						From: {author.city}
					</h4>
				</article>
			</section>
			<section className={style.about}>
				<h3 className="title">
					About me
				</h3>
				<p>
					{author.about}
				</p>
			</section>
			<section className={style.posts}>
				<h3 className="title">
					{"Author's posts"}
				</h3>
				<Suspense fallback={<GifLoader style={1} />}>
					<PostsListPreload className={style.postsList} url={url} />
				</Suspense>
			</section>
		</div>
	)
}