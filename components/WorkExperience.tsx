import { motion } from "framer-motion";
import { FC } from "react";

const WorkExperience: FC = () => {
	return (
		<motion.div
			className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
		>
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
				Experience
			</h3>

			<div></div>
		</motion.div>
	);
};

export default WorkExperience;
