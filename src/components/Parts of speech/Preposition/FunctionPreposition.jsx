import { Link } from "react-router-dom"
import BackButton from "../../Backbutton"
import NextButton from "../../Nextbutton"
import Tittle from "../../Tittle"
import Subtittle from "../../Subtittle"

function FunctionPreposition() {
    return (
        <div className="min-h-screen bg-gray-50 p-4">

            <Tittle text={"Functions of Prepositions"} />

            <div className="bg-white shadow rounded-xl p-5 mt-4 space-y-5 text-gray-700">

                <p>
                    Prepositions help show relationships between words in a sentence.
                </p>

                <div className="bg-blue-50 p-4 rounded-lg">
                    <p><b>1. They show location:</b></p>
                    <p>The bag is on the chair.</p>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg">
                    <p><b>2. They show time:</b></p>
                    <p>She arrived in the morning.</p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                    <p><b>3. They show direction:</b></p>
                    <p>He went to school.</p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                    <p>
                        Prepositions make sentences clearer by showing relationships between people,
                        places, and things.
                    </p>
                </div>

            </div>

            <div className="flex justify-center gap-6 mt-10">

                <Link to={"/typeofpreposition"}>
                    <BackButton />
                </Link>

                <Link to={"/formationpreposition"}>
                    <NextButton />
                </Link>

            </div>

        </div>
    )
}

export default FunctionPreposition