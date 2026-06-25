import { Link } from "react-router-dom"
import NextButton from "../../Nextbutton"
import BackButton from "../../Backbutton"
import Tittle from "../../Tittle"

function FunctionPronoun() {
    return (
        <div className="min-h-screen bg-gray-50 p-4">

            {/* TITLE */}
            <Tittle text={"Functions of Pronouns"} />

            {/* MAIN CARD */}
            <div className="bg-white shadow rounded-xl p-5 mt-4">

                <p className="font-semibold text-blue-700 mb-4">
                    Pronouns perform several important functions in language:
                </p>

                {/* LIST */}
                <ul className="space-y-3 text-gray-700">
                    <li className="flex gap-2">
                        <span className="text-blue-600">•</span>
                        They replace nouns to avoid repetition.
                    </li>

                    <li className="flex gap-2">
                        <span className="text-blue-600">•</span>
                        They improve the flow and clarity of communication.
                    </li>

                    <li className="flex gap-2">
                        <span className="text-blue-600">•</span>
                        They indicate possession and ownership.
                    </li>

                    <li className="flex gap-2">
                        <span className="text-blue-600">•</span>
                        They help in asking questions.
                    </li>

                    <li className="flex gap-2">
                        <span className="text-blue-600">•</span>
                        They connect clauses within sentences.
                    </li>

                    <li className="flex gap-2">
                        <span className="text-blue-600">•</span>
                        They emphasize particular persons or things.
                    </li>

                    <li className="flex gap-2">
                        <span className="text-blue-600">•</span>
                        They express relationships between individuals or groups.
                    </li>
                </ul>

            </div>

            {/* NAV BUTTONS */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10">

                <Link to={"/typeofpronoun"}>
                    <BackButton />
                </Link>

                <Link to={"/formationnoun"}>
                    <NextButton />
                </Link>

            </div>

        </div>
    )
}

export default FunctionPronoun