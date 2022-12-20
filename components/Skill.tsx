import { motion } from "framer-motion";
import { FC } from "react";

interface IProps {
	directionLeft?: boolean;
}

const Skill: FC<IProps> = ({ directionLeft }) => {
	return (
		<div className="group relative flex cursor-pointer">
			<motion.img
				className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
				initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
				whileInView={{ x: 0, opacity: 1 }}
				transition={{ duration: 1 }}
				viewport={{ once: true }}
				src="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_96102ac6497377cd53da621075fe828e/sanity.png"
				alt="Icon"
			/>
			<div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
				<div className="flex items-center justify-center h-full">
					<p className="text-3xl font-bold text-black opacity-100">100%</p>
				</div>
			</div>
		</div>
	);
};

export default Skill;
