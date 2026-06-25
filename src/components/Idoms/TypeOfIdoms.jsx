import { Link } from "react-router-dom"
import BackButton from "../Backbutton"
import NextButton from "../Nextbutton"
import Tittle from "../Tittle"
import Subtittle from "../Subtittle"

function TypeOfIdioms() {
    return (
        <>
            <Tittle text={"Common Idioms and Their Meanings"} />

            <div className="p-5 space-y-5">

                <div>
                    <Subtittle text={"1. Break the ice"} />
                    <p>Meaning: To start a conversation</p>
                </div>

                <div>
                    <Subtittle text={"2. Hit the nail on the head"} />
                    <p>Meaning: To describe something exactly right</p>
                </div>

                <div>
                    <Subtittle text={"3. Spill the beans"} />
                    <p>Meaning: To reveal a secret</p>
                </div>

                <div>
                    <Subtittle text={"4. Piece of cake"} />
                    <p>Meaning: Something very easy</p>
                </div>

                <div>
                    <Subtittle text={"5. Under the weather"} />
                    <p>Meaning: Feeling sick</p>
                </div>

            </div>

            <div className="flex justify-center gap-5 mt-6">

                <Link to={"/idioms"}>
                    <BackButton />
                </Link>

                <Link to={"/functionidoms"}>
                    <NextButton />
                </Link>

            </div>
        </>
    )
}

export default TypeOfIdioms