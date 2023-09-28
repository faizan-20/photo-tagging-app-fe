import { Link } from "react-router-dom";

function Home() {
    return (
        <div className=" flex justify-center items-center h-[90vh] text-slate-200">
                <div className=" w-[30vw] flex flex-col items-center border-2 border-solid border-gray-400 p-6 bg-slate-800">
                    <img src="../robo-city.jpg" alt="robo-city img" className=" object-cover transition-all hover:scale-90"/>
                    <div className="mt-3 font-bold text-xl">
                        <Link to={'/robo-city'}>Start</Link>
                    </div>
                </div>
        </div>
    )
}

export default Home;