/* eslint-disable react/prop-types */
export default function DropDown({X, Y, visibility, setVisibility, characters}) {

    const myStyle = {
        top: `${Y}px`,
        left: `${X+20}px`,
        display: `${visibility}`
    }

    const handleClick = (e) => {
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