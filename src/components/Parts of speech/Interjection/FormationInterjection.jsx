import { Link } from "react-router-dom"
import BackButton from "../../Backbutton"
import EndButton from "../../EndButton"
import Tittle from "../../Tittle"
import Subtittle from "../../Subtittle"

function FormationInterjection() {
    return (
        <div className="min-h-screen bg-gray-50 p-4">

            <Tittle text={"Formation and Usage of Interjections"} />

            <div className="bg-white shadow rounded-xl p-5 mt-4 space-y-6 text-gray-700">

                <p>
                    Interjections are not formed through grammatical rules.
                    They are fixed words or sounds used to express emotions.
                </p>

                <div className="bg-blue-50 p-4 rounded-lg">
                    <Subtittle text={"1. Single-word Interjections"} />
                    <p>Wow, Oh, Ouch, Hey, Alas</p>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg">
                    <Subtittle text={"2. Phrase Interjections"} />
                    <p>Oh my God!, Good heavens!, What a pity!</p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                    <Subtittle text={"Summary"} />
                    <p>
                        Interjections are spontaneous expressions of emotion
                        and do not follow formation rules like other parts of speech.
                    </p>
                </div>

            </div>

            <div className="flex justify-center gap-6 mt-10">

                <Link to={"/functioninterjection"}>
                    <BackButton />
                </Link>

                <Link to={"/types"}>
                    <EndButton />
                </Link>

            </div>

        </div>
    )
}

export default FormationInterjection