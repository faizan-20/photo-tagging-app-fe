/* eslint-disable react/prop-types */
export default function DropDown({X, Y, visibility, setVisibility, characters, width, height}) {

    const myStyle = {
        top: `${Y*height}px`,
        left: `${X*width+20}px`,
        display: `${visibility}`
    }

    const handleClick = async (e) => {
        const response = await fetch(`http://localhost:3000/api/character_information/${e.target.id}`)
        const character = await response.json();
        // console.log([X, Y]);
        // console.log([character.xLeft, character.xRight, character.yUp, character.yDown]);
        if (X > character.xLeft && X < character.xRight){
            if (Y > character.yUp && Y < character.yDown){
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
                            className=" hover:bg-slate-700 px-4 py-1 rounded-lg" onClick={handleClick} 
                        >{character.character}</li>
                    )
                })}
            </ul>
        </div>
    )
}