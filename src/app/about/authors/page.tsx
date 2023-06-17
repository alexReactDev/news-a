import Image from "next/image.js";
import db from "../../../db.js";

import style from "../../../styles/About/authors.module.css";
import Link from "next/link.js";

export default async function Authors({}) {
	const authors = (await db.query("SELECT * FROM authors;")).rows;

	return (
		<>
			<h2 className="title">
				Our awesome team
			</h2>
			<ul>
				{
					authors.map((author) => {
						return(
							<li key={author.id} className={style.item}>
								<Link href={`/about/authors/${author.id}`} className={style.profile}>
									<div className={style.picture}>
										<Image width={100} height={100} src={"/" + author.picture} alt="profile picture"></Image>
									</div>
									<h3 className={style.title}>
										{author.name}
									</h3>
								</Link>
							</li>
						)
					})
				}
			</ul>
		</>
	)
}