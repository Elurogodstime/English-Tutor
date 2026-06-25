import { Link } from "react-router-dom"
import NextButton from "../../Nextbutton"
import BackButton from "../../Backbutton"
import Tittle from "../../Tittle"
import Subtittle from "../../Subtittle"

function Adjective() {
    return (
        <div className="min-h-screen bg-gray-50 p-4">

            <Tittle text={"Meaning of Adjective"} />

            <div className="bg-white shadow rounded-xl p-5 mt-4 space-y-4 text-gray-700 leading-relaxed">

                <p>
                    An adjective is a word that describes or gives more information about a noun or pronoun.
                    It tells us the quality, size, color, shape, quantity, or condition of something.
                </p>

                <p>
                    Adjectives make sentences more detailed and interesting by helping us understand what kind
                    of person, place, or thing is being talked about.
                </p>

                {/* EXAMPLES */}
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
                    <Subtittle text={"Examples"} />

                    <p>The beautiful girl is singing.</p>
                    <p>He bought a big house.</p>
                    <p>The sky is blue.</p>
                </div>

            </div>

             <div className="flex justify-center gap-6 mt-10">
                <Link to={"/types"}>
                    <BackButton />
                </Link>
            </div>

            <div className="flex justify-center gap-6 mt-10">
                <Link to={"/typesofadjective"}>
                    <NextButton />
                </Link>
            </div>

        </div>
    )
}

export default Adjective