import { Link } from "react-router-dom"
import BackButton from "../../Backbutton"
import EndButton from "../../Endbutton"
import Tittle from "../../Tittle"
import Subtittle from "../../Subtittle"

function FormationAdjective() {
    return (
        <div className="min-h-screen bg-gray-50 p-4">

            <Tittle text={"Formation of Adjectives"} />

            <div className="bg-white shadow rounded-xl p-5 mt-4 space-y-6 text-gray-700">

                <p>
                    Adjectives can be formed from other words such as nouns, verbs, and even other adjectives.
                    This helps expand vocabulary and express ideas more clearly.
                </p>

                {/* FROM NOUNS */}
                <div className="bg-blue-50 p-4 rounded-lg">
                    <Subtittle text={"1. From Nouns"} />
                    <p>Noun → Adjective</p>
                    <p>Beauty → Beautiful</p>
                    <p>Power → Powerful</p>
                    <p>Danger → Dangerous</p>
                </div>

                {/* FROM VERBS */}
                <div className="bg-gray-100 p-4 rounded-lg">
                    <Subtittle text={"2. From Verbs"} />
                    <p>Verb → Adjective</p>
                    <p>Attract → Attractive</p>
                    <p>Act → Active</p>
                    <p>Talk → Talkative</p>
                </div>

                {/* FROM OTHER ADJECTIVES */}
                <div className="bg-blue-50 p-4 rounded-lg">
                    <Subtittle text={"3. From Other Words"} />
                    <p>Child → Childish</p>
                    <p>Nation → National</p>
                    <p>Culture → Cultural</p>
                </div>

                {/* SUMMARY */}
                <div className="bg-green-50 p-4 rounded-lg">
                    <Subtittle text={"Summary"} />
                    <p>
                        Adjectives are often formed by adding suffixes like -ful, -less, -ous, -ive, -al, etc.
                        This makes English richer and more expressive.
                    </p>
                </div>

            </div>

            {/* NAVIGATION */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10">

                <Link to={"/typeofadjective"}>
                    <BackButton />
                </Link>

                <Link to={"/types"}>
                    <EndButton />
                </Link>

            </div>

        </div>
    )
}

export default FormationAdjective