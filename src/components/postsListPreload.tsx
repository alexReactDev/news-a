import PostsList from "./postsList";
import SWRConfig from "../misc/ClientSWRConfig";

export default async function PostsListPreload(props) {
	const res = await fetch(`${props.url}`, {
		next: {
			revalidate: 60
		}
	});

	const initialPosts = await res.json();
	const fallback = {
		[`${props.url}?page=1`]: initialPosts
	}

	return (
		<SWRConfig value={{ fallback, dedupingInterval: 10000 }}>
			<PostsList initialPosts={initialPosts.posts} total={initialPosts.total} {...props} />
		</SWRConfig>
	)
}