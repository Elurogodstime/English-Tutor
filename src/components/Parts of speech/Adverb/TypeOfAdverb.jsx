import { Link } from "react-router-dom"
import BackButton from "../../Backbutton"
import NextButton from "../../Nextbutton"
import Tittle from "../../Tittle"
import Subtittle from "../../Subtittle"

function TypeOfAdverb() {
    return (
        <div className="min-h-screen bg-gray-50 p-4">

            <Tittle text={"Types of Adverb"} />

            <div className="bg-white shadow rounded-xl p-5 mt-4 space-y-5 text-gray-700">

                <ol className="list-decimal pl-5">
                    <li>Adverb of Manner</li>
                    <li>Adverb of Time</li>
                    <li>Adverb of Place</li>
                    <li>Adverb of Frequency</li>
                    <li>Adverb of Degree</li>
                </ol>

                <div className="bg-blue-50 p-4 rounded-lg">
                    <Subtittle text={"1. Adverb of Manner"} />
                    <p>Shows how something is done.</p>
                    <p><b>Example:</b> He runs quickly.</p>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg">
                    <Subtittle text={"2. Adverb of Time"} />
                    <p>Shows when something happens.</p>
                    <p><b>Example:</b> She arrived yesterday.</p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                    <Subtittle text={"3. Adverb of Place"} />
                    <p>Shows where something happens.</p>
                    <p><b>Example:</b> He is here.</p>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg">
                    <Subtittle text={"4. Adverb of Frequency"} />
                    <p>Shows how often something happens.</p>
                    <p><b>Example:</b> She always prays.</p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                    <Subtittle text={"5. Adverb of Degree"} />
                    <p>Shows intensity or level.</p>
                    <p><b>Example:</b> He is very strong.</p>
                </div>

            </div>

            <div className="flex justify-center gap-6 mt-10">

                <Link to={"/adverb"}>
                    <BackButton />
                </Link>

                <Link to={"/formationadverb"}>
                    <NextButton />
                </Link>

            </div>

        </div>
    )
}

export default TypeOfAdverb