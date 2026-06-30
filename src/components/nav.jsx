import { useState } from "react"
import { FaHome, FaBookOpen, FaQuestionCircle, FaStar, FaTimes, FaBars,  FaUserCircle } from "react-icons/fa"
import { MdDashboard } from "react-icons/md";
import {Link} from "react-router-dom"

function Nav() {
    const [navShow, setNavShow] = useState(false)

    const student =
    JSON.parse(localStorage.getItem("student")) || null

const initials = student
    ? student.name.charAt(0).toUpperCase()
    : "U"

    return (
        <>
            {/* TOP NAV */}
            <div className="bg-linear-to-r from-blue-700 to-blue-600 px-4 py-3 flex items-center justify-between shadow-lg">

                <button
                    onClick={() => setNavShow(true)}
                    className="text-2xl text-blue-200"
                >
                    <FaBars />
                </button>

                <div className="flex">
                    <div className="s">
                </div>

                    <div className="logotwo flex justify-center">
                        <div><h1 className="text-xl font-bold text-white tracking-wide"><FaBookOpen/></h1></div>
                         <div className="ss"><h1 className="text-xl font-bold text-white tracking-wide">
                  English Tutor
                </h1></div>

                
                    </div>
                   

                
                </div>

               <Link to={"/dashboard"}>
               <div className="bg-blue-200 w-10 h-10 rounded-full flex items-center justify-center shadow cursor-pointer">
    <span className="text-blue-800 font-bold">
        {initials}
    </span>
</div>
               </Link>
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

                    
    <div className="flex justify-between items-center p-4 border-b border-blue-500">

    <div>

      <h2 className="text-white font-bold text-lg">
    {student ? student.name : "Guest"}
</h2>

        <p className="text-blue-200 text-sm">
    English Learner
</p>

    </div>

</div>







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

                    <Link to={"/home"}>
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

                    <Link to={"/review"}>
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