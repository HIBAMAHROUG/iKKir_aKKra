import { Link, useParams } from 'react-router-dom'
import './EnglishSeventh.css'

function Answer({ label, lines = 1 }) { return lines > 1 ? <label className="seventh-answer">{label}<textarea rows={lines} /></label> : <label className="seventh-answer">{label}<input type="text" /></label> }
function Correction({ children }) { return <details className="seventh-correction"><summary>✅ Show correction</summary><p>{children}</p></details> }

function EnglishHobbies() {
  const { level = '6eme' } = useParams()
  const form = level === '7eme' ? '7th form' : '6th form'
  return (
    <div className="seventh-page">
      <header className="seventh-heading"><p className="eyebrow">English · {form}</p><h1>Unit: Entertaining Myself</h1><p>Hobbies, likes and dislikes, music, shopping, sports and free-time activities.</p><Link className="seventh-quiz-link" to={`/courses/${level}/english/hobbies/quiz`}>🎯 Open separate quiz /20 →</Link></header>

      <section className="seventh-section"><h2>💬 1. Complete the conversation</h2><p>Words: <strong>I usually go with my mum and my sister Rosa · I go to city malls · Once a week · Oh! I like shopping.</strong></p><div className="seventh-reading"><p>Emma: Hi! What’s your favourite hobby?</p><p>Emma: Really! Where do you shop?</p><p>Emma: How often do you go shopping?</p><p>Emma: Who do you go with?</p></div><Answer label="Complete Emma’s friend’s answers." lines={6} /><Correction>Oh! I like shopping. · I go to city malls. They are very big and there are all types of stores there. · Once a week. · I usually go with my mum and my sister Rosa.</Correction></section>

      <section className="seventh-section"><h2>🎸 2. Music vocabulary</h2><p>Words: <strong>playing · musical · difficult · favourite</strong></p><Answer label="Anna: Do you like ___ the guitar? Leo: Yes, I do. It’s my ___ free-time activity. Do you like playing ___ instruments? Anna: No, I don’t because it’s ___." /><Correction>playing · favourite · musical · difficult. “Musical instruments” = آلات موسيقية. “Difficult” = صعب.</Correction></section>

      <section className="seventh-section"><h2>📚 3. Rewrite with “Norma”</h2><p>I enjoy reading books. I read short stories, geography books, history books and science books. I go to the bookshop every weekend and buy a new book. I love reading because it is interesting and fun.</p><Answer label="Norma enjoys..." lines={6} /><Correction>Norma enjoys reading books. She reads short stories, geography books, history books and science books. She goes to the bookshop every weekend and buys a new book. She loves reading books because it is very interesting and fun.</Correction></section>

      <section className="seventh-section"><h2>🌏 4. Travelling and cooking</h2><p>Words: <strong>delicious · countries · mysterious · hobby · fascinate</strong></p><Answer label="Andy: Travelling is my favourite ___. I visited many ___ but Asian countries ___ me because they have ___ cultures. Mila cooks ___ meals." /><Correction>hobby · countries · fascinate · mysterious · delicious. “Fascinate” = يفتن / يثير الإعجاب. “Mysterious” = غامض. “Delicious” = لذيذ.</Correction></section>

      <section className="seventh-section"><h2>🏃 5. Rewrite with “Alex”</h2><p>I like practising sports. I enjoy going hiking and climbing mountains in spring. It is dangerous, but I like adventure. During the year, I play football with my friends every day after school.</p><Answer label="This is my neighbour Alex. He..." lines={6} /><Correction>This is my neighbour Alex. He likes practising sports. He enjoys going hiking and climbing mountains in spring. It is dangerous, but he likes adventure. During the year, he plays football with his friends every day after school.</Correction></section>

      <section className="seventh-section"><h2>🌿 6. Reorder the paragraph</h2><p>Number the sentences from 1 to 6.</p><ol><li>___ spend much time in my garden.</li><li>___ When I finish taking care of the trees and watering the plants, I feel relaxed.</li><li>___ I grow vegetables, fruits and flowers.</li><li>___ My name is Ralph. I live</li><li>___ I enjoy gardening. It’s my favourite hobby. I always</li><li>___ in a small house with a big garden in the South of France.</li></ol><Correction>1. My name is Ralph. I live. 2. in a small house with a big garden in the South of France. 3. I enjoy gardening. It’s my favourite hobby. I always. 4. spend much time in my garden. 5. I grow vegetables, fruits and flowers. 6. When I finish taking care of the trees and watering the plants, I feel relaxed.</Correction></section>

      <section className="seventh-section"><h2>✏️ 7. Correct the spelling</h2><p>I love riding books. I ujully go to the public library. My freind Alex goes with me. I love reading short stories bicause they enrich my vocabulary.</p><Answer label="riding → ___ · ujully → ___ · freind → ___ · bicause → ___" /><Correction>riding → reading · ujully → usually · freind → friend · bicause → because.</Correction></section>

      <section className="seventh-section"><h2>🚫 8. Make negative sentences</h2><Answer label="I like flying colourful kites in the park. → I ___ . My mother loves going shopping. → My mother ___ . Peter enjoys swimming in the sea. → Peter ___ . John likes taking photographs. → John ___ . Mila enjoys playing computer games. → Mila ___ . My aunt Lucy loves cooking. → My aunt Lucy ___." lines={6} /><Correction>I don’t like flying colourful kites in the park. My mother doesn’t love going shopping. Peter doesn’t enjoy swimming in the sea. John doesn’t like taking photographs. Mila doesn’t enjoy playing computer games. My aunt Lucy doesn’t love cooking.</Correction></section>

      <section className="seventh-section"><h2>📝 9. Write about yourself</h2><p>Use: I am · I love · because · but I hate.</p><Answer label="Hello! My name is ___. I am ___ years old. I love ___ and ___ because it’s ___ but I hate ___ because it’s ___." lines={6} /><Correction>Example: Hello! My name is Lina. I am twelve years old. I love swimming and reading because it’s fun but I hate playing video games because it’s boring.</Correction></section>

      <section className="seventh-section"><h2>📧 10. Reading: Mattias’s free-time activity</h2><div className="seventh-reading"><p>Mattias is thirteen years old. His parents gave him a bike for his seventh birthday. He enjoys riding his bike in the park. It is his favourite free-time activity because it is fun and exciting. Sometimes he races with his friends. When he grows up, he wants to participate in the Tour de France.</p></div><Answer label="Answer: What is Mattias’s favourite activity? Why does he like it? What does he sometimes do with his friends? What does he want to do when he grows up?" lines={5} /><Correction>His favourite activity is riding his bike. He likes it because it is fun and exciting. He sometimes does races with his friends. He wants to participate in the Tour de France.</Correction></section>

      <section className="seventh-section"><h2>📖 Key words</h2><div className="seventh-table"><span>hobby = هواية</span><span>shopping = التسوق</span><span>favourite = المفضل</span><span>enjoy = يستمتع</span><span>dislike = لا يحب</span><span>musical = موسيقي</span><span>delicious = لذيذ</span><span>boring = ممل</span></div></section>
      <Link className="seventh-quiz-link" to={`/courses/${level}/english/hobbies/quiz`}>🎯 Open separate quiz /20 →</Link>
    </div>
  )
}

export default EnglishHobbies
