import { useEffect, useState } from "react"
import DropDown from "./DropDown";
import GameStart from "./GameStart";

const RoboCity = () => {
    const [X, setX] = useState(0);
    const [Y, setY] = useState(0);
    const [visibility, setVisibility] = useState("none");
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [characters, setCharacters] = useState([]);
    const [gameStart, setGameStart] = useState(false);

    async function fetchCharacters() {
        const response = await fetch('http://localhost:3000/api/character_information');
        const allCharacters = await response.json();
        setCharacters(allCharacters);
    }

    useEffect(() => {
        fetchCharacters();
    }, []);
    
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
                {
                    !gameStart && 
                    <GameStart setGameStart={setGameStart} characters={characters} />
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