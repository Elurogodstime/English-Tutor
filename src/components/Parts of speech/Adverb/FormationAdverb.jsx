import { Link } from "react-router-dom"
import BackButton from "../../Backbutton"
import NextButton from "../../Nextbutton"
import Tittle from "../../Tittle"
import Subtittle from "../../Subtittle"

function FormationAdverb() {
    return (
        <div className="min-h-screen bg-gray-50 p-4">

            <Tittle text={"Formation of Adverbs"} />

            <div className="bg-white shadow rounded-xl p-5 mt-4 space-y-6 text-gray-700">

                <p>
                    Most adverbs are formed from adjectives by adding the suffix <b>-ly</b>.
                </p>

                <div className="bg-blue-50 p-4 rounded-lg">
                    <Subtittle text={"1. From Adjectives"} />
                    <p>Quick → Quickly</p>
                    <p>Slow → Slowly</p>
                    <p>Beautiful → Beautifully</p>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg">
                    <Subtittle text={"2. Irregular Forms"} />
                    <p>Good → Well</p>
                    <p>Fast → Fast</p>
                    <p>Hard → Hard</p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                    <Subtittle text={"Summary"} />
                    <p>
                        Adverbs are mainly formed by adding -ly to adjectives,
                        but some do not follow this rule.
                    </p>
                </div>

            </div>

            <div className="flex justify-center gap-6 mt-10">

                <Link to={"/functionadverb"}>
                    <BackButton />
                </Link>

                <Link to={"/types"}>
                    <NextButton />
                </Link>

            </div>

        </div>
    )
}

export default FormationAdverb