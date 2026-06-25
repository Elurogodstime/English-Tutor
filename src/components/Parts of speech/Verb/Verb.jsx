import { Link } from "react-router-dom"
import NextButton from "../../Nextbutton"
import BackButton from "../../Backbutton"
import Tittle from "../../Tittle"
import Subtittle from "../../Subtittle"

function Verb() {
    return (
        <div className="min-h-screen bg-gray-50 p-4">

            {/* TITLE */}
            <Tittle text={"Meaning of Verb"} />

            {/* CONTENT CARD */}
            <div className="bg-white shadow rounded-xl p-5 mt-4 space-y-5 text-gray-700 leading-relaxed">

                <p>
                    <span className="font-semibold text-blue-700">Meaning of Verb:</span>
                </p>

                <p>
                    A verb is a word that shows an action, a state of being, or an occurrence.
                    It is one of the most important parts of speech because it gives meaning to a sentence
                    and tells us what is happening.
                </p>

                <p>
                    Every complete sentence must contain a verb. Without it, the sentence becomes incomplete
                    because there is no action or condition of the subject.
                </p>

                {/* EXAMPLES BOX */}
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
                    <h3 className="font-bold text-blue-700 mb-2">Examples:</h3>

                    <p>Hammed sings beautifully. <span className="text-sm text-gray-500">(action)</span></p>
                    <p>The baby slept peacefully. <span className="text-sm text-gray-500">(occurrence)</span></p>
                    <p>The boy is happy. <span className="text-sm text-gray-500">(state of being)</span></p>
                </div>

                {/* EXTRA EXPLANATION */}
                <div className="bg-gray-100 p-4 rounded-lg border">
                    <p>
                        Verbs help us express actions, feelings, conditions, and timing of events.
                        They are essential for building meaningful sentences in English.
                    </p>
                </div>

            </div>

            {/* NAVIGATION */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10">

                <Link to={"/types"}>
                    <BackButton />
                </Link>

                <Link to={"/functionverb"}>
                    <NextButton />
                </Link>

            </div>

        </div>
    )
}

export default Verb