import Link from "next/link";

export default function Error404() {
	return (
		<>
			<h1>Ошибочка вышла!</h1>
			<h2>Page not found</h2>
			<Link href="/">Домой</Link>
		</>
	)
}