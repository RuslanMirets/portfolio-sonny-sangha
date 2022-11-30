import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Sonny&apos;s Portfolio</title>
			</Head>
			<Header />

			{/* Hero */}
			<section id="hero">
				<Hero />
			</section>
			{/* About */}

			{/* Experience */}

			{/* Skills */}

			{/* Projects */}

			{/* Contact Me */}
		</div>
	);
}
