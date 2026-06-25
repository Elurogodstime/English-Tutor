import { Link } from "react-router-dom"
import BackButton from "../Backbutton"
import EndButton from "../EndButton"
import Tittle from "../Tittle"
import Subtittle from "../Subtittle"

function FormationFigures() {
    return (
        <>
            <Tittle text={"Formation of Figures of Speech"} />

            <div className="p-5 space-y-4">

                <p>
                    Figures of speech are not formed like normal grammar rules.
                    They are created by using language creatively.
                </p>

                <div>
                    <Subtittle text={"They are formed through:"} />

                    <ul className="list-disc pl-5">
                        <li>Comparison (Simile, Metaphor)</li>
                        <li>Sound repetition (Alliteration, Onomatopoeia)</li>
                        <li>Exaggeration (Hyperbole)</li>
                        <li>Human attribution (Personification)</li>
                        <li>Opposition of meaning (Irony)</li>
                    </ul>
                </div>

                <div>
                    <Subtittle text={"Conclusion"} />

                    <p>
                        Figures of speech are not fixed rules but creative expressions
                        used to make language more powerful and expressive.
                    </p>
                </div>

            </div>

            <div className="flex justify-center gap-5 mt-6">

                <Link to={"/functionfigures"}>
                    <BackButton />
                </Link>

                <Link to={"/"}>
                    <EndButton />
                </Link>

            </div>
        </>
    )
}

export default FormationFigures