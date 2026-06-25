import { Link } from "react-router-dom"
import NextButton from "../../Nextbutton"
import BackButton from "../../Backbutton"
import Tittle from "../../Tittle"
import EndButton from "../../EndButton"

function FormationPronoun() {
    return (
        <div className="min-h-screen bg-gray-50 p-4">

            {/* TITLE */}
            <Tittle text={"Formation of Pronouns"} />

            {/* CONTENT CARD */}
            <div className="bg-white shadow rounded-xl p-5 mt-4 space-y-6 text-gray-700 leading-relaxed">

                <p>
                    <span className="font-semibold text-blue-700">Formation of Pronouns:</span>
                </p>

                <p>
                    Unlike nouns, pronouns are generally not formed through regular word-formation processes.
                    Most pronouns exist as independent words in the language.
                </p>

                <p>
                    However, some pronouns—especially reflexive pronouns—are formed by combining a possessive adjective or object pronoun with <b>-self</b> or <b>-selves</b>.
                </p>

                {/* EXAMPLES BOX */}
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
                    <h3 className="font-bold text-blue-700 mb-2">Examples:</h3>
                    <ul className="space-y-1">
                        <li>my + self = myself</li>
                        <li>your + self = yourself</li>
                        <li>him + self = himself</li>
                        <li>them + selves = themselves</li>
                    </ul>
                </div>

                {/* CONCLUSION BOX */}
                <div className="bg-gray-100 border rounded-lg p-4">
                    <h3 className="font-bold text-gray-800 mb-2">Conclusion</h3>

                    <p>
                        A pronoun is a word used in place of a noun to avoid repetition and improve clarity in communication.
                    </p>

                    <p className="mt-2">
                        It helps make sentences shorter, clearer, and more natural.
                    </p>

                    <p className="mt-2">
                        The major types of pronouns include personal, possessive, reflexive, demonstrative, interrogative,
                        relative, indefinite, reciprocal, intensive, and distributive pronouns.
                    </p>
                </div>

            </div>

            {/* NAVIGATION */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10">

                <Link to={"/functionnoun"}>
                    <BackButton />
                </Link>

                <Link to={"/"}>
                    <EndButton />
                </Link>

            </div>

        </div>
    )
}

export default FormationPronoun