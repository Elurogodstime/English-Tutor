import { Link } from "react-router-dom"
import NextButton from "../../Nextbutton"
import BackButton from "../../Backbutton"
import Tittle from "../../Tittle"
import Subtittle from "../../Subtittle"

function Conjunction() {
    return (
        <div className="min-h-screen bg-gray-50 p-4">

            <Tittle text={"Meaning of Conjunction"} />

            <div className="bg-white shadow rounded-xl p-5 mt-4 space-y-4 text-gray-700 leading-relaxed">

                <p>
                    A conjunction is a word that is used to join words, phrases, or sentences together.
                </p>

                <p>
                    It helps to make sentences more connected and meaningful instead of short, separate ideas.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
                    <Subtittle text={"Examples"} />

                    <p>I want bread <b>and</b> butter.</p>
                    <p>She is tired <b>but</b> happy.</p>
                    <p>He studied hard <b>so</b> he passed.</p>
                </div>

            </div>

             <div className="flex justify-center mt-10">
                <Link to={"/types"}>
                    <BackButton />
                </Link>
            </div>

            <div className="flex justify-center mt-10">
                <Link to={"/typeofconjunction"}>
                    <NextButton />
                </Link>
            </div>

        </div>
    )
}

export default Conjunction