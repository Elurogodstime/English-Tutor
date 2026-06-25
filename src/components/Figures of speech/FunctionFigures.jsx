import { Link } from "react-router-dom"
import BackButton from "../Backbutton"
import NextButton from "../Nextbutton"
import Tittle from "../Tittle"
import Subtittle from "../Subtittle"

function FunctionFigures() {
    return (
        <>
            <Tittle text={"Functions of Figures of Speech"} />

            <div className="p-5 space-y-4">

                <p>Figures of speech are used to:</p>

                <ul className="list-disc pl-5">
                    <li>Make writing more interesting</li>
                    <li>Create strong images in the mind</li>
                    <li>Express ideas more creatively</li>
                    <li>Emphasize a point</li>
                    <li>Make language more emotional and vivid</li>
                </ul>

                <div>
                    <Subtittle text={"Summary"} />

                    <p>
                        Figures of speech make communication more powerful,
                        expressive, and imaginative in both writing and speaking.
                    </p>
                </div>

            </div>

            <div className="flex justify-center gap-5 mt-6">

                <Link to={"/typesoffigures"}>
                    <BackButton />
                </Link>

                <Link to={"/formationfigures"}>
                    <NextButton />
                </Link>

            </div>
        </>
    )
}

export default FunctionFigures