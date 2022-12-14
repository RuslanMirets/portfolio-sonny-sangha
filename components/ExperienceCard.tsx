/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import { FC } from "react";

const ExperienceCard: FC = () => {
	return (
		<article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 transition-opacity duration-200 overflow-hidden">
			<motion.img
				className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
				initial={{ y: -100, opacity: 0 }}
				transition={{ duration: 1.2 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				src="https://flomaster.club/uploads/posts/2021-02/1612161616_32-p-risunki-na-avatarku-35.jpg"
				alt="Image"
			/>
			<div className="px-0 md:px-10">
				<h4 className="text-4xl font-light">CEO of PAPAFAM</h4>
				<p className="font-bold text-2xl mt-1">PAPAFAM</p>
				<div className="flex space-x-2 my-2">
					<img
						className="w-10 h-10 rounded-full"
						src="https://sun9-45.userapi.com/impg/3FbwaRJ40t7Pf98vyFKviZrHvNM_2gcu1Y8NVg/ZSXk-4Ihtcw.jpg?size=604x604&quality=96&sign=f829ec70056ddecda976ddb1d86433da&type=album"
						alt="Icon"
					/>
					<img
						className="w-10 h-10 rounded-full"
						src="https://sun9-45.userapi.com/impg/3FbwaRJ40t7Pf98vyFKviZrHvNM_2gcu1Y8NVg/ZSXk-4Ihtcw.jpg?size=604x604&quality=96&sign=f829ec70056ddecda976ddb1d86433da&type=album"
						alt="Icon"
					/>
					<img
						className="w-10 h-10 rounded-full"
						src="https://sun9-45.userapi.com/impg/3FbwaRJ40t7Pf98vyFKviZrHvNM_2gcu1Y8NVg/ZSXk-4Ihtcw.jpg?size=604x604&quality=96&sign=f829ec70056ddecda976ddb1d86433da&type=album"
						alt="Icon"
					/>
				</div>
				<p className="uppercase py-5 text-gray-300">
					Started work... - Ended...
				</p>
				<ul className="list-disc space-y-4 ml-5 text-lg">
					<li>Summary points Summary points Summary points</li>
					<li>Summary points Summary points Summary points</li>
					<li>Summary points Summary points Summary points</li>
					<li>Summary points Summary points Summary points</li>
					<li>Summary points Summary points Summary points</li>
				</ul>
			</div>
		</article>
	);
};

export default ExperienceCard;
