import { Link } from "react-router-dom"
import NextButton from "../../Nextbutton"
import BackButton from "../../Backbutton"
import Tittle from "../../Tittle"
import Subtittle from "../../Subtittle"

function Interjection() {
    return (
        <div className="min-h-screen bg-gray-50 p-4">

            <Tittle text={"Meaning of Interjection"} />

            <div className="bg-white shadow rounded-xl p-5 mt-4 space-y-4 text-gray-700 leading-relaxed">

                <p>
                    An interjection is a word or phrase that expresses sudden feeling or emotion.
                    It is usually followed by an exclamation mark.
                </p>

                <p>
                    Interjections are not grammatically connected to other parts of a sentence.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
                    <Subtittle text={"Examples"} />

                    <p><b>Wow!</b> That is amazing.</p>
                    <p><b>Oh!</b> I didn’t know that.</p>
                    <p><b>Oops!</b> I made a mistake.</p>
                </div>

            </div>

            <div className="flex justify-center mt-10">
                <Link to={"/typeofinterjection"}>
                    <NextButton />
                </Link>
            </div>

        </div>
    )
}

export default Interjection