import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import LevelCourses from './pages/LevelCourses'
import { LevelsPage, NotFound, Loading } from './pages/TranslatedPages'
import ProtectedRoute from './auth/ProtectedRoute'
import './App.css'

const EnglishUnitOne = lazy(() => import('./pages/EnglishUnitOne'))
const EnglishTenses = lazy(() => import('./pages/EnglishTenses'))
const EnglishReading = lazy(() => import('./pages/EnglishReading'))
const EnglishSixthReview = lazy(() => import('./pages/EnglishSixthReview'))
const EnglishSixthReviewQuiz = lazy(() => import('./pages/EnglishSixthReviewQuiz'))
const EnglishSeventh = lazy(() => import('./pages/EnglishSeventh'))
const EnglishSeventhQuiz = lazy(() => import('./pages/EnglishSeventhQuiz'))
const EnglishSeventhUnitTwo = lazy(() => import('./pages/EnglishSeventhUnitTwo'))
const EnglishSeventhUnitTwoQuiz = lazy(() => import('./pages/EnglishSeventhUnitTwoQuiz'))
const EnglishSeventhMidterm = lazy(() => import('./pages/EnglishSeventhMidterm'))
const EnglishSeventhMidtermQuiz = lazy(() => import('./pages/EnglishSeventhMidtermQuiz'))
const EnglishSeventhReview = lazy(() => import('./pages/EnglishSeventhReview'))
const EnglishSeventhReviewQuiz = lazy(() => import('./pages/EnglishSeventhReviewQuiz'))
const EnglishFifthGreetings = lazy(() => import('./pages/EnglishFifthGreetings'))
const EnglishFifthQuiz = lazy(() => import('./pages/EnglishFifthQuiz'))
const EnglishFifthUnits = lazy(() => import('./pages/EnglishFifthUnits'))
const EnglishFifthUnitsQuiz = lazy(() => import('./pages/EnglishFifthUnitsQuiz'))
const EnglishFifthReview = lazy(() => import('./pages/EnglishFifthReview'))
const EnglishFifthReviewQuiz = lazy(() => import('./pages/EnglishFifthReviewQuiz'))
const EnglishHobbies = lazy(() => import('./pages/EnglishHobbies'))
const EnglishHobbiesQuiz = lazy(() => import('./pages/EnglishHobbiesQuiz'))
const EnglishFreeTime = lazy(() => import('./pages/EnglishFreeTime'))
const EnglishFreeTimeQuiz = lazy(() => import('./pages/EnglishFreeTimeQuiz'))
const FrenchFourth = lazy(() => import('./pages/FrenchFourth'))
const FrenchFourthQuiz = lazy(() => import('./pages/FrenchFourthQuiz'))
const FrenchFifthEnvironment = lazy(() => import('./pages/FrenchFifthEnvironment'))
const FrenchFifthEnvironmentQuiz = lazy(() => import('./pages/FrenchFifthEnvironmentQuiz'))
const FrenchFifthModules = lazy(() => import('./pages/FrenchFifthModules'))
const FrenchFifthModulesQuiz = lazy(() => import('./pages/FrenchFifthModulesQuiz'))
const FrenchPresent = lazy(() => import('./pages/FrenchPresent'))
const FrenchPresentQuiz = lazy(() => import('./pages/FrenchPresentQuiz'))
const FrenchSeventhPast = lazy(() => import('./pages/FrenchSeventhPast'))
const FrenchSeventhPastQuiz = lazy(() => import('./pages/FrenchSeventhPastQuiz'))
const FrenchSeventhFamily = lazy(() => import('./pages/FrenchSeventhFamily'))
const ModuleSix = lazy(() => import('./pages/ModuleSix'))
const FrenchSixthRevision = lazy(() => import('./pages/FrenchSixthRevision'))
const FrenchSixthRevisionQuiz = lazy(() => import('./pages/FrenchSixthRevisionQuiz'))
const FrenchSixthAcceptance = lazy(() => import('./pages/FrenchSixthAcceptance'))
const FrenchSixthAcceptanceQuiz = lazy(() => import('./pages/FrenchSixthAcceptanceQuiz'))
const FrenchSeventhControl = lazy(() => import('./pages/FrenchSeventhControl'))
const FrenchSeventhControlQuiz = lazy(() => import('./pages/FrenchSeventhControlQuiz'))
const Courses = lazy(() => import('./pages/Courses'))
const Login = lazy(() => import('./pages/Login'))
const Register = lazy(() => import('./pages/Register'))
const Profile = lazy(() => import('./pages/Profile'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Suspense fallback={<Loading />}>
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
          <Route path="/levels" element={<LevelsPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
