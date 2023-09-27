function Navbar() {
    return (
        <nav className="sticky top-0">
            <div className="nav-container flex justify-evenly items-center bg-slate-900 shadow-sm shadow-slate-800 text-slate-200 text-xl h-16">
                <div id="navHead" className=" font-bold text-2xl" >Find Everyone</div>
                <div id="navitems" className="flex">
                    <div className="navItem">Home</div>
                    <div className="navItem ml-10">About</div>
                    <div className="navItem ml-10">Leaderboard</div>
                </div>
                <div id="timer">0:00</div>
            </div>
        </nav>
    );
}

export default Navbar;