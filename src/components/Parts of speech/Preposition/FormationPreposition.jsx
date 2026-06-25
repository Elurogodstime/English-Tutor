import { Link } from "react-router-dom"
import BackButton from "../../Backbutton"
import EndButton from "../../Endbutton"
import Tittle from "../../Tittle"
import Subtittle from "../../Subtittle"

function FormationPreposition() {
    return (
        <div className="min-h-screen bg-gray-50 p-4">

            <Tittle text={"Formation and Usage of Prepositions"} />

            <div className="bg-white shadow rounded-xl p-5 mt-4 space-y-6 text-gray-700 leading-relaxed">

                <p>
                    Prepositions are not usually “formed” like verbs or adjectives.
                    Instead, they are fixed words or sometimes combined to form
                    compound prepositions.
                </p>

                {/* SIMPLE PREPOSITIONS */}
                <div className="bg-blue-50 p-4 rounded-lg">
                    <Subtittle text={"1. Simple Prepositions"} />
                    <p>These are single-word prepositions.</p>
                    <p><b>Examples:</b> in, on, at, under, over, beside</p>
                </div>

                {/* COMPOUND PREPOSITIONS */}
                <div className="bg-gray-100 p-4 rounded-lg">
                    <Subtittle text={"2. Compound Prepositions"} />
                    <p>These are formed by joining words together.</p>
                    <p><b>Examples:</b> into, onto, within, without, upon</p>
                </div>

                {/* PHRASE PREPOSITIONS */}
                <div className="bg-blue-50 p-4 rounded-lg">
                    <Subtittle text={"3. Phrase Prepositions"} />
                    <p>These are groups of words acting as a preposition.</p>
                    <p><b>Examples:</b> in front of, in spite of, because of</p>
                </div>

                {/* USAGE SUMMARY */}
                <div className="bg-green-50 p-4 rounded-lg">
                    <Subtittle text={"Summary"} />

                    <p>
                        Prepositions are fixed words used to show relationships between nouns and other words.
                        They help indicate place, time, direction, and position in a sentence.
                    </p>
                </div>

            </div>

            {/* NAVIGATION */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10">

                <Link to={"/functionpreposition"}>
                    <BackButton />
                </Link>

                <Link to={"/types"}>
                    <EndButton />
                </Link>

            </div>

        </div>
    )
}

export default FormationPreposition