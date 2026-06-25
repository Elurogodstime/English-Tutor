import { Link } from "react-router-dom"

function Home() {
    return (
        <div className="p-4 space-y-6">

            {/* Hero Section */}
            <div className="bg-linear-to-r from-blue-500 to-blue-300 rounded-2xl h-44 flex items-center justify-center shadow-md">
              <Link to={"/dashboard"}>
                <div className="bg-white/30 backdrop-blur-md rounded-full w-28 h-28 flex items-center justify-center">
                    <span className="text-white font-bold">Profile</span>
                </div>
              </Link>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <Link to={"/types"}>
                    <div className="bg-blue-500 text-white p-5 rounded-xl shadow hover:scale-105 transition">
                        Parts Of Speech
                    </div>
                </Link>

                <Link to={"/figures"}>
                    <div className="bg-blue-500 text-white p-5 rounded-xl shadow hover:scale-105 transition">
                        Figures Of Speech
                    </div>
                </Link>

                <Link to={"/idoms"}>
                    <div className="bg-blue-500 text-white p-5 rounded-xl shadow hover:scale-105 transition">
                        Idioms
                    </div>
                </Link>

                <Link to={"/quiz"}>
                    <div className="bg-green-500 text-white p-5 rounded-xl shadow hover:scale-105 transition">
                        Quiz
                    </div>
                </Link>

                <Link to={"/reviews"}>
                    <div className="bg-purple-500 text-white p-5 rounded-xl shadow hover:scale-105 transition">
                        Reviews
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default Home