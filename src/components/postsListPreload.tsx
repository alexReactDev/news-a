import PostsList from "./postsList";

export default async function PostsListPreload(props) {
	const res = await fetch(`${props.url}`, {
		next: {
			revalidate: 60
		}
	});

	const initialPosts = await res.json();

	return (
		<PostsList initialPosts={initialPosts.posts} total={initialPosts.total} {...props} />
	)
}