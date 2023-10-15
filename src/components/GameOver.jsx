import { useEffect } from "react";

/* eslint-disable react/prop-types */
const GameOver = ({ minutes, seconds }) => {

    useEffect(() => {
        document.getElementById('robo-city').scrollIntoView();
    });

    return (
        <div 
            id="game-over"
            className=" absolute bg-slate-950 text-slate-100 p-6 left-0 right-0 top-[50%]
                        ml-auto mr-auto translate-y-[-50%] w-[50%] 
                        rounded-lg shadow-xl shadow-slate-900 flex flex-col justify-around 
                        h-[60%] text-lg items-center"
        >
            <div className=" text-xl w-[70%]">
                <div>
                    Congratulation you found all the characters in 
                </div>
                <div className=" text-slate-500 font-bold">
                    {`${minutes} minutes ${seconds} seconds`}
                </div>
            </div>
        </div>
    )
}

export default GameOver;