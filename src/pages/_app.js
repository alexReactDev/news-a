import "../styles/nullstyle.css";

export default function CustomApp({ Component, pageProps}) {
	let copyright = "© 42 Team 2023";

	return (
		<>
			<Component {...pageProps} copyright={copyright} />
		</>
	)
}