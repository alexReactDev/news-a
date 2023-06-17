import Image from "next/image.js";
import db from "../../../../db.js";
import style from "../../../../styles/About/author.module.css";

export default async function Author({ params }) {
	const author = (await db.query("SELECT * FROM authors where id = $1;", [params.id])).rows[0];

	return ( 
		<div>
			<section className={style.data}>
				<article className={style.picture}>
					<Image width={250} height={250} src={"/" + author.picture} alt={author.name}></Image>
				</article>
				<article className={style.info}>
					<h2 className={style.name}>
						{author.name}
					</h2>
					<h4 className={style.entry}>
						{author.gender}, {author.age}
					</h4>
					<h4 className={style.entry}>
						From: {author.city}
					</h4>
				</article>
			</section>
			<section className={style.about}>
				<h3 className="title">
					About me
				</h3>
				<p>
					{author.about}
				</p>
			</section>
		</div>
	)
}