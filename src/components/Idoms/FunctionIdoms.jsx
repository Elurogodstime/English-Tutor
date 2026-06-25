import { Link } from "react-router-dom"
import BackButton from "../Backbutton"
import NextButton from "../Nextbutton"
import Tittle from "../Tittle"
import Subtittle from "../Subtittle"

function FunctionIdioms() {
    return (
        <>
            <Tittle text={"Functions of Idioms"} />

            <div className="p-5 space-y-4">

                <ul className="list-disc pl-5">
                    <li>Make speech more natural</li>
                    <li>Express ideas creatively</li>
                    <li>Improve fluency in English</li>
                    <li>Make communication more interesting</li>
                </ul>

                <div>
                    <Subtittle text={"Summary"} />
                    <p>
                        Idioms help speakers and writers express meanings in a more
                        cultural and natural way instead of direct literal meaning.
                    </p>
                </div>

            </div>

            <div className="flex justify-center gap-5 mt-6">

                <Link to={"/typeofidoms"}>
                    <BackButton />
                </Link>

                <Link to={"/formationidoms"}>
                    <NextButton />
                </Link>

            </div>
        </>
    )
}

export default FunctionIdioms