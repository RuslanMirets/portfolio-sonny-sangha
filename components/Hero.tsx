import { FC } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Hero: FC = () => {
	const [text, count] = useTypewriter({
		words: ["Developer", "Designer", "Creator"],
		loop: true,
		delaySpeed: 2000,
	});

	return (
		<div>
			<h1>
				<span>{text}</span>
				<Cursor cursorColor="#f7ab0a" />
			</h1>
		</div>
	);
};

export default Hero;
