import { Link } from "react-router-dom"
import NextButton from "../Nextbutton"
import BackButton from "../Backbutton"
import Tittle from "../Tittle"

function Idioms() {
    return (
        <>
            <Tittle text={"Meaning of Idioms"} />

            <div className="p-5 space-y-4">

                <p>
                    An idiom is a group of words whose meaning is different from the
                    literal meaning of the individual words.
                </p>

                <p>
                    Idioms are expressions used in everyday language to make communication
                    more natural and interesting.
                </p>

                <div>
                    <p className="font-bold">Example:</p>
                    <p>“Break the ice” means to start a conversation in a social situation.</p>
                </div>

            </div>

            <div className="flex justify-center mt-6">
                <Link to={"/"}>
                    <BackButton />
                </Link>
            </div>

            <div className="flex justify-center mt-6">
                <Link to={"/typeofidoms"}>
                    <NextButton />
                </Link>
            </div>
        </>
    )
}

export default Idioms