import { Link } from "react-router-dom"
import NextButton from "../../Nextbutton"
import BackButton from "../../Backbutton"
import Tittle from "../../Tittle"
import Subtittle from "../../Subtittle"

function Adverb() {
    return (
        <div className="min-h-screen bg-gray-50 p-4">

            <Tittle text={"Meaning of Adverb"} />

            <div className="bg-white shadow rounded-xl p-5 mt-4 space-y-4 text-gray-700 leading-relaxed">

                <p>
                    An adverb is a word that describes or gives more information about a verb,
                    an adjective, or another adverb.
                </p>

                <p>
                    It tells us how, when, where, how often, or to what extent something happens.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
                    <Subtittle text={"Examples"} />

                    <p>She speaks <b>quickly</b>.</p>
                    <p>He arrived <b>yesterday</b>.</p>
                    <p>The boy is <b>very</b> tall.</p>
                </div>

            </div>

               <div className="flex justify-center mt-10">
                <Link to={"/types"}>
                    <BackButton />
                </Link>
            </div>

            <div className="flex justify-center mt-10">
                <Link to={"/typeofadverb"}>
                    <NextButton />
                </Link>
            </div>

        </div>
    )
}

export default Adverb