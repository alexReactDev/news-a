import SWRConfig from "../misc/ClientSWRConfig";
import CommentsList from "./commentsList";

export default async function CommentsListPreload(props) {
	const res = await fetch(props.url, {
		next: {
			revalidate: 60
		}
	})

	const comments = await res.json();

	const fallback = {
		[`${props.url}`]: comments,
		[`${props.url}?page=1`]: comments
	}

	return (
		<SWRConfig value={{fallback}}>
			<CommentsList total={comments.total} {...props} />
		</SWRConfig>
	)
}