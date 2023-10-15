/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import DropDown from "./DropDown";
import GameStart from "./GameStart";
import Navbar from "./Navbar";
import GameOver from "./GameOver";

const RoboCity = ({ gameStart, setGameStart, setGameOver, gameOver }) => {
    const [X, setX] = useState(0);
    const [Y, setY] = useState(0);
    const [visibility, setVisibility] = useState("none");
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [characters, setCharacters] = useState([]);
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);

    useEffect(() => {
      if (gameStart) {
        const timer = setTimeout(() => {
          if (gameOver === true) return;
          setSeconds(seconds+1);
          if (seconds === 59) {
            setSeconds(0);
            setMinutes(minutes+1);
          }
        }, 1000);
        return () => clearTimeout(timer);
      }
    }, [gameOver, gameStart, minutes, seconds]); 

    async function fetchCharacters() {
        const response = await fetch('http://localhost:3000/api/character_information');
        const allCharacters = await response.json();
        setCharacters(allCharacters);
    }

    useEffect(() => {
        fetchCharacters();
    }, []);

    useEffect(() => {
        if (characters.length === 0) {
            setGameOver(true);
            console.log("game over");
        } else {
            setGameOver(false);
        }
    }, [characters.length, setGameOver]);

    const getCursorPos = (e) => {
        let rect = e.target.getBoundingClientRect();
        setWidth(e.target.clientWidth);
        setHeight(e.target.clientHeight);
        let x = (e.clientX - rect.left);
        let y = (e.clientY - rect.top);
        setX(x);
        setY(y);
    }

    const handleClick = (e) => {
        getCursorPos(e);
        if (visibility === "none") {
            setVisibility("flex");
        }
        else{
            setVisibility("none");
        } 
    }

    return (
            <>
                <Navbar minutes={minutes} seconds={seconds} />
                {
                    !gameStart && 
                    <GameStart setGameStart={setGameStart} characters={characters} />
                }
                {
                    gameOver && 
                    <GameOver minutes={minutes} seconds={seconds} />
                }
                {
                    gameStart && 
                    <DropDown 
                        X={X} Y={Y} 
                        width={width} height={height} 
                        visibility={visibility} setVisibility={setVisibility} 
                        characters={characters} setCharacters={setCharacters} 
                    />             
                }
                <div onClick={handleClick} id="robo-city">
                    <img src="../robo-city.jpg" alt="Loading image" className="object-contain" />
                </div>
            </>
        )
}

export default RoboCity;