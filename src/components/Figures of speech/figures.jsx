import { Link } from "react-router-dom"
import NextButton from "../Nextbutton"
import BackButton from "../Backbutton"
import Tittle from "../Tittle"
import Subtittle from "../Subtittle"

function FiguresSpeech() {
    return (
        <>
            <Tittle text={"Meaning of Figures of Speech"} />

            <div className="p-5 space-y-4">

                <p>
                    Figures of speech are words or expressions used in a non-literal way
                    to make language more creative, expressive, and meaningful.
                </p>

                <p>
                    They help writers and speakers describe ideas in a more vivid and imaginative way.
                </p>

                <div>
                    <Subtittle text={"Example:"} />

                    <p>
                        He is as brave as a lion. (This does not mean he is a lion, but that he is very brave)
                    </p>
                </div>

            </div>

            <div className="flex justify-center mt-6">
                <Link to={"/typesoffigures"}>
                    <NextButton />
                </Link>
            </div>
        </>
    )
}

export default FiguresSpeech