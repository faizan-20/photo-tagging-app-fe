import { useState } from "react"
import DropDown from "./DropDown";

const RoboCity = () => {

    const [X, setX] = useState(0);
    const [Y, setY] = useState(0);
    const [visibility, setVisibility] = useState("none");

    const getCursorPos = () => {
        setX(event.pageX);
        setY(event.pageY);
        console.log(X, Y);
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
            <DropDown X={X} Y={Y} visibility={visibility} setVisibility={setVisibility}/>
        </>
    )
}

export default RoboCity;