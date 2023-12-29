import Navbar from "./Navbar";

export default function About() {
	return (
		<>
			<Navbar />
			<div className="text-slate-200 flex flex-col h-screen justify-center items-center">
				<div className="text-2xl">
					This silly project was created for the purpose of learning
					web-development by{" "}
					<span className="font-bold">
						<a
							href="https://faizan-20.github.io/portfolio-page/"
							target="_blank"
							rel="noreferrer"
						>
							Faizan Ahmad
						</a>
					</span>
					.
				</div>
				<div className="flex justify-evenly w-[40vh] mt-28">
					<a
						href="https://github.com/faizan-20/photo-tagging-app"
						target="_blank"
						rel="noreferrer"
					>
						Found a bug?
					</a>
					<a
						href="https://github.com/faizan-20"
						target="_blank"
						rel="noreferrer"
					>
						Check out my other projects
					</a>
				</div>
			</div>
		</>
	);
}
