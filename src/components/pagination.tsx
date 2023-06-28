"use client"

import "client-only";
import style from "../styles/Components/pagination.module.css";
import cn from "classnames";

interface IProps {
	current: number,
	total: number,
	onChange: (page: number) => void
}

export default function Pagination({ current, total, onChange }: IProps) {
	const pages: number[] = [];

	for (let i = 0; i < total; i++) {
		pages.push(i + 1);
	}

	return (
		<ul className={style.pages}>
			{
				pages.map((page) => {
					return (
						<li 
							key={page} 
							className={cn(style.page, {[style.page_current]: page === current })}
							onClick={() => onChange(page)}
							>
							{page}
						</li>
					)
				})
			}
		</ul>
	)
}