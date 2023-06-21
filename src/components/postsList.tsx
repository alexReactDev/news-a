import Link from "next/link";
import IPost from "../interfaces/IPost";
import cn from "classnames";

import style from "../styles/Components/posts.module.css";

interface IProps {
	posts: IPost[],
	className?: string
}

function PostsList({ posts, className }: IProps) {
	return (
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
	)
}

export default PostsList;