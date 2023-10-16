import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function Navbar({ seconds, minutes }) {
    return (
        <nav className="sticky top-0">
            <div className="nav-container flex justify-evenly items-center bg-slate-900 shadow-sm shadow-slate-800 text-slate-200 text-xl h-16">
                <div id="navHead" className=" font-bold text-2xl" >Find Everyone</div>
                <div id="navitems" className="flex">
                    <Link to="/" className="navItem text-slate-200">Home</Link>
                    <Link to="/about" className="navItem ml-10 text-slate-200">About</Link>
                    <Link to="/leaderboard" className="navItem ml-10 text-slate-200">Leaderboard</Link>
                </div>
                <div id="timer">{minutes}:{seconds}</div>
            </div>
        </nav>
    );
}

export default Navbar;