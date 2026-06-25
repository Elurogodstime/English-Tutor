import { Link } from "react-router-dom"
import BackButton from "../../Backbutton"
import NextButton from "../../Nextbutton"
import Tittle from "../../Tittle"
import Subtittle from "../../Subtittle"

function FunctionConjunction() {
    return (
        <div className="min-h-screen bg-gray-50 p-4">

            <Tittle text={"Functions of Conjunction"} />

            <div className="bg-white shadow rounded-xl p-5 mt-4 space-y-5 text-gray-700">

                <p>
                    Conjunctions are used to connect ideas and make sentences smoother and more meaningful.
                </p>

                <div className="bg-blue-50 p-4 rounded-lg">
                    <p><b>1. They join words:</b></p>
                    <p>Rice <b>and</b> beans</p>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg">
                    <p><b>2. They join phrases:</b></p>
                    <p>In the house <b>or</b> at school</p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                    <p><b>3. They join sentences:</b></p>
                    <p>I was tired <b>but</b> I continued working.</p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                    <p>
                        Conjunctions improve fluency and help ideas flow smoothly in communication.
                    </p>
                </div>

            </div>

            <div className="flex justify-center gap-6 mt-10">

                <Link to={"/typeofconjunction"}>
                    <BackButton />
                </Link>

                <Link to={"/formationconjunction"}>
                    <NextButton />
                </Link>

            </div>

        </div>
    )
}

export default FunctionConjunction