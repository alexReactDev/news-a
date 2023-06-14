import MainLayout from "../components/mainLayout";
import Link from "next/link";
import ICategory from "../interfaces/ICategory";

interface IProps {
	copyright: string,
	categories: ICategory[]
}

function Index({ copyright, categories }: IProps) {
	return (
		<MainLayout copyright={copyright} title="NewsA+ | Home">
			<div className="main-body">
				<div className="default-body">
					<h1 className="title">Read our awesome stories!</h1>
					<h2>What do we have:</h2>
					<ul>
						{
							categories.map((cat) => {
								return (
									<li key={cat.id}>
										<Link href={`posts/${cat.url}`}>
											{cat.name}
										</Link>
									</li>
								)
							})
						}
						<li>
							<Link href="/posts/all">
									All posts
							</Link>
						</li>
						<li>
							<Link href="/about">
									About
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<style>{`
				.main-body {
					text-align: center;
				}

				h2 {
					margin-bottom: 10px;
				}

				ul {
					display: inline-block;
					min-width: 200px;
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
		</MainLayout>
	)
}

export async function getStaticProps() {
	const data = await fetch("http://localhost:4500/categories");

	const categories: ICategory[] = await data.json();

	return {
		props: {
			categories
		}
	}
}

export default Index;