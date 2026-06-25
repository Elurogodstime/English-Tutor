import { Link } from "react-router-dom"
import NextButton from "../../Nextbutton"
import BackButton from "../../Backbutton"
import Tittle from "../../Tittle"

function Pronoun() {
    return (
        <div className="min-h-screen bg-gray-50 p-4">

            {/* TITLE */}
            <Tittle text={"Meaning Of Pronoun"} />

            {/* LESSON CARD */}
            <div className="bg-white shadow rounded-xl p-5 mt-4 space-y-5 text-gray-700 leading-relaxed">

                <p>
                    A <span className="font-semibold text-blue-700">pronoun</span> is a word that takes the place of a noun or noun phrase in a sentence.
                    It is used to avoid repeating the same noun, making communication clearer and more natural.
                </p>

                <p>
                    Pronouns help us refer to people, places, things, animals, or ideas without constantly repeating their names.
                </p>

                {/* EXAMPLE BOX */}
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
                    <h3 className="font-bold text-blue-700">Example:</h3>
                    <p>John is a diligent student. John attends lectures regularly.</p>
                    <p>John is a diligent student. <span className="font-semibold text-blue-700">He</span> attends lectures regularly.</p>
                </div>

                {/* EXPLANATION NOTE */}
                <div className="bg-gray-100 p-4 rounded-lg border">
                    <p className="italic text-gray-600">
                        In the second sentence, the pronoun <b>he</b> replaces the noun <b>John</b>,
                        making the sentence smoother and less repetitive.
                    </p>
                </div>

                <p>
                    Pronouns are an essential part of grammar because they improve clarity,
                    cohesion, and fluency in both spoken and written communication.
                </p>

            </div>

            {/* NAV BUTTONS */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">

                <Link to={"/types"}>
                    <BackButton />
                </Link>

                <Link to={"/typeofpronoun"}>
                    <NextButton />
                </Link>

            </div>

        </div>
    )
}

export default Pronoun