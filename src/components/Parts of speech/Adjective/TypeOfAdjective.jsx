import { Link } from "react-router-dom"
import BackButton from "../../Backbutton"
import NextButton from "../../Nextbutton"
import Tittle from "../../Tittle"
import Subtittle from "../../Subtittle"

function TypeOfAdjective() {
    return (
        <div className="min-h-screen bg-gray-50 p-4">

            <Tittle text={"Types of Adjective"} />

            <div className="bg-white shadow rounded-xl p-5 mt-4 space-y-6 text-gray-700">

                <ol className="list-decimal pl-5">
                    <li>Descriptive Adjective</li>
                    <li>Quantitative Adjective</li>
                    <li>Demonstrative Adjective</li>
                    <li>Possessive Adjective</li>
                    <li>Interrogative Adjective</li>
                </ol>

                {/* 1 */}
                <div className="bg-blue-50 p-4 rounded-lg">
                    <Subtittle text={"1. Descriptive Adjective"} />
                    <p>It describes the quality of a noun.</p>
                    <p><b>Examples:</b> beautiful, tall, smart</p>
                </div>

                {/* 2 */}
                <div className="bg-gray-100 p-4 rounded-lg">
                    <Subtittle text={"2. Quantitative Adjective"} />
                    <p>It shows quantity or amount.</p>
                    <p><b>Examples:</b> some, many, few, much</p>
                </div>

                {/* 3 */}
                <div className="bg-blue-50 p-4 rounded-lg">
                    <Subtittle text={"3. Demonstrative Adjective"} />
                    <p>It points to specific things.</p>
                    <p><b>Examples:</b> this, that, these, those</p>
                </div>

                {/* 4 */}
                <div className="bg-gray-100 p-4 rounded-lg">
                    <Subtittle text={"4. Possessive Adjective"} />
                    <p>It shows ownership.</p>
                    <p><b>Examples:</b> my, your, his, her, our, their</p>
                </div>

                {/* 5 */}
                <div className="bg-blue-50 p-4 rounded-lg">
                    <Subtittle text={"5. Interrogative Adjective"} />
                    <p>It is used to ask questions.</p>
                    <p><b>Examples:</b> which, what, whose</p>
                </div>

            </div>

            <div className="flex justify-center gap-6 mt-10">

                <Link to={"/adjective"}>
                    <BackButton />
                </Link>

                <Link to={"/functionadjective"}>
                    <NextButton />
                </Link>
                

            </div>

        </div>
    )
}

export default TypeOfAdjective