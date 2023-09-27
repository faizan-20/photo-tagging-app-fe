/* eslint-disable react/prop-types */
export default function DropDown({X, Y, visibility, setVisibility}) {

    const myStyle = {
        top: `${Y}px`,
        left: `${X+20}px`,
        display: `${visibility}`
    }

    const handleClick = () => {
        setVisibility("none");
    }

    return (
        <div 
            className="bg-slate-900 px-2 py-3 absolute hidden text-gray-200 font-bold flex-col
                        items-center rounded-lg cursor-pointer shadow-lg shadow-slate-700" 
            style={myStyle}
        >
            <ul>
                <li className=" hover:bg-slate-700 px-4 py-1 rounded-lg" onClick={handleClick}>char 1</li>
                <li className=" hover:bg-slate-700 px-4 py-1 rounded-lg" onClick={handleClick}>char 2</li>
                <li className=" hover:bg-slate-700 px-4 py-1 rounded-lg" onClick={handleClick}>char 3</li>
            </ul>
        </div>
    )
}