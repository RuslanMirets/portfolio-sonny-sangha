import { FC } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

const Hero: FC = () => {
	const [text, count] = useTypewriter({
		words: ["Developer", "Designer", "Creator"],
		loop: true,
		delaySpeed: 2000,
	});

	return (
		<div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
			<BackgroundCircles />
			<h1>
				<span>{text}</span>
				<Cursor cursorColor="#f7ab0a" />
			</h1>
		</div>
	);
};

export default Hero;
