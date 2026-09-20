import Quiz from '../components/Quiz'

const questions = [
  ['Tom ___ eleven years old.', ['am', 'is', 'are'], 1],
  ['English is Tom’s favourite subject ___ it is interesting.', ['but', 'because', 'and'], 1],
  ['I enjoy ___ football.', ['play', 'playing', 'plays'], 1],
  ['John usually ___ to school by bus.', ['go', 'goes', 'going'], 1],
  ['Vegetarians ___ eat meat.', ['never', 'always', 'usually'], 0],
  ['She likes ___ books.', ['read', 'reading', 'reads'], 1],
  ['___ you like watching films?', ['Do', 'Does', 'Are'], 0],
  ['Carol ___ stay up late.', ['don’t', 'doesn’t', 'isn’t'], 1],
  ['They are twins. ___ names are Paul and Pedro.', ['Their', 'His', 'Our'], 0],
  ['Sue stays up late ___ night.', ['in', 'on', 'at'], 2],
  ['___ are you from?', ['Who', 'Where', 'Why'], 1],
  ['___ brothers have you got?', ['How much', 'How many', 'Which'], 1],
  ['“How about going to the beach?” is...', ['a suggestion', 'a question about age', 'a negative sentence'], 0],
  ['“I like chicken ___ cheese.”', ['but', 'because', 'and'], 2],
  ['Yassine and Abrar are...', ['brother and sister', 'young cousins', 'classmates'], 1],
  ['They want to go to...', ['the zoo', 'the cinema', 'the beach'], 0],
  ['They will take...', ['books and pens', 'sandwiches, juice and fruit', 'cakes and milk'], 1],
  ['They will meet at...', ['8 o’clock', '9 o’clock', '10 o’clock'], 1],
  ['They decide to go by...', ['bike', 'car', 'bus'], 2],
  ['The bus is safer and...', ['more fun together', 'more expensive', 'very slow'], 0],
]

function EnglishSixthReviewQuiz() { return <Quiz theme="reading" lang="en" eyebrow="English · 6th form" title="Revision Quiz" subtitle="20 questions · 1 point per correct answer · total /20." questions={questions} backTo="/courses/6eme" backLabel="Back to 6th form" highMessage="Excellent work!" lowMessage="Review the worksheet and try again." /> }

export default EnglishSixthReviewQuiz