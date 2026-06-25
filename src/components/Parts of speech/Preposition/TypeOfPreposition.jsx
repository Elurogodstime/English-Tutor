import { Link } from "react-router-dom"
import BackButton from "../../Backbutton"
import NextButton from "../../Nextbutton"
import Tittle from "../../Tittle"
import Subtittle from "../../Subtittle"

function TypeOfPreposition() {
    return (
        <div className="min-h-screen bg-gray-50 p-4">

            <Tittle text={"Types of Preposition"} />

            <div className="bg-white shadow rounded-xl p-5 mt-4 space-y-6 text-gray-700">

                <ol className="list-decimal pl-5">
                    <li>Preposition of Time</li>
                    <li>Preposition of Place</li>
                    <li>Preposition of Direction</li>
                    <li>Preposition of Movement</li>
                </ol>

                <div className="bg-blue-50 p-4 rounded-lg">
                    <Subtittle text={"1. Preposition of Time"} />
                    <p>Shows when something happens.</p>
                    <p><b>Examples:</b> at, on, in</p>
                    <p>She came <b>at</b> 5pm.</p>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg">
                    <Subtittle text={"2. Preposition of Place"} />
                    <p>Shows position or location.</p>
                    <p><b>Examples:</b> on, in, under, beside</p>
                    <p>The phone is <b>on</b> the table.</p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                    <Subtittle text={"3. Preposition of Direction"} />
                    <p>Shows direction toward something.</p>
                    <p><b>Examples:</b> to, into, onto</p>
                    <p>He went <b>to</b> school.</p>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg">
                    <Subtittle text={"4. Preposition of Movement"} />
                    <p>Shows movement from one place to another.</p>
                    <p><b>Examples:</b> across, through, along</p>
                    <p>She walked <b>through</b> the gate.</p>
                </div>

            </div>

            <div className="flex justify-center gap-6 mt-10">

                <Link to={"/preposition"}>
                    <BackButton />
                </Link>

                <Link to={"/functionpreposition"}>
                    <NextButton />
                </Link>

            </div>

        </div>
    )
}

export default TypeOfPreposition