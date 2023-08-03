import Link from "next/link";
import Image from "next/image";
import ServerPagination from "../../../components/serverPagination";

import style from "./posts.module.css";
import messageIcon from "../../../icons/message.png";
import viewIcon from "../../../icons/eye.png";

export default async function Posts(props) {
	console.log(props)

	const params = props.params;
	const searchParams = props.searchParams;

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
								<div className={style.post__picture}>
									<Image src={post.picture} width={150} height={150} alt={post.title} />
								</div>
								<div className="m:pl-5">
									<h3 className={style.post__title}>{post.title}</h3>
									<p className={style.post__text}>{text}</p>
									<div className="flex items-center justify-between mt-5">
										<Link href={`/post/${post.id}`}>
											Learn more {"›"}
										</Link>
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
								</div>
							</li>
						)
					})
				}
			</ul>
			<ServerPagination page={page} total={total} basename={`/posts/${params.cat}`} />
		</div>
	)
}