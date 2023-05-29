import MainLayout from "@/components/mainLayout";
import Link from "next/link";

export default function Index({ copyright }) {
	return (
		<MainLayout copyright={copyright}>
			<div className="main-body">
				<h1>Read our awesome stories!</h1>
				<h2>What do we have:</h2>
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
			</div>
			<style>{`
				.main-body {
					text-align: center;
				}
			`}</style>
		</MainLayout>
	)
}