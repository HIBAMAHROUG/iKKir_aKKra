import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import EnglishUnitOne from './pages/EnglishUnitOne'
import EnglishTenses from './pages/EnglishTenses'
import EnglishReading from './pages/EnglishReading'
import EnglishSixthReview from './pages/EnglishSixthReview'
import EnglishSixthReviewQuiz from './pages/EnglishSixthReviewQuiz'
import EnglishSeventh from './pages/EnglishSeventh'
import EnglishSeventhQuiz from './pages/EnglishSeventhQuiz'
import EnglishSeventhUnitTwo from './pages/EnglishSeventhUnitTwo'
import EnglishSeventhUnitTwoQuiz from './pages/EnglishSeventhUnitTwoQuiz'
import EnglishSeventhMidterm from './pages/EnglishSeventhMidterm'
import EnglishSeventhMidtermQuiz from './pages/EnglishSeventhMidtermQuiz'
import EnglishSeventhReview from './pages/EnglishSeventhReview'
import EnglishSeventhReviewQuiz from './pages/EnglishSeventhReviewQuiz'
import EnglishFifthGreetings from './pages/EnglishFifthGreetings'
import EnglishFifthQuiz from './pages/EnglishFifthQuiz'
import EnglishFifthUnits from './pages/EnglishFifthUnits'
import EnglishFifthUnitsQuiz from './pages/EnglishFifthUnitsQuiz'
import EnglishFifthReview from './pages/EnglishFifthReview'
import EnglishFifthReviewQuiz from './pages/EnglishFifthReviewQuiz'
import EnglishHobbies from './pages/EnglishHobbies'
import EnglishHobbiesQuiz from './pages/EnglishHobbiesQuiz'
import EnglishFreeTime from './pages/EnglishFreeTime'
import EnglishFreeTimeQuiz from './pages/EnglishFreeTimeQuiz'
import FrenchFourth from './pages/FrenchFourth'
import FrenchFourthQuiz from './pages/FrenchFourthQuiz'
import FrenchFifthEnvironment from './pages/FrenchFifthEnvironment'
import FrenchFifthEnvironmentQuiz from './pages/FrenchFifthEnvironmentQuiz'
import FrenchFifthModules from './pages/FrenchFifthModules'
import FrenchFifthModulesQuiz from './pages/FrenchFifthModulesQuiz'
import FrenchPresent from './pages/FrenchPresent'
import FrenchPresentQuiz from './pages/FrenchPresentQuiz'
import FrenchSeventhPast from './pages/FrenchSeventhPast'
import FrenchSeventhPastQuiz from './pages/FrenchSeventhPastQuiz'
import FrenchSeventhFamily from './pages/FrenchSeventhFamily'
import LevelCourses from './pages/LevelCourses'
import ModuleSix from './pages/ModuleSix'
import FrenchSixthRevision from './pages/FrenchSixthRevision'
import FrenchSixthRevisionQuiz from './pages/FrenchSixthRevisionQuiz'
import FrenchSixthAcceptance from './pages/FrenchSixthAcceptance'
import FrenchSixthAcceptanceQuiz from './pages/FrenchSixthAcceptanceQuiz'
import FrenchSeventhControl from './pages/FrenchSeventhControl'
import FrenchSeventhControlQuiz from './pages/FrenchSeventhControlQuiz'
import Courses from './pages/Courses'
import SimplePage from './pages/SimplePage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses/6eme/module-1" element={<ModuleSix />} />
          <Route path="/courses/6eme/francais/revision" element={<FrenchSixthRevision />} />
          <Route path="/courses/6eme/francais/revision/quiz" element={<FrenchSixthRevisionQuiz />} />
          <Route path="/courses/6eme/francais/accepter-les-autres" element={<FrenchSixthAcceptance />} />
          <Route path="/courses/6eme/francais/accepter-les-autres/quiz" element={<FrenchSixthAcceptanceQuiz />} />
          <Route path="/courses/6eme/english-unit-1" element={<EnglishUnitOne />} />
          <Route path="/courses/english-tenses" element={<EnglishTenses />} />
          <Route path="/courses/6eme/english-reading" element={<EnglishReading />} />
          <Route path="/courses/6eme/english/revision" element={<EnglishSixthReview />} />
          <Route path="/courses/6eme/english/revision/quiz" element={<EnglishSixthReviewQuiz />} />
          <Route path="/courses/7eme/english" element={<EnglishSeventh />} />
          <Route path="/courses/7eme/english/quiz" element={<EnglishSeventhQuiz />} />
          <Route path="/courses/7eme/english/unit-2" element={<EnglishSeventhUnitTwo />} />
          <Route path="/courses/7eme/english/unit-2/quiz" element={<EnglishSeventhUnitTwoQuiz />} />
          <Route path="/courses/7eme/english/midterm-1" element={<EnglishSeventhMidterm />} />
          <Route path="/courses/7eme/english/midterm-1/quiz" element={<EnglishSeventhMidtermQuiz />} />
          <Route path="/courses/7eme/english/module-1-review" element={<EnglishSeventhReview />} />
          <Route path="/courses/7eme/english/module-1-review/quiz" element={<EnglishSeventhReviewQuiz />} />
          <Route path="/courses/5eme/english/greetings" element={<EnglishFifthGreetings />} />
          <Route path="/courses/5eme/english/greetings/quiz" element={<EnglishFifthQuiz />} />
          <Route path="/courses/5eme/english/units-2-3" element={<EnglishFifthUnits />} />
          <Route path="/courses/5eme/english/units-2-3/quiz" element={<EnglishFifthUnitsQuiz />} />
          <Route path="/courses/5eme/english/review" element={<EnglishFifthReview />} />
          <Route path="/courses/5eme/english/review/quiz" element={<EnglishFifthReviewQuiz />} />
          <Route path="/courses/:level/english/hobbies" element={<EnglishHobbies />} />
          <Route path="/courses/:level/english/hobbies/quiz" element={<EnglishHobbiesQuiz />} />
          <Route path="/courses/:level/english/free-time" element={<EnglishFreeTime />} />
          <Route path="/courses/:level/english/free-time/quiz" element={<EnglishFreeTimeQuiz />} />
          <Route path="/courses/5eme/francais" element={<FrenchFourth />} />
          <Route path="/courses/5eme/francais/quiz" element={<FrenchFourthQuiz />} />
          <Route path="/courses/5eme/francais/environnement" element={<FrenchFifthEnvironment />} />
          <Route path="/courses/5eme/francais/environnement/quiz" element={<FrenchFifthEnvironmentQuiz />} />
          <Route path="/courses/5eme/francais/modules-1-2" element={<FrenchFifthModules />} />
          <Route path="/courses/5eme/francais/modules-1-2/quiz" element={<FrenchFifthModulesQuiz />} />
          <Route path="/courses/:level/francais/conjugaison-present" element={<FrenchPresent />} />
          <Route path="/courses/:level/francais/conjugaison-present/quiz" element={<FrenchPresentQuiz />} />
          <Route path="/courses/7eme/francais/passe-compose" element={<FrenchSeventhPast />} />
          <Route path="/courses/7eme/francais/passe-compose/quiz" element={<FrenchSeventhPastQuiz />} />
          <Route path="/courses/7eme/francais/en-famille" element={<FrenchSeventhFamily />} />
          <Route path="/courses/7eme/francais/devoir-controle-1" element={<FrenchSeventhControl />} />
          <Route path="/courses/7eme/francais/devoir-controle-1/quiz" element={<FrenchSeventhControlQuiz />} />
          <Route path="/levels/6eme" element={<ModuleSix />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:level" element={<LevelCourses />} />
          <Route path="/levels" element={<SimplePage title="Niveaux" text="Choisissez votre niveau pour commencer vos révisions." />} />
          <Route path="/contact" element={<SimplePage title="Contact" text="Une question ? La page de contact sera bientôt disponible." />} />
          <Route path="/about" element={<SimplePage title="À propos" text="Ikkir Akkra accompagne les élèves dans leurs apprentissages." />} />
          <Route path="*" element={<SimplePage title="Page introuvable" text="Cette adresse ne correspond à aucune page." />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
