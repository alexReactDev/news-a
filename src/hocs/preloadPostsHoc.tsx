export default function preloadPostsHoc( Component ) {
	return async function (props) {
		const res = await fetch(`${props.url}`, {
			next: {
				revalidate: 60
			}
		});
	
		const initialPosts = await res.json();

		return (
			<Component initialPosts={initialPosts.posts} total={initialPosts.total} {...props} />
		)
	}
}