import { Link } from "react-router-dom"
import BackButton from "../../Backbutton"
import NextButton from "../../Nextbutton"
import Tittle from "../../Tittle"
import Subtittle from "../../Subtittle"

function FunctionInterjection() {
    return (
        <div className="min-h-screen bg-gray-50 p-4">

            <Tittle text={"Functions of Interjection"} />

            <div className="bg-white shadow rounded-xl p-5 mt-4 space-y-5 text-gray-700">

                <p>
                    Interjections are used to express strong emotions quickly and clearly.
                </p>

                <div className="bg-blue-50 p-4 rounded-lg">
                    <p><b>1. Expressing emotion:</b></p>
                    <p>Wow! That’s great.</p>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg">
                    <p><b>2. Showing surprise:</b></p>
                    <p>Oh! I didn’t expect that.</p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                    <p><b>3. Expressing pain:</b></p>
                    <p>Ouch! That hurts.</p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                    <p>
                        Interjections make speech more expressive and emotional.
                    </p>
                </div>

            </div>

            <div className="flex justify-center gap-6 mt-10">

                <Link to={"/typeofinterjection"}>
                    <BackButton />
                </Link>

                <Link to={"/formationinterjection"}>
                    <NextButton />
                </Link>

            </div>

        </div>
    )
}

export default FunctionInterjection