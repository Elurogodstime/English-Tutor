import BackButton from "../../Backbutton"
import { Link } from "react-router-dom"

function Type() {
    return (
        <div className="min-h-screen bg-gray-50 p-4">

            {/* HEADER */}
            <div className="bg-linear-to-r from-blue-600 to-blue-500 text-white text-center p-5 rounded-xl shadow-md">
                <h1 className="text-lg font-bold">Types of Parts of Speech</h1>
            </div>

            {/* GRID MENU */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">

                <Link to={"/noun"}>
                    <div className="bg-white p-4 rounded-xl shadow hover:shadow-md hover:bg-blue-50 active:scale-95 transition">
                        Noun
                    </div>
                </Link>

                <Link to={"/pronoun"}>
                    <div className="bg-white p-4 rounded-xl shadow hover:shadow-md hover:bg-blue-50 active:scale-95 transition">
                        Pronoun
                    </div>
                </Link>

                <Link to={"/verb"}>
                    <div className="bg-white p-4 rounded-xl shadow hover:shadow-md hover:bg-blue-50 active:scale-95 transition">
                        Verb
                    </div>
                </Link>

                <Link to={"/adjective"}>
                    <div className="bg-white p-4 rounded-xl shadow hover:shadow-md hover:bg-blue-50 active:scale-95 transition">
                        Adjective
                    </div>
                </Link>

                <Link to={"/adverb"}>
                    <div className="bg-white p-4 rounded-xl shadow hover:shadow-md hover:bg-blue-50 active:scale-95 transition">
                        Adverb
                    </div>
                </Link>

                <Link to={"/preposition"}>
                    <div className="bg-white p-4 rounded-xl shadow hover:shadow-md hover:bg-blue-50 active:scale-95 transition">
                        Preposition
                    </div>
                </Link>

                <Link to={"/conjunction"}>
                    <div className="bg-white p-4 rounded-xl shadow hover:shadow-md hover:bg-blue-50 active:scale-95 transition">
                        Conjunction
                    </div>
                </Link>

                <Link to={"/interjection"}>
                    <div className="bg-white p-4 rounded-xl shadow hover:shadow-md hover:bg-blue-50 active:scale-95 transition">
                        Interjection
                    </div>
                </Link>

            </div>

            {/* BACK BUTTON */}
            <div className="flex justify-center mt-8">
                <Link to={"/home"}>
                    <BackButton />
                </Link>
            </div>

        </div>
    )
}

export default Type