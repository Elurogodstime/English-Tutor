import { Link } from "react-router-dom"
import NextButton from "../../Nextbutton"
import BackButton from "../../Backbutton"
import Tittle from "../../Tittle"
import Subtittle from "../../Subtittle"

function Functionverb() {
    return (
        <div className="min-h-screen bg-gray-50 p-4">

            <Tittle text={"Usage of Verbs"} />

            {/* CONTENT CARD */}
            <div className="bg-white shadow rounded-xl p-5 mt-4 space-y-5 text-gray-700 leading-relaxed">

                <Subtittle text={"Usage of Verbs"} />

                <p>
                    Verbs perform several important functions in communication. They help us express actions,
                    states, time, and different meanings in a sentence.
                </p>

                {/* ACTION */}
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
                    <Subtittle text={"1. Showing Actions"} />
                    <p>The teacher explains the lesson.</p>
                    <p>The athlete runs every morning.</p>
                </div>

                {/* STATES */}
                <div className="bg-gray-100 p-4 rounded-lg">
                    <Subtittle text={"2. Describing States or Conditions"} />
                    <p>Dayo is excited about graduation.</p>
                    <p>The room seems quiet.</p>
                </div>

                {/* TENSE */}
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
                    <Subtittle text={"3. Showing Time (Tense)"} />
                    <p>I visited my grandmother yesterday. <span className="text-sm text-gray-500">(Past)</span></p>
                    <p>I visit her every weekend. <span className="text-sm text-gray-500">(Present)</span></p>
                    <p>I will visit her next week. <span className="text-sm text-gray-500">(Future)</span></p>
                </div>

                {/* MODAL USAGE */}
                <div className="bg-gray-100 p-4 rounded-lg">
                    <Subtittle text={"4. Expressing Ability, Permission & Obligation"} />
                    <p>She may attend the event.</p>
                    <p>You can use my laptop.</p>
                    <p>We must follow the rules.</p>
                </div>

                {/* SUMMARY */}
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg">
                    <Subtittle text={"Summary"} />

                    <p>
                        Verbs are the engine of a sentence. They drive meaning by showing actions,
                        states, and timing. Understanding verbs helps learners communicate clearly
                        and express thoughts effectively.
                    </p>
                </div>

            </div>

            {/* NAVIGATION */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10">

                <Link to={"/typesofverb"}>
                    <BackButton />
                </Link>

                <Link to={"/types"}>
                    <NextButton />
                </Link>

            </div>

        </div>
    )
}

export default Functionverb