import Quiz from '../components/Quiz'

const questions = [
  ['The Mills family are...', ['American', 'Australian', 'Peruvian'], 0],
  ['Mark lives in...', ['Lima', 'Washington DC', 'Lyon'], 1],
  ['Mary is a...', ['teacher', 'secretary', 'policewoman'], 2],
  ['Dave and Sid are...', ['twenty-three', 'thirteen', 'thirty-two'], 0],
  ['Jennifer is...', ['English', 'French', 'German'], 1],
  ['I ___ a pupil.', ['am', 'is', 'are'], 0],
  ['She likes ___ teacher.', ['his', 'her', 'their'], 1],
  ['___ are my friends over there.', ['This', 'That', 'Those'], 2],
  ['He ___ got a brother.', ['have', 'has', 'having'], 1],
  ['We ___ got two children.', ['has', 'have', 'having'], 1],
  ['I enjoy ___ to music.', ['listen', 'listening', 'listens'], 1],
  ['Nice to ___ you.', ['meet', 'meets', 'meeting'], 0],
  ['My mother’s job is...', ['secretary', 'French', 'surname'], 0],
  ['A person from France is...', ['France', 'French', 'Francais'], 1],
  ['This is used for one thing near us:', ['this', 'those', 'these'], 0],
  ['These is used for...', ['one thing far', 'several things near', 'one thing near'], 1],
  ['Our surname means...', ['our family name', 'our hobby', 'our country'], 0],
  ['A son is...', ['a daughter', 'a male child', 'a parent'], 1],
  ['The correct sentence is...', ['I love play music.', 'I love playing music.', 'I loving music.'], 1],
  ['The correct greeting is...', ['Nice to meet you.', 'Where are you?', 'You are nice.'], 0],
]

function EnglishSeventhQuiz() {
  return <Quiz theme="seventh" lang="en" eyebrow="English · 7th form" title="Unit 1 Assessment" subtitle="20 questions · 1 point each · total /20." questions={questions} backTo="/courses/7eme" backLabel="Back to 7th form →" buttonLabel="Correct quiz" lowMessage="Review Unit 1 and try again." />
}

export default EnglishSeventhQuiz
