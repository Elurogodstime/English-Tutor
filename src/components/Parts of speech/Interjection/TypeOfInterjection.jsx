import { Link } from "react-router-dom"
import BackButton from "../../Backbutton"
import NextButton from "../../Nextbutton"
import Tittle from "../../Tittle"
import Subtittle from "../../Subtittle"

function TypeOfInterjection() {
    return (
        <div className="min-h-screen bg-gray-50 p-4">

            <Tittle text={"Types of Interjection"} />

            <div className="bg-white shadow rounded-xl p-5 mt-4 space-y-6 text-gray-700">

                <ol className="list-decimal pl-5">
                    <li>Interjection of Joy</li>
                    <li>Interjection of Surprise</li>
                    <li>Interjection of Pain</li>
                    <li>Interjection of Greeting</li>
                    <li>Interjection of Approval</li>
                </ol>

                <div className="bg-blue-50 p-4 rounded-lg">
                    <Subtittle text={"1. Joy"} />
                    <p><b>Examples:</b> Hurray!, Wow!</p>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg">
                    <Subtittle text={"2. Surprise"} />
                    <p><b>Examples:</b> Oh!, What!, Really!</p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                    <Subtittle text={"3. Pain"} />
                    <p><b>Examples:</b> Ouch!, Ah!</p>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg">
                    <Subtittle text={"4. Greeting"} />
                    <p><b>Examples:</b> Hello!, Hi!, Hey!</p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                    <Subtittle text={"5. Approval"} />
                    <p><b>Examples:</b> Bravo!, Well done!</p>
                </div>

            </div>

            <div className="flex justify-center gap-6 mt-10">

                <Link to={"/interjection"}>
                    <BackButton />
                </Link>

                <Link to={"/functioninterjection"}>
                    <NextButton />
                </Link>

            </div>

        </div>
    )
}

export default TypeOfInterjection