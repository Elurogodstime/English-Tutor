import { Link } from "react-router-dom"
import BackButton from "../../Backbutton"
import NextButton from "../../Nextbutton"
import Tittle from "../../Tittle"
import Subtittle from "../../Subtittle"

function FunctionAdjective() {
    return (
        <div className="min-h-screen bg-gray-50 p-4">

            <Tittle text={"Functions of Adjectives"} />

            <div className="bg-white shadow rounded-xl p-5 mt-4 space-y-5 text-gray-700">

                <Subtittle text={"Functions of Adjectives"} />

                <p>
                    Adjectives perform important roles in sentences by describing nouns and pronouns.
                </p>

                <div className="bg-blue-50 p-4 rounded-lg">
                    <p>1. They describe nouns.</p>
                    <p>The <b>tall</b> boy is here.</p>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg">
                    <p>2. They show quantity.</p>
                    <p>I have <b>many</b> books.</p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                    <p>3. They show quality or condition.</p>
                    <p>The food is <b>delicious</b>.</p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                    <p>
                        Adjectives make communication clearer by adding detail and meaning to nouns.
                    </p>
                </div>

            </div>

            <div className="flex justify-center gap-6 mt-10">

                <Link to={"/typeofadjective"}>
                    <BackButton />
                </Link>

                <Link to={"/formationadjective"}>
                    <NextButton />
                </Link>

            </div>

        </div>
    )
}

export default FunctionAdjective