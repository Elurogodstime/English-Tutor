import { Link } from "react-router-dom"
import BackButton from "../../Backbutton"
import NextButton from "../../Nextbutton"
import Tittle from "../../Tittle"
import Subtittle from "../../Subtittle"

function TypeOfConjunction() {
    return (
        <div className="min-h-screen bg-gray-50 p-4">

            <Tittle text={"Types of Conjunction"} />

            <div className="bg-white shadow rounded-xl p-5 mt-4 space-y-6 text-gray-700">

                <ol className="list-decimal pl-5">
                    <li>Coordinating Conjunction</li>
                    <li>Subordinating Conjunction</li>
                    <li>Correlative Conjunction</li>
                </ol>

                <div className="bg-blue-50 p-4 rounded-lg">
                    <Subtittle text={"1. Coordinating Conjunction"} />
                    <p>Joins words or sentences of equal importance.</p>
                    <p><b>Examples:</b> and, but, or, so</p>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg">
                    <Subtittle text={"2. Subordinating Conjunction"} />
                    <p>Joins a main clause and a dependent clause.</p>
                    <p><b>Examples:</b> because, although, since, if</p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                    <Subtittle text={"3. Correlative Conjunction"} />
                    <p>Work in pairs to join sentences or words.</p>
                    <p><b>Examples:</b> either...or, neither...nor, both...and</p>
                </div>

            </div>

            <div className="flex justify-center gap-6 mt-10">

                <Link to={"/conjunction"}>
                    <BackButton />
                </Link>

                <Link to={"/functionconjunction"}>
                    <NextButton />
                </Link>

            </div>

        </div>
    )
}

export default TypeOfConjunction