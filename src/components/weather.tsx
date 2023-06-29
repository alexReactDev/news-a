"use client"

import useSWR from "../hooks/useSWR"
import Error from "./error";
import Time from "./time";
import React from "react";

import sunIcon from "../icons/weather/sun.png";
import cloudIcon from "../icons/weather/cloud.png";
import rainIcon from "../icons/weather/rain.png";
import thunderIcon from "../icons/weather/thunderstorm.png";

import tempIcon from "../icons/weather/temp.png";
import humidityIcon from "../icons/weather/humidity.png";
import windIcon from "../icons/weather/wind.png";
import pressureIcon from "../icons/weather/pressure.png";
import uvIcon from "../icons/weather/uv.png";
import Image from "next/image";



export default React.memo(function Weather({ className }: { className?: string}) {
	const { data = {}, error } = useSWR("/api/weather", null, {refreshInterval: 5500});

	let skyIcon = sunIcon;

	if(data) {
		switch(data.sky) {
			case "clean": skyIcon = sunIcon; break;
			case "clouds": skyIcon = cloudIcon; break;
			case "rain": skyIcon = rainIcon; break;
			case "thunderstorm": skyIcon = thunderIcon; break;
		}
	}

	let sky = data.sky;

	if(sky === "clean") {
		let hours = new Date().getHours();

		if(hours > 18 || hours < 8) {
			sky = "nightsky"
		}
		else {
			sky = "sun"
		}
	}

	if (error) return <div className={`${className} border border-solid border-gray-200`}><Error /></div>
	
	return (
		<div className={`${className} time border border-solid border-gray-200 text-white`}>
			<div className="py-8 border-b border-solid border-gray-200">
				<Time />
			</div>
			<div className="flex justify-center py-3 bg-gray-500/30">
				<ul className="inline-block">
					<li className="flex mb-4 space-x-8 items-center">
						<div className="w-1/5 flex justify-start">
							<Image src={skyIcon} width={24} height={24} alt="weather icon" />
						</div>
						<div className="w-4/5 flex justify-start capitalize">
							{data.sky}
						</div>
					</li>
					<li className="flex mb-4 space-x-8 items-center">
						<div className="w-1/5 flex justify-start">
							<Image src={tempIcon} width={24} height={24} alt="temperature icon" />
						</div>
						<div className="w-4/5 flex justify-start">
							{data.temp} ℃
						</div>
					</li>
					<li className="flex mb-4 space-x-8 items-center">
						<div className="w-1/5 flex justify-start">
							<Image src={windIcon} width={24} height={24} alt="wind icon" />
						</div>
						<div className="w-4/5 flex justify-start">
							{data.wind} m/s
						</div>
					</li>
					<li className="flex mb-4 space-x-8 items-center">
						<div className="w-1/5 flex justify-start">
							<Image src={humidityIcon} width={24} height={24} alt="humidity icon" />
						</div>
						<div className="w-4/5 flex justify-start">
							{data.humidity} %
						</div>
					</li>
					<li className="flex mb-4 space-x-8 items-center">
						<div className="w-1/5 flex justify-start">
							<Image src={pressureIcon} width={24} height={24} alt="pressure icon" />
						</div>
						<div className="w-4/5 flex justify-start">
							{data.pressure} mb
						</div>
					</li>
					<li className="flex space-x-8 items-center">
						<div className="w-1/5 flex justify-start">
							<Image src={uvIcon} width={24} height={24} alt="uv index icon" />
						</div>
						<div className="w-4/5 flex justify-start">
							{data.uv} UV Index
						</div>
					</li>
				</ul>
			</div>
			<style jsx>{`
				.time {
					background: url(${"/img/weather_themes/" + sky + ".jpg"}) center / cover no-repeat;
				}	
			`}</style>
		</div>
	)
})