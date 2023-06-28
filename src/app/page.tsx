import Link from "next/link";
import DefaultBodyLayout from "../components/defaultBodyLayout";

export default async function Index() {
	const res = await fetch(`${process.env.API_BASE_URL}/categories`);
	const categories = await res.json();

	return (
		<div className="container">
			<DefaultBodyLayout>
				<div className="flex flex-col items-center text-center">
					<h1 className="title">Read our awesome stories!</h1>
					<h2>What do we have:</h2>
					<ul>
						{
							categories.map((cat) => {
								return (
									<li key={cat.id}>
										<Link href={`posts/${cat.url}`} className="hover:underline">
											{cat.name}
										</Link>
									</li>
								)
							})
						}
						<li>
							<Link href="/posts/all" className="hover:underline">
									All posts
							</Link>
						</li>
						<li>
							<Link href="/about" className="hover:underline">
									About
							</Link>
						</li>
					</ul>
				</div>

				<style>{`
					h2 {
						margin-bottom: 10px;
					}

					ul {
						display: inline-block;
						min-width: 250px;
						margin: 0px auto;
						border: solid #cccccc 1px;
						padding: 0px 30px;
						background-color: #f9f9f9;
					}
					li {
						margin-bottom: 10px;
						padding: 10px 20px;
					}
				`}</style>
			</DefaultBodyLayout>
		</div>
	)
}