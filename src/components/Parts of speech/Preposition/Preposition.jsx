import { Link } from "react-router-dom"
import NextButton from "../../Nextbutton"
import BackButton from "../../Backbutton"
import Tittle from "../../Tittle"
import Subtittle from "../../Subtittle"

function Preposition() {
    return (
        <div className="min-h-screen bg-gray-50 p-4">

            <Tittle text={"Meaning of Preposition"} />

            <div className="bg-white shadow rounded-xl p-5 mt-4 space-y-4 text-gray-700 leading-relaxed">

                <p>
                    A preposition is a word that shows the relationship between a noun or pronoun
                    and other words in a sentence.
                </p>

                <p>
                    It often shows location, time, direction, or position.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
                    <Subtittle text={"Examples"} />

                    <p>The book is <b>on</b> the table.</p>
                    <p>She went <b>to</b> school.</p>
                    <p>He is sitting <b>under</b> the tree.</p>
                </div>

            </div>

            <div className="flex justify-center mt-10">
                <Link to={"/typeofpreposition"}>
                    <NextButton />
                </Link>
            </div>

        </div>
    )
}

export default Preposition