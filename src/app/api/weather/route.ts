import _ from "lodash";
import { NextResponse } from "next/server";

const sky = ["clean", "clouds", "rain", "thunderstorm"];

let weather = createWeather();

function updateWeather() {
	weather.temp = _.random(0, 1) ? weather.temp - _.random(2) : weather.temp + _.random(2);
	weather.humidity = _.random(0, 1) ? weather.humidity - _.random(5) : weather.humidity + _.random(5);
	weather.wind = weather.wind < 2 ? weather.wind + _.random(2) : _.random(0, 1) ? weather.wind - _.random(2) : weather.wind + _.random(2);
	weather.pressure = _.random(0, 1) ? weather.pressure - _.random(10) : weather.pressure + _.random(10);
	weather.uv = weather.uv <= 1 ? weather.uv + _.random(1) : _.random(0, 1) ? weather.uv - _.random(1) : weather.uv + _.random(1);
}

function createWeather() {
	return {
		sky: sky[_.random(sky.length - 1)],
		temp: _.random(12, 32),
		belowZero: false,
		humidity: _.random(40, 80),
		wind: _.random(15),
		pressure: _.random(700, 800),
		uv: _.random(1, 8)
	}
}

setInterval(updateWeather, 5000);
setInterval(() => {weather = createWeather()}, 60000);

export function GET() {
	return NextResponse.json(weather);
}