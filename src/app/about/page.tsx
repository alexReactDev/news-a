import { Metadata } from "next";
import Link from "next/link";
import db from "../../db.js";

import style from "../../styles/About/index.module.css";

export default async function About() {

	const text = (await db.query("SELECT text FROM about;")).rows[0].text;

	return (
		<>
			<h1 className="title">
				About us
			</h1>
			<p>
				{text}
			</p>
			<Link href="/about/authors" className={style.link}>
				Our awesome team
			</Link>
		</>
	)
}

export const metadata: Metadata = {
	title: "About us"
}