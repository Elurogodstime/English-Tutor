import { useState } from "react"
import { FaHome, FaBookOpen, FaQuestionCircle, FaStar, FaTimes, FaBars,  } from "react-icons/fa"
import { MdDashboard } from "react-icons/md";
import {Link} from "react-router-dom"

function Nav() {
    const [navShow, setNavShow] = useState(false)

    return (
        <>
            {/* TOP NAV */}
            <div className="bg-linear-to-r from-blue-700 to-blue-600 px-4 py-3 flex items-center justify-between shadow-lg">

                <button
                    onClick={() => setNavShow(true)}
                    className="text-2xl text-amber-200"
                >
                    <FaBars />
                </button>

                <h1 className="text-xl font-bold text-white tracking-wide">
                    English Tutor
                </h1>

                <div className="bg-blue-200 w-10 h-10 rounded-full flex items-center justify-center shadow">
                    <span className="text-blue-800 font-bold">U</span>
                </div>
            </div>

            {/* OVERLAY */}
            {navShow && (
                <div
                    onClick={() => setNavShow(false)}
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
                />
            )}

            {/* SIDE DRAWER */}
            <div className={`fixed top-0 left-0 h-full w-72 bg-linear-to-b from-blue-700 to-blue-600 shadow-2xl z-50 transform transition-transform duration-300
                ${navShow ? "translate-x-0" : "-translate-x-full"}`}>

                {/* HEADER */}
                <div className="flex items-center justify-between p-4 border-b border-blue-500">
                    <h2 className="text-white font-bold text-lg">Menu</h2>

                    <button onClick={() => setNavShow(false)} className="text-white text-2xl">
                        <FaTimes />
                    </button>
                </div>

                {/* LINKS */}
                <div className="p-4 space-y-3 text-white">

                     <Link to={"/dashboard"}>
                    <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-500 transition cursor-pointer shadow">
                        <MdDashboard/>
                        Dashboard
                    </div>
                    </Link>

                    <Link to={"/"}>
                    <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-500 transition cursor-pointer shadow">
                        <FaHome />
                        Home
                    </div>
                    </Link>

                    <Link to={"/types"}>
                    <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-500 transition cursor-pointer shadow">
                        <FaBookOpen />
                        Lessons
                    </div>
                    </Link>

                    <Link to={"/quiz"}>
                    <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-500 transition cursor-pointer shadow">
                        <FaQuestionCircle />
                        Quiz
                    </div>
                    </Link>

                    <Link to={"/reviews"}>
                    <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-500 transition cursor-pointer shadow">
                        <FaStar />
                        Reviews
                    </div>
                    </Link>

                </div>
            </div>
        </>
    )
}

export default Nav