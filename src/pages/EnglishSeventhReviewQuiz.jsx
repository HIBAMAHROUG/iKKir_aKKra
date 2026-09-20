import Quiz from '../components/Quiz'

const questions = [
  ['Meriam is ___ years old.', ['twelve', 'twenty', 'seven'], 0],
  ['Sana is a...', ['doctor', 'teacher', 'pupil'], 0],
  ['Selim is an English...', ['student', 'teacher', 'doctor'], 1],
  ['This is Peter. ___ is a pupil.', ['She', 'He', 'They'], 1],
  ['Susan is Peter’s sister. ___ is a pupil.', ['She', 'He', 'It'], 0],
  ['Diana ___ fair hair.', ['have got', 'has got', 'got has'], 1],
  ['They ___ two brothers.', ['has got', 'have got', 'having'], 1],
  ['I enjoy ___ music.', ['listen', 'listening to', 'listens'], 1],
  ['My favourite ___ is football.', ['pastime', 'teacher', 'surname'], 0],
  ['The correct sentence is...', ['I love dancing.', 'I dancing love.', 'Love I dance.'], 0],
  ['Free time means...', ['spare time', 'school time', 'night'], 0],
  ['I brush ___ teeth.', ['my', 'mine', 'me'], 0],
  ['I go to school ___ foot.', ['by', 'on', 'with'], 1],
  ['He ___ up at nine.', ['get', 'gets', 'getting'], 1],
  ['Caroline ___ eats fish.', ['never', 'does never', 'never does'], 0],
  ['___ your father a teacher?', ['Does', 'Is', 'Are'], 1],
  ['___ your mother work in a bank?', ['Does', 'Is', 'Are'], 0],
  ['My mother is ___ doctor.', ['a', 'an', 'Ø'], 0],
  ['She is ___ excellent teacher.', ['a', 'an', 'Ø'], 1],
  ['The negative of “Maria likes grammar” is...', ['Maria don’t like grammar.', 'Maria doesn’t like grammar.', 'Maria isn’t like grammar.'], 1],
]

function EnglishSeventhReviewQuiz() { return <Quiz theme="seventh" lang="en" eyebrow="English · 7th form" title="Module 1 Review Quiz" subtitle="20 questions · 1 point each · total /20." questions={questions} backTo="/courses/7eme" backLabel="Back to 7th form →" buttonLabel="✅ Correct quiz" lowMessage="Review Module 1 and try again." /> }

export default EnglishSeventhReviewQuiz
