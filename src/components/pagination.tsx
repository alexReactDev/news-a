"use client"

import "client-only";
import style from "../styles/Components/pagination.module.css";
import cn from "classnames";
import { useState } from "react";

interface IProps {
	total: number,
	onChange: (page: number) => void
}

export default function Pagination({ total, onChange }: IProps) {
	const [current, setPage] = useState(1);

	const changePage = (page) => {
		setPage(page);
		onChange(page);
	}

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
							onClick={() => changePage(page)}
							>
							{page}
						</li>
					)
				})
			}
		</ul>
	)
}