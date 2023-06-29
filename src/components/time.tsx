"use client"

import { useEffect, useState } from "react"

export default function Time({ className }: {className?: string}) {
	const [time, setTime] = useState("00:00:00");

	useEffect(() => {
		const interval = setInterval(() => {
			setTime(new Date().toLocaleTimeString());
		}, 1000);

		return () => clearInterval(interval);
	}, [])

	return (
		<div className={`${className} flex justify-center`}>
			<span className="text-4xl">
				{time}
			</span>
		</div>
	)
}