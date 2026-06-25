import { Link } from "react-router-dom"
import BackButton from "../../Backbutton"
import NextButton from "../../Nextbutton"
import Tittle from "../../Tittle"
import Subtittle from "../../Subtittle"

function FunctionAdverb() {
    return (
        <div className="min-h-screen bg-gray-50 p-4">

            <Tittle text={"Functions of Adverbs"} />

            <div className="bg-white shadow rounded-xl p-5 mt-4 space-y-5 text-gray-700">

                <p>
                    Adverbs help to give more detail about verbs, adjectives, and other adverbs.
                </p>

                <div className="bg-blue-50 p-4 rounded-lg">
                    <p><b>1. They describe verbs:</b></p>
                    <p>She runs quickly.</p>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg">
                    <p><b>2. They describe adjectives:</b></p>
                    <p>He is very tall.</p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                    <p><b>3. They describe other adverbs:</b></p>
                    <p>She speaks very loudly.</p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                    <p>
                        Adverbs make sentences more precise by adding detail about actions and descriptions.
                    </p>
                </div>

            </div>

            <div className="flex justify-center gap-6 mt-10">

                <Link to={"/typeofadverb"}>
                    <BackButton />
                </Link>

                <Link to={"/formationadverb"}>
                    <NextButton />
                </Link>

            </div>

        </div>
    )
}

export default FunctionAdverb