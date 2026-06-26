import { Link } from "react-router-dom"
import BackButton from "../Backbutton"
import EndButton from "../Endbutton"
import Tittle from "../Tittle"
import Subtittle from "../Subtittle"

function FormationIdioms() {
    return (
        <>
            <Tittle text={"Formation of Idioms"} />

            <div className="p-5 space-y-4">

                <p>
                    Idioms are not formed using grammar rules.
                    They are fixed expressions that develop through usage over time.
                </p>

                <div>
                    <Subtittle text={"How idioms are formed:"} />

                    <ul className="list-disc pl-5">
                        <li>Historical usage</li>
                        <li>Cultural expressions</li>
                        <li>Metaphorical meanings</li>
                        <li>Everyday speech patterns</li>
                    </ul>
                </div>

                <div>
                    <Subtittle text={"Conclusion"} />

                    <p>
                        Idioms cannot usually be translated word-for-word.
                        Their meanings must be learned as complete expressions.
                    </p>
                </div>

            </div>

            <div className="flex justify-center gap-5 mt-6">

                <Link to={"/functionidoms"}>
                    <BackButton />
                </Link>

                <Link to={"/"}>
                    <EndButton />
                </Link>

            </div>
        </>
    )
}

export default FormationIdioms