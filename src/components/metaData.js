import Head from "next/head";
import "../styles/nullstyle.css";

export default function MetaData({ title = "News A+"}) {
	return (
		<Head>
			<title>{title}</title>
			<meta name="keywords" content="next news cats dogs"></meta>
			<meta name="description" content="Website about news cats and dogs"></meta>
		</Head>
	)
}