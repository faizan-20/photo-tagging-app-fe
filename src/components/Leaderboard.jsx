import { useEffect, useState } from "react";
import Navbar from "./Navbar";

const Leaderboard = () => {

    const [leaderboard, setLeaderboard] = useState([]);

    const fetchData = async() => {
        const response = await fetch('http://localhost:3000/api/leaderboard');
        const Leaderboard = await response.json();
        setLeaderboard(Leaderboard);
    }

    useEffect(() => {
        fetchData();
    }, []);

    let count = 1;
    return (
        <>
            <Navbar/> 
            <div className="text-slate-200 flex flex-col items-center" >
                <div className="mt-8 text-2xl font-bold" >Leaderboard</div>
                <div className="mt-20 w-[80%] flex justify-center" >
                    <table className="w-[100%]">
                        <tbody className="text-xl" >
                            <tr>
                                <th>S.no</th>
                                <th>Player</th>
                                <th>Time</th>
                            </tr>
                            {leaderboard.map(item => {
                                return (
                                    <tr key={item._id}>
                                        <td>{count++}</td>
                                        <td>{item.player_name}</td>
                                        <td>{item.time}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Leaderboard;