import Head from "next/head";
import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";
import WorkExperience from "../components/WorkExperience";

export default function Home() {
	return (
		<div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
			<Head>
				<title>Sonny&apos;s Portfolio</title>
			</Head>
			<Header />
			<section className="snap-start" id="hero">
				<Hero />
			</section>
			<section className="snap-center" id="about">
				<About />
			</section>
			{/* Experience */}
			<section className="snap-center" id="experience">
				<WorkExperience />
			</section>
			{/* Skills */}

			{/* Projects */}

			{/* Contact Me */}
		</div>
	);
}
