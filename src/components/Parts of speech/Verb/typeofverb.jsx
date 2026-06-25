import { Link } from "react-router-dom"
import NextButton from "../../Nextbutton"
import BackButton from "../../Backbutton"
import Tittle from "../../Tittle"
import Subtittle from "../../Subtittle"

function Typeofverb() {
    return (
        <div className="min-h-screen bg-gray-50 p-4">

            <Tittle text={"Types of Verb"} />

            {/* LIST CARD */}
            <div className="bg-white shadow rounded-xl p-5 mt-4">

                <Subtittle text={"Verb Categories"} />

                <ol className="list-decimal pl-5 space-y-1 text-gray-700">
                    <li>Action verbs</li>
                    <li>Linking verbs</li>
                    <li>Helping (Auxiliary) verbs</li>
                    <li>Modal verbs</li>
                    <li>Transitive verbs</li>
                    <li>Intransitive verbs</li>
                    <li>Regular verbs</li>
                    <li>Irregular verbs</li>
                </ol>
            </div>

            {/* CONTENT */}
            <div className="space-y-6 mt-6 text-gray-700 leading-relaxed">

                {/* 1 */}
                <div className="bg-white shadow rounded-xl p-5">
                    <Subtittle text={"1. Action Verbs"} />
                    <p>Action verbs describe what a subject does (physical or mental action).</p>

                    <p className="font-semibold mt-2">Examples:</p>
                    <p>Run, Write, Jump, Remember</p>

                    <p className="font-semibold mt-2">Sentences:</p>
                    <p>The students studied for their examinations.</p>
                    <p>Adam writes inspiring stories.</p>
                </div>

                {/* 2 */}
                <div className="bg-white shadow rounded-xl p-5">
                    <Subtittle text={"2. Linking Verbs"} />
                    <p>Linking verbs connect the subject to more information about it.</p>

                    <p className="font-semibold mt-2">Examples:</p>
                    <p>is, am, are, was, were, become, seem</p>

                    <p className="font-semibold mt-2">Sentences:</p>
                    <p>She is intelligent.</p>
                    <p>The food looks delicious.</p>
                </div>

                {/* 3 */}
                <div className="bg-white  shadow rounded-xl p-5">
                    <Subtittle text={"3. Helping (Auxiliary) Verbs"} />
                    <p>Help main verbs show tense, mood, or voice.</p>

                    <p className="font-semibold mt-2">Examples:</p>
                    <p>have, has, had, do, does, did, will, shall, be</p>

                    <p className="font-semibold mt-2">Sentences:</p>
                    <p>She has completed her assignment.</p>
                    <p>I will attend the meeting tomorrow.</p>
                </div>

                {/* 4 */}
                <div className="bg-white shadow rounded-xl p-5">
                    <Subtittle text={"4. Modal Verbs"} />
                    <p>Express ability, permission, or obligation.</p>

                    <p className="font-semibold mt-2">Examples:</p>
                    <p>can, could, may, might, must, should, would</p>

                    <p className="font-semibold mt-2">Sentences:</p>
                    <p>You should be honest.</p>
                    <p>We must submit the project on time.</p>
                </div>

                {/* 5 */}
                <div className="bg-white shadow rounded-xl p-5">
                    <Subtittle text={"5. Transitive Verbs"} />
                    <p>Require an object to complete meaning.</p>

                    <p className="font-semibold mt-2">Examples:</p>
                    <p>buy, read, write, build</p>

                    <p className="font-semibold mt-2">Sentences:</p>
                    <p>She bought a new dress.</p>
                    <p>The student read the novel.</p>
                </div>

                {/* 6 */}
                <div className="bg-white shadow rounded-xl p-5">
                    <Subtittle text={"6. Intransitive Verbs"} />
                    <p>Do not require an object.</p>

                    <p className="font-semibold mt-2">Examples:</p>
                    <p>sleep, arrive, laugh, cry</p>

                    <p className="font-semibold mt-2">Sentences:</p>
                    <p>The child slept peacefully.</p>
                    <p>They arrived early.</p>
                </div>

                {/* 7 */}
                <div className="bg-white shadow rounded-xl p-5">
                    <Subtittle text={"7. Regular Verbs"} />
                    <p>Form past tense by adding -d or -ed.</p>

                    <p className="font-semibold mt-2">Examples:</p>
                    <p>walk → walked, play → played</p>

                    <p className="font-semibold mt-2">Sentences:</p>
                    <p>We played football after school.</p>
                </div>

                {/* 8 */}
                <div className="bg-white shadow rounded-xl p-5">
                    <Subtittle text={"8. Irregular Verbs"} />
                    <p>Do not follow -ed pattern in past tense.</p>

                    <p className="font-semibold mt-2">Examples:</p>
                    <p>go → went, eat → ate, write → wrote</p>

                    <p className="font-semibold mt-2">Sentences:</p>
                    <p>He went to church.</p>
                    <p>I wrote a letter to my friend.</p>
                </div>

            </div>

            {/* NAVIGATION */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10">

                <Link to={"/verb"}>
                    <BackButton />
                </Link>

                <Link to={"/functionverb"}>
                    <NextButton />
                </Link>

            </div>

        </div>
    )
}

export default Typeofverb