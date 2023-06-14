import MainLayout from "@/components/mainLayout";
import Link from "next/link";
import { useRouter } from "next/router"

export default function Post({copyright, posts}) {
	const router = useRouter();

	function returnPosts() {
		return (
			<>
			{
				posts.map((post) => {
					const text = post.text.slice(0, 150) + "...";
		
					return (
						<li key={post.id} className="post">
							<h3>{post.title}</h3>
							<p>{text}</p>
							<Link href={`/post/${post.id}`}>
								Learn more
							</Link>
						</li>
					)
				})
			}
			<style jsx>{`
				li {
					margin-bottom: 25px;
					border: solid #cccccc 1px;
					padding: 15px;
					list-style: none;
					background-color: #f9f9f9;
					box-shadow: -1px 1px 2px -0.5px #cccccc;
				}
				h3 {
					margin-bottom: 7.5px;
					text-transform: uppercase;
					font-weight: bold;
				}
				p {
					margin-bottom: 5px;
				}
			`}</style>
			</>
		)
	}

	return (
		<MainLayout title="News A+ | Posts" copyright={copyright}>
			<div className="default-body">
				<h1 className="title">
					This is page about: {router.query.cat}
				</h1>
				<ul>
					{returnPosts()}
				</ul>
			</div>
		</MainLayout>
	)
}

Post.getInitialProps = async ({ query }) => {
	let resp;
	
	if(query.cat === "all") {
		resp = await fetch("http://localhost:4500/posts");
	}
	else {
		resp = await fetch(`http://localhost:4500/posts/${query.cat}`);
	}

	const posts = await resp.json();

	return {posts};
}