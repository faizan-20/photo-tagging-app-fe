import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const GameOver = ({ minutes, seconds }) => {

  const [playerName, setPlayerName] = useState("");
  let navigate = useNavigate();
    
  useEffect(() => {
    document.getElementById("robo-city").scrollIntoView();
  });

  const getActualTime = () => {
    let actualMinutes = parseInt(minutes);
    let actualSeconds = parseInt(seconds);
    let actualtime = actualMinutes*60 + actualSeconds;
    return actualtime;
  }


  const handleClick = async() => {
    try {
        let yesTime = getActualTime();
        const response = await fetch('https://photo-tagging-app-be.onrender.com/api/save_player', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                player_name: playerName,
                time: `${minutes}:${seconds}`,
                actualTime: yesTime,
            }),
        });
        const result = await response.json();
        console.log(result);
        navigate('/leaderboard');
    } catch(err) {
        console.error(err);
    }
  }

  return (
    <div
      id="game-over"
      className=" absolute bg-slate-950 text-slate-100 p-6 left-0 right-0 top-[50%]
                        ml-auto mr-auto translate-y-[-50%] w-[50%] 
                        rounded-lg shadow-xl shadow-slate-900 flex flex-col justify-evenly 
                        h-[60%] text-lg items-center"
    >
      <div className=" text-xl w-[70%]">
        <div>Congratulation you found all the characters in</div>
        <div className=" text-slate-500 font-bold">
          {`${minutes} minutes ${seconds} seconds`}
        </div>
      </div>
      <input
        className="px-4 py-2 bg-slate-900 text-slate-300 border-slate-800 active:border-slate-600"
        type="text"
        name="player_name"
        id="player_name"
        placeholder="player name"
        onChange={(e) => setPlayerName(e.target.value)}
        required
      />
      <div className=" flex w-[40%] justify-around text-slate-200 font-bold">
        <button className=" border-2 border-green-800 bg-emerald-700 px-2 py-1 rounded-sm" onClick={handleClick} >Save</button>
        <button>
            <Link className="text-slate-200" to='/'>Cancel</Link>
        </button>
      </div>
    </div>
  );
};

export default GameOver;
