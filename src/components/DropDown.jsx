import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
export default function DropDown({X, Y, width, height, visibility, setVisibility, characters, setCharacters}) {

    const [myStyle, setMyStyle] = useState({});
    
    useEffect(() => {
        setMyStyle({
            top: `${Y+30}px`,
            left: `${X+20}px`,
            display: `${visibility}`
        });
    }, [X, Y, height, visibility, width]);

    const handleClick = async (e) => {
        const response = await fetch(`https://photo-tagging-app-be.onrender.com/api/character_information/${e.target.id}`)
        const characterInformation = await response.json();
        if (Y/height > characterInformation.yUp && Y/height < characterInformation.yDown){
            if (X/width > characterInformation.xLeft && X/width < characterInformation.xRight){
                let filteredList = characters.filter(character => character._id !== characterInformation._id);
                setCharacters(filteredList);
                console.log('you got it');
            }
        } else {
            console.log('you dont got it');
        }
        setVisibility("none");
    }

    return (
        <div 
            className="bg-slate-900 px-2 py-3 absolute hidden text-gray-200 font-bold flex-col
                        items-center rounded-lg cursor-pointer shadow-lg shadow-slate-700" 
            style={myStyle}
        >
            <ul>
                {characters.map((character) => {
                    return(
                        <li key={character._id} id={character._id}
                            className="character hover:bg-slate-700 px-4 py-1 rounded-lg transition-all" onClick={handleClick} 
                        >
                            <div className="flex items-center" id={character._id} >
                                <img id={character._id} className="w-auto h-16" src={character.img} alt="" />
                                <div id={character._id} className="ml-4">{character.character}</div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
