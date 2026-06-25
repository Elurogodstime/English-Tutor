import { Link } from "react-router-dom"

function Dashboard() {
    return (
        <div className="min-h-screen bg-gray-50 p-4">

            {/* HEADER */}
            <div className="bg-blue-700 text-white p-6 rounded-2xl shadow-md">
                <h1 className="text-2xl font-bold">English Tutor App 📘</h1>
                <p className="text-sm mt-1">
                    Learn English Grammar Step by Step
                </p>
            </div>

            {/* STATS CARDS */}
            <div className="grid grid-cols-2 gap-4 mt-6">

                <div className="bg-white shadow rounded-xl p-4 text-center">
                    <h2 className="text-xl font-bold">8+</h2>
                    <p className="text-gray-500 text-sm">Topics</p>
                </div>

                <div className="bg-white shadow rounded-xl p-4 text-center">
                    <h2 className="text-xl font-bold">20+</h2>
                    <p className="text-gray-500 text-sm">Quiz Questions</p>
                </div>

            </div>

            {/* MAIN MENU */}
            <div className="mt-6 space-y-6">

                <Link to="/home" className="m-3">
                    <div className="bg-blue-600  text-white p-4 rounded-xl shadow active:scale-95 transition">
                        📚 Start Learning Topics
                    </div>
                </Link>

                <Link to="/quiz" className="m-3">
                    <div className="bg-green-600 text-white p-4 rounded-xl shadow active:scale-95 transition">
                        🧠 Take Quiz
                    </div>
                </Link>

                <Link to="/reviews" className="m-3">
                    <div className="bg-gray-700 text-white p-4 rounded-xl shadow active:scale-95 transition">
                        📊 Review Mistakes (Coming Soon)
                    </div>
                </Link>

            </div>

        </div>
    )
}

export default Dashboard