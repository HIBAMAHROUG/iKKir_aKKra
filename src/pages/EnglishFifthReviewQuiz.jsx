import { useState } from 'react'
import { Link } from 'react-router-dom'
import './EnglishFifth.css'

const questions = [
  ['We say ___ at 6 a.m.', ['Good night', 'Good morning', 'Good evening'], 1],
  ['We say ___ when we leave.', ['Bye', 'Hello', 'Good morning'], 0],
  ['“Ball” means...', ['كرة', 'سيارة', 'قطار'], 0],
  ['14 is...', ['fourteen', 'forty', 'four'], 0],
  ['20 is...', ['twelve', 'twenty', 'two'], 1],
  ['“Get dressed” means...', ['يغسل وجهه', 'يرتدي ملابسه', 'يذهب إلى المدرسة'], 1],
  ['“Have breakfast” means...', ['يتناول الفطور', 'ينام', 'يمشط شعره'], 0],
  ['The correct sentence is...', ['I get up at 7.', 'I up get at 7.', 'Get I up 7.'], 0],
  ['Curly hair means...', ['شعر طويل', 'شعر مجعد', 'شعر قصير'], 1],
  ['The opposite of young is...', ['old', 'thin', 'clever'], 0],
  ['A friendly person is...', ['ودود', 'سمين', 'غاضب'], 0],
  ['A clever person is...', ['نحيف', 'ذكي', 'قديم'], 1],
  ['“First” means...', ['أخيراً', 'أولاً', 'بعد ذلك'], 1],
  ['“Finally” means...', ['أخيراً', 'ثانياً', 'صباحاً'], 0],
  ['A person with glasses wears...', ['نظارات', 'قبعة', 'حذاء'], 0],
  ['16 is...', ['sixteen', 'sixty', 'six'], 0],
  ['18 is...', ['eighteen', 'eight', 'eighty'], 0],
  ['“Wash my face” means...', ['أغسل وجهي', 'أمشط شعري', 'أرتدي ملابسي'], 0],
  ['The correct order is...', ['Next, I have breakfast.', 'I breakfast have next.', 'Have next breakfast I.'], 0],
  ['Long hair means...', ['شعر قصير', 'شعر مجعد', 'شعر طويل'], 2],
]

function EnglishFifthReviewQuiz() {
  const [selected, setSelected] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const score = questions.reduce((sum, item, index) => sum + (selected[index] === item[2] ? 1 : 0), 0)
  return <div className="fifth-page"><header className="fifth-heading"><p className="eyebrow">English · 5th form</p><h1>🎯 Review Unit Quiz</h1><p>20 questions · 1 point each · total /20.</p></header><section className="fifth-quiz-box">{questions.map((item,index)=><fieldset className="fifth-question" key={item[0]}><legend>{index+1}. {item[0]}</legend>{item[1].map((option,optionIndex)=><label key={option}><input type="radio" name={`review-fifth-${index}`} checked={selected[index]===optionIndex} onChange={()=>{setSelected((current)=>({...current,[index]:optionIndex}));setSubmitted(false)}} />{option}</label>)}</fieldset>)}<button className="fifth-button" type="button" onClick={()=>setSubmitted(true)}>✅ Correct quiz</button>{submitted&&<div className="fifth-score"><strong>Your mark: {score}/20</strong><span>{score>=16?'Excellent!':score>=10?'Good work, keep practising!':'Review the lesson and try again.'}</span></div>}</section><Link className="fifth-quiz-link" to="/courses/5eme">Back to 5th form →</Link></div>
}

export default EnglishFifthReviewQuiz
