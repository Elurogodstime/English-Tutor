import { Link } from "react-router-dom"
import NextButton from "../../Nextbutton"
import BackButton from "../../Backbutton"
import Tittle from "../../Tittle"

function Noun() {
    return (
        <div className="min-h-screen bg-gray-50 p-4">

            {/* TITLE */}
            <Tittle text={"Meaning of Noun"} />

            {/* LESSON CARD */}
            <div className="bg-white shadow-md rounded-xl p-5 mt-4 leading-relaxed text-gray-700 space-y-4">

                <p>
                    A <span className="font-semibold text-blue-700">noun</span> is a word that names a person, place, animal, thing, idea, quality, feeling, or event.
                    Nouns are fundamental elements of language because they help identify and describe the subjects and objects being discussed.
                </p>

                <p>
                    Every meaningful sentence typically contains at least one noun, either explicitly stated or implied.
                    Nouns enable effective communication by providing names for people, locations, objects, concepts, and experiences.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded">
                    <h3 className="font-bold text-blue-700">Example:</h3>
                    <p>
                        In the sentence “The student reads a book,” the words <b>student</b> and <b>book</b> are nouns because they name a person and a thing respectively.
                    </p>
                </div>

                <p>
                    Nouns can refer to tangible entities such as table, dog, and house, as well as intangible concepts like love, honesty, and freedom.
                    Because of their broad function, nouns serve as the foundation upon which sentences and ideas are constructed.
                </p>

            </div>

            {/* NAV BUTTONS */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">

                <Link to={"/types"}>
                    <BackButton />
                </Link>

                <Link to={"/typeofnoun"}>
                    <NextButton />
                </Link>

            </div>

        </div>
    )
}

export default Noun