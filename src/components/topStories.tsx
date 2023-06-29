import Image from "next/image";
import Link from "next/link";

interface IProps {
	className?: string
}

export default async function TopStories({ className }: IProps) {
	const res = await fetch(`${process.env.API_BASE_URL}/collections/top`);
	const posts = (await res.json()).posts;

	return (
		<div className={className}>
			<h3 className="title">
				Top stories
			</h3>
			<ul>
				{
					posts.map((post) => {
						const text = post.text.slice(0, 27) + "...";

						return (
							<li key={post.id} className="flex [&:not(:last-child)]:mb-3 border border-solid border-gray-200 bg-barely-visible-grey">
								<div className="w-1/5 flex">
									<Image src={post.picture} width={75} height={75} alt={post.title} className="border border-solid border-gray-300 object-cover"></Image>
								</div>
								<div className="w-4/5 pl-3 py-2">
									<Link href={`/post/${post.id}`}>
										<h4 className="font-bold mb-2">
											{post.title}
										</h4>
									</Link>
									<p>
										{text}
									</p>
								</div>
							</li>
						)
					})
				}
			</ul>
		</div>
	)
}