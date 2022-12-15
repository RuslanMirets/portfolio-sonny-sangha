import { motion } from "framer-motion";
import { FC } from "react";

const Skills: FC = () => {
	return (
		<motion.div className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
				Skills
			</h3>

			<h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
				Hover over a skill for currency proficiency
			</h3>

			<div className="grid grid-cols-4 gap-5">
				<Skill />
			</div>
		</motion.div>
	);
};

export default Skills;
