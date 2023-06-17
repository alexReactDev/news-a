import TopNav from "./topNav"

import style from "../styles/main.module.css";

export default function MainLayout({ children }) {
	return (
		<>
			<TopNav />
			<div className="container">
				<div className={style.main_body}>
					<aside className={style.aside}>
						Aside
					</aside>
					<main className={style.main}>
						{children}
					</main>
				</div>
			</div>
		</>
	)
}