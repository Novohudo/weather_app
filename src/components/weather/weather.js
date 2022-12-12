import React from 'react';
import moment from "moment";
import s from "./weather.module.scss"
import {Button} from "semantic-ui-react";

const refresh = () =>{
	window.location.reload();
}

const Weather = ({weatherData}) => (
	<div className={s.main}>
		<div className={s.top}>
			<p className={s.header}>{weatherData.name}</p>
			<Button className={s.button} inverted color={'blue'} circular icon={'refresh'} onClick={refresh}/>
		</div>
		<div className={s.flex}>
			<p className={s.day}>{moment().format('dddd')} , <span>{moment().format('LL')}</span></p>
		</div>
		<div className={s.flex}>
			<p className={s.temp}>Temperature: {weatherData.main.temp} &deg;C</p>
			<p className={s.temp}>Humidity: {weatherData.main.humidity} %</p>
		</div>
		<div className={s.flex}>
			<p className={s.sunrise_sunset}>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('pl-IN')}</p>
			<p className={s.sunrise_sunset}>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('pl-IN')}</p>
		</div>

		<p className={s.description}>{weatherData.weather[0].main}</p>


	</div>


)

export default Weather;