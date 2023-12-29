import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import RoboCity from "./components/RoboCity";
import Home from "./components/Home";
import { useState } from "react";
import Leaderboard from "./components/Leaderboard";

function App() {
	const [gameStart, setGameStart] = useState(false);
	const [gameOver, setGameOver] = useState(false);

	return (
		<>
			<Routes>
				<Route
					path="/"
					element={
						<>
							<Navbar />
							<Home />
						</>
					}
				/>
				<Route
					path="/robo-city"
					element={
						<RoboCity
							gameStart={gameStart}
							setGameStart={setGameStart}
							gameOver={gameOver}
							setGameOver={setGameOver}
						/>
					}
				/>
				<Route path="/leaderboard" element={<Leaderboard />} />
			</Routes>
		</>
	);
}

export default App;
