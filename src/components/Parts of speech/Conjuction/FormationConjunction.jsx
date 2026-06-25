import { Link } from "react-router-dom"
import BackButton from "../../Backbutton"
import EndButton from "../../Endbutton"
import Tittle from "../../Tittle"
import Subtittle from "../../Subtittle"

function FormationConjunction() {
    return (
        <div className="min-h-screen bg-gray-50 p-4">

            <Tittle text={"Formation and Usage of Conjunctions"} />

            <div className="bg-white shadow rounded-xl p-5 mt-4 space-y-6 text-gray-700">

                <p>
                    Conjunctions are not usually “formed” like verbs or adjectives.
                    They are fixed words or word pairs used to connect ideas.
                </p>

                <div className="bg-blue-50 p-4 rounded-lg">
                    <Subtittle text={"1. Single-word Conjunctions"} />
                    <p>and, but, or, so, because</p>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg">
                    <Subtittle text={"2. Paired Conjunctions"} />
                    <p>either...or</p>
                    <p>neither...nor</p>
                    <p>both...and</p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                    <Subtittle text={"Summary"} />
                    <p>
                        Conjunctions are mainly fixed words used to connect ideas.
                        They help improve sentence flow and clarity.
                    </p>
                </div>

            </div>

            <div className="flex justify-center gap-6 mt-10">

                <Link to={"/functionconjunction"}>
                    <BackButton />
                </Link>

                <Link to={"/types"}>
                    <EndButton />
                </Link>

            </div>

        </div>
    )
}

export default FormationConjunction