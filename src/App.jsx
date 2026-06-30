import './App.css'
import Home from './components/home'
import Nav from './components/nav'
import Footer from './components/footer'
import { Route, Routes } from "react-router-dom"

import Types from "./components/Parts of speech/Noun/TypesOfPartsOfSpeech"
import Register from './components/Register/Register'

import Figures from "./components/Figures of speech/figures"
import TypesOfFigures from "./components/Figures of speech/TypesOfFigures"
import FunctionFigures from "./components/Figures of speech/FunctionFigures"
import FormationFigures from "./components/Figures of speech/FormationFigures"

import Idoms from "./components/Idoms/idoms"
import TypeOfIdoms from "./components/Idoms/TypeOfIdoms"
import FunctionIdoms from "./components/Idoms/FunctionIdoms"
import FormationIdoms from "./components/Idoms/FormationIdoms"


import Quiz from './components/Quiz/quiz'
import Reviews from "./components/Review/review"
import Dashboard from "./components/Dashboard/Dashboard"
import Welcome from "./components/Welcome/welcome"

import Noun from './components/Parts of speech/Noun/Noun'
import TypeOfNoun from './components/Parts of speech/Noun/TypesOfNoun'
import FunctionNoun from './components/Parts of speech/Noun/functionofnoun'
import Formation from './components/Parts of speech/Noun/formationnoun'

import Scroll from './components/scroll'

import Pronoun from './components/Parts of speech/Pronoun/Pronoun'
import TypePronoun from './components/Parts of speech/Pronoun/TypesOfPronoun'
import FunctionPronoun from './components/Parts of speech/Pronoun/functions'
import FormationPronoun from './components/Parts of speech/Pronoun/formation'

import Verb from './components/Parts of speech/Verb/Verb'
import Typeofverb from './components/Parts of speech/Verb/typeofverb'
import Functionverb from './components/Parts of speech/Verb/functionverb'

/* ================= NEW PARTS OF SPEECH ================= */
import Adverb from './components/Parts of speech/Adverb/Adverb'
import TypeofAdverb from './components/Parts of speech/Adverb/TypeOfAdverb'
import FormationAdverb from './components/Parts of speech/Adverb/FormationAdverb'
import FuctionAdverb from './components/Parts of speech/Adverb/FunctionAdverb'

import Adjective from './components/Parts of speech/Adjective/Adjective'
import TypeOfAdjective from './components/Parts of speech/Adjective/TypeOfAdjective'
import FormationAdjective from './components/Parts of speech/Adjective/FormationAdjective'
import FunctionAdjective from './components/Parts of speech/Adjective/FunctionAdjective'

import Preposition from './components/Parts of speech/Preposition/Preposition'
import TypeOfPreposition from './components/Parts of speech/Preposition/TypeOfPreposition'
import FunctionPreposition from './components/Parts of speech/Preposition/FunctionPreposition'
import FormationPreposition from './components/Parts of speech/Preposition/FormationPreposition'


import Conjunction from './components/Parts of speech/Conjuction/conjunction'
import TypeOfConjunction from './components/Parts of speech/Conjuction/TypeOfConjunction'
import FunctionConjunction from './components/Parts of speech/Conjuction/FunctionConjunction'
import FormationConjunction from './components/Parts of speech/Conjuction/FormationConjunction'

import Interjection from './components/Parts of speech/Interjection/Interjection'
import TypeOfInterjection from './components/Parts of speech/Interjection/TypeOfInterjection'
import FunctionInterjection from './components/Parts of speech/Interjection/FunctionInterjection'
import FormationInterjection from './components/Parts of speech/Interjection/FormationInterjection'




function App() {
  return (
    <>
      <Nav />
      <Scroll />

      <Routes>

        {/* Register */}
        <Route path='/' element={<Register />} />

        {/* Welcome */}
        <Route path='/welcome' element={<Welcome />} />

            {/* Home */}
        <Route path='home' element={<Home />} />

        {/* QUIZ */}
        <Route path='/quiz' element={<Quiz />} />

         {/*reviews */}
        <Route path='/review' element={<Reviews />} />

         

         {/*Dashboard */}
        <Route path='/dashboard' element={<Dashboard />} />

        {/* FIGURES + IDIOMS */}
        <Route path='/figures' element={<Figures />} />
        <Route path='/typesoffigures' element={<TypesOfFigures />} />
        <Route path='/functionfigures' element={<FunctionFigures />} />
        <Route path='/formationfigures' element={<FormationFigures />} />

        <Route path='/idoms' element={<Idoms />} />
        <Route path='/typeofidoms' element={<TypeOfIdoms />} />
        <Route path='/functionidoms' element={<FunctionIdoms />} />
        <Route path='/formationidoms' element={<FormationIdoms />} />

        {/* ================= NOUN ================= */}
        <Route path='/types' element={<Types />} />
        <Route path='/noun' element={<Noun />} />
        <Route path='/typeofnoun' element={<TypeOfNoun />} />
        <Route path='/functionnoun' element={<FunctionNoun />} />
        <Route path='/formation' element={<Formation />} />

        {/* ================= PRONOUN ================= */}
        <Route path='/pronoun' element={<Pronoun />} />
        <Route path='/typeofpronoun' element={<TypePronoun />} />
        <Route path='/functionofpronoun' element={<FunctionPronoun />} />
        <Route path='/formationpronoun' element={<FormationPronoun />} />

        {/* ================= VERB ================= */}
        <Route path='/verb' element={<Verb />} />
        <Route path='/typesofverb' element={<Typeofverb />} />
        <Route path='/functionverb' element={<Functionverb />} />

        {/* ================= NEW ACTIVE ROUTES ================= */}
        <Route path='/adverb' element={<Adverb />} />
        <Route path='/typeofadverb' element={<Typeofverb />} />
        <Route path='/functionadverb' element={<Functionverb />} />
        <Route path='/formationadverb' element={<FormationAdverb />} />

         {/* ================= ADJECTIVE ================= */}
        <Route path='/adjective' element={<Adjective />} />
        <Route path='/typesofadjective' element={<TypeOfAdjective/>} />
        <Route path='/functionadjective' element={<FunctionAdjective/>} />
        <Route path='/formationadjective' element={<FormationAdjective />} />


        <Route path='/preposition' element={<Preposition />} />
          <Route path='/typeofpreposition' element={<TypeOfPreposition />} />
            <Route path='/functionpreposition' element={<FunctionPreposition />} />
              <Route path='/formationpreposition' element={<FormationPreposition />} />


        <Route path='/conjunction' element={<Conjunction />} />
         <Route path='/typeofconjunction' element={<TypeOfConjunction />} />
          <Route path='/functionconjunction' element={<FunctionConjunction />} />
           <Route path='/formationconjunction' element={<FormationConjunction />} />


        <Route path='/interjection' element={<Interjection />} />
        <Route path='/typeofinterjection' element={<TypeOfInterjection />} />
        <Route path='/functioninterjection' element={<FunctionInterjection />} />
        <Route path='/formationinterjection' element={<FormationInterjection />} />

      </Routes>

      <Footer />
    </>
  )
}

export default App