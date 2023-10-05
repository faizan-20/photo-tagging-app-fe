import { useEffect, useState } from "react"
import DropDown from "./DropDown";

const RoboCity = () => {

    const [X, setX] = useState(0);
    const [Y, setY] = useState(0);
    const [visibility, setVisibility] = useState("none");
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const [characters, setCharacters] = useState([]);

    async function fetchCharacters() {
        const response = await fetch('http://localhost:3000/api/character_information');
        const allCharacters = await response.json();
        setCharacters(allCharacters);
        // console.log(characters);
    }

    useEffect(() => {
        fetchCharacters();
    }, []);

    const getCursorPos = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
        setX(event.pageX/width);
        setY(event.pageY/height);
        console.log([X, Y]);
    }

    const handleClick = () => {
        getCursorPos();
        if (visibility === "none") setVisibility("flex");
        else setVisibility("none");
    }

    return (
        <>
            <div onClick={handleClick} >
                <img src="../robo-city.jpg" alt="Loading image" className=" object-contain" />
            </div>
            <DropDown X={X*width} Y={Y*height} visibility={visibility} setVisibility={setVisibility} characters={characters} />
        </>
    )
}

export default RoboCity;