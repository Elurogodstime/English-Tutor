import { Link } from "react-router-dom"

function Topics() {
    return (
        <div className="min-h-screen bg-gray-50 p-4">

            <h1 className="text-xl font-bold mb-4">Select a Topic 📚</h1>

            <div className="space-y-3">

                <Link to="/types">
                    <div className="bg-white shadow p-4 rounded-xl active:scale-95 transition">
                        Parts of Speech
                    </div>
                </Link>

                <Link to="/noun">
                    <div className="bg-white shadow p-4 rounded-xl active:scale-95 transition">
                        Noun
                    </div>
                </Link>

                <Link to="/pronoun">
                    <div className="bg-white shadow p-4 rounded-xl active:scale-95 transition">
                        Pronoun
                    </div>
                </Link>

                <Link to="/verb">
                    <div className="bg-white shadow p-4 rounded-xl active:scale-95 transition">
                        Verb
                    </div>
                </Link>

                <Link to="/figures">
                    <div className="bg-white shadow p-4 rounded-xl active:scale-95 transition">
                        Figures of Speech
                    </div>
                </Link>

                <Link to="/idioms">
                    <div className="bg-white shadow p-4 rounded-xl active:scale-95 transition">
                        Idioms
                    </div>
                </Link>

                <Link to="/quiz">
                    <div className="bg-blue-600 text-white shadow p-4 rounded-xl active:scale-95 transition">
                        🧠 Go to Quiz
                    </div>
                </Link>

            </div>

        </div>
    )
}

export default Topics