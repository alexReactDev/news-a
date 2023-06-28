import Link from "next/link";
import { ReactNode } from "react";

import style from "../styles/Components/pagination.module.css";

interface IProps {
	page: number,
	total: number,
	basename: string
}

export default function ServerPagination({ page, total, basename}: IProps) {
	function renderPages() {
		const pages: ReactNode[] = [];

		for(let i = 1; i <= total; i++) {
			pages.push(
				<li className={`${style.page} ${i === page ? style.page_current : ""}`}>
					<Link href={`${basename}?page=${i}`}>
						{i}
					</Link>
				</li>
			)
		}

		return pages;
	}
	
	return (
		<ul className={style.pages}>
			{renderPages()}
		</ul>
	)
}