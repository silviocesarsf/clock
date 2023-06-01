import React, { useEffect, useState } from "react";
import "./styles.css";
import dayBg from "../assets/background_day.jpg";
import nightBg from "../assets/background_night.png";
import { Section } from "../styles/Section/Section";
import { Container } from "../styles/Container/Container";
import { BsSun } from "react-icons/bs";
import { BsSunriseFill } from "react-icons/bs";
import { BiMoon } from "react-icons/bi";

const Home: React.FC = () => {
	const [actualTime, setActualTime] = useState({
		hours: new Date().getHours(),
		minutes: new Date().getMinutes(),
		years: new Date().getFullYear(),
	});
	const [backgroundImage, setBackgroundImage] = useState(dayBg);

	const ternaryMessage = {
		messageMorning: (
			<>
				<BsSunriseFill className="icon-actual_time" />
				Bom dia
			</>
		),
		messageAfternoon: (
			<>
				<BsSun className="icon-actual_time" />
				Boa Tarde
			</>
		),
		messageNight: (
			<>
				<BiMoon className="icon-actual_time" />
				Boa noite
			</>
		),
	};

	useEffect(() => {
		const interval = setInterval(() => {
			const date = new Date();
			setActualTime({
				hours: date.getHours(),
				minutes: date.getMinutes(),
				years: date.getFullYear(),
			});
		}, 1000);

		return () => clearInterval(interval);
	}, [actualTime]);

	useEffect(() => {
		if (actualTime.hours >= 18 || actualTime.hours < 6) {
			setBackgroundImage(nightBg);
		} else {
			setBackgroundImage(dayBg);
		}
	}, []);

	return (
		<Section
			initial={{ opacity: 0 }}
			animate={{ opacity: 0.9 }}
			transition={{
				type: "ease-in",
				duration: 1.5,
			}}
			backgroundImage={backgroundImage}
		>
			<div className="phrase-container">
				<div className="phrase">
					"Os problemas são oportunidades para se mostrar o que
					sabe."
				</div>
				<div className="phrase_autor">Duke Ellington</div>
			</div>
			<Container
				dir="column"
				align="space-between"
				className="hour-container_main"
			>
				<Container justify="left" className="actual-time_message">
					{actualTime.hours < 12
						? ternaryMessage.messageMorning
						: actualTime.hours <= 18
						? ternaryMessage.messageAfternoon
						: ternaryMessage.messageNight}
					, Agora são exatamente
				</Container>
				<div className="hour-main">
					<h1>
						{actualTime.hours}:
						{actualTime.minutes < 10
							? `0${actualTime.minutes}`
							: actualTime.minutes}
					</h1>
				</div>
				<div className="locality">em São Paulo, Brasil.</div>
			</Container>
		</Section>
	);
};

export default Home;
