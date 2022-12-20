/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import { FC } from "react";

const Projects: FC = () => {
	const projects = [1, 2, 3, 4, 5];

	return (
		<motion.div
			className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
		>
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
				Projects
			</h3>

			<div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
				{projects.map((project, index) => (
					<div
						className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
						key={index}
					>
						<motion.img
							initial={{ y: -300, opacity: 0 }}
							transition={{ duration: 1.2 }}
							whileInView={{ y: 0, opacity: 1 }}
							viewport={{ once: true }}
							src="https://cdn.sanity.io/images/ltuexkre/production/af7ca99b5a796d0698cf9121a4a0795b5022b6be-666x375.png"
							alt="Image"
						/>
						<div className="space-y-10 px-0 md:px-10 max-w-6xl">
							<h4 className="text-4xl font-semibold text-center">
								<span className="underline decoration-[#f7ab0a]/50">
									Case Study {index + 1} of {projects.length}:
								</span>{" "}
								UPS clone
							</h4>
							<p className="text-lg text-center md:text-left">
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
								ipsa dolores minus expedita corrupti placeat magnam asperiores
								a, velit rem ex rerum temporibus nobis illo, corporis nesciunt
								atque eveniet iure soluta veritatis? Commodi, dolorem
								consequatur? Dicta sapiente voluptates temporibus, quis, quidem
								reiciendis fugit tempora possimus dolore dolorem iusto quae quia
								animi incidunt sequi in praesentium esse minus debitis? Qui,
								praesentium.
							</p>
						</div>
					</div>
				))}
			</div>

			<div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12" />
		</motion.div>
	);
};

export default Projects;
