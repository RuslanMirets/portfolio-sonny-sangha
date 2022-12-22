/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";

export default function Home() {
	return (
		<div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
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
			<section className="snap-center" id="experience">
				<WorkExperience />
			</section>
			<section className="snap-start" id="skills">
				<Skills />
			</section>
			<section className="snap-start" id="projects">
				<Projects />
			</section>
			<section className="snap-start" id="contact">
				<ContactMe />
			</section>

			<Link href="#hero">
				<footer className="sticky bottom-5 w-full cursor-pointer">
					<div className="flex items-center justify-center">
						<img
							className="w-10 h-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
							src="https://i.imgur.com/e2yvD6A.png"
							alt="Image"
						/>
					</div>
				</footer>
			</Link>
		</div>
	);
}
