// import LoadScreen from "./LoadScreen";

import LoadScreen from "./LoadScreen";

/* eslint-disable react/prop-types */
const GameStart = ({ characters, setGameStart, isLoading }) => {
	return (
		<div
			className=" absolute bg-slate-950 text-slate-100 p-6 left-0 right-0 ml-auto mr-auto
                  top-[50%] translate-y-[-50%]
                  rounded-lg shadow-xl shadow-slate-900 flex flex-col justify-around 
                  h-[60%] text-lg items-center w-[50%] "
		>
			<div className=" text-xl font-bold">
				Find the characters below in the shortest time.
			</div>
			{isLoading && <LoadScreen />}
			<div>
				<ul>
					{characters.map((character) => {
						return (
							<li
								key={character._id}
								id={character._id}
								className=" px-4 py-1 flex items-center"
							>
								<img className="w-auto h-16" src={character.img} alt="" />
								<div className=" ml-4">{character.character}</div>
							</li>
						);
					})}
				</ul>
			</div>
			<div className=" text-slate-500 w-[80%] text-center">
				When you find a character, click on its position on the image and select
				it from the list.
			</div>
			<div>
				<button
					className=" bg-emerald-800 px-3 py-2 rounded-lg text-xl font-bold shadow-lg hover:bg-emerald-900 transition-all"
					onClick={() => setGameStart(true)}
				>
					Start
				</button>
			</div>
		</div>
	);
};

export default GameStart;
