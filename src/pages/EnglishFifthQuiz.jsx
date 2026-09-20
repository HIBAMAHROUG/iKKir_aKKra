import Quiz from '../components/Quiz'
import './EnglishFifth.css'

const questions = [
  ['We say ___ in the morning.', ['Good night', 'Good morning', 'Good evening'], 1],
  ['“What’s your name?” —', ['My name is Sara.', 'I’m fine.', 'I’m 10 years old.'], 0],
  ['“How old are you?” —', ['I am Tom.', 'I am 10 years old.', 'Goodbye.'], 1],
  ['You leave school. You say...', ['Hello', 'Bye', 'Nice'], 1],
  ['7 in words is...', ['six', 'seven', 'nine'], 1],
  ['Hi and Hello are...', ['numbers', 'greetings', 'ages'], 1],
  ['“I’m 15 years old” tells us...', ['a name', 'an age', 'a country'], 1],
  ['The correct spelling is...', ['OLLHE', 'HELLO', 'HOLLE'], 1],
  ['The correct sentence is...', ['My name is Adam.', 'My name Adam.', 'Name my is Adam.'], 0],
  ['Good night is used...', ['at night', 'in the morning', 'at school'], 0],
  ['The odd word is: Hi, Hello, Apple, Hey.', ['Hi', 'Apple', 'Hey'], 1],
  ['“Nice to meet you” is used when...', ['meeting someone', 'sleeping', 'counting'], 0],
  ['0 in words is...', ['one', 'zero', 'ten'], 1],
  ['4 in words is...', ['four', 'five', 'three'], 0],
  ['Good afternoon is used in the...', ['afternoon', 'night', 'morning'], 0],
  ['The opposite of Hello as a leaving word is...', ['Goodbye', 'Name', 'Age'], 0],
  ['Complete: I ___ Lily.', ['am', 'is', 'are'], 0],
  ['Complete: How ___ are you?', ['name', 'old', 'fine'], 1],
  ['Complete: My ___ is Tom.', ['age', 'name', 'bye'], 1],
  ['A good introduction includes your...', ['name and age', 'favourite chair', 'school bag only'], 0],
]

function EnglishFifthQuiz() {
  return <Quiz theme="fifth" lang="en" eyebrow="English · 5th form · Level A1" title="🎯 Greetings and Introductions Quiz" subtitle="20 questions · 1 point each · total /20." questions={questions} backTo="/courses/5eme" backLabel="Back to 5th form →" buttonLabel="✅ Correct quiz" />
}

export default EnglishFifthQuiz
