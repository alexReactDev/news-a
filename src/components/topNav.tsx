import Link from "next/link";

import style from "../styles/TopNav/index.module.css";

export default function TopNav() {
	return (
		<nav className={style.nav}>
			<div className="container">
				<ul className={style.ul}>
					<li className={style.li}>
						<Link className={style.link} href="/posts/cats">
							Cats
						</Link>
					</li>
					<li className={style.li}>
						<Link className={style.link} href="/posts/dogs">
							Dogs
						</Link>
					</li>
					<li className={style.li}>
						<Link className={style.link} href="/posts/news">
							World news
						</Link>
					</li>
					<li className={style.li}>
						<Link className={style.link} href="/about">
							About
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	)
}