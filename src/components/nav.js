import Link from "next/link";

export default function Nav() {
	return (
		<nav>
			<ul>
				<li>
					<Link href="/posts/cats">
						Cats
					</Link>
				</li>
				<li>
					<Link href="/posts/dogs">
						Dogs
					</Link>
				</li>
				<li>
					<Link href="/posts/news">
						World news
					</Link>
				</li>
				<li>
					<Link href="/about">
						About
					</Link>
				</li>
			</ul>
		</nav>
	)
}