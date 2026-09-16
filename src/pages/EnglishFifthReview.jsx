import { Link } from 'react-router-dom'
import './EnglishFifth.css'

function Answer({ label, lines = 1 }) { return lines > 1 ? <label className="fifth-answer">{label}<textarea rows={lines} /></label> : <label className="fifth-answer">{label}<input type="text" /></label> }
function Correction({ children }) { return <details className="fifth-correction"><summary>✅ Show correction + Arabic explanation</summary><p>{children}</p></details> }

function EnglishFifthReview() {
  return (
    <div className="fifth-page">
      <header className="fifth-heading"><p className="eyebrow">English · 5th form</p><h1>🌟 Review Unit</h1><p>Greetings, spelling, numbers, daily routines and adjectives.</p><Link className="fifth-quiz-link" to="/courses/5eme/english/review/quiz">🎯 Open separate quiz /20 →</Link></header>

      <section className="fifth-section"><h2>👋 1. Greetings</h2><p>Complete with: <strong>Hi · morning · afternoon · bye · night · evening</strong>.</p><Answer label="At 6 a.m.: Good ___ · At 1 p.m.: Good ___ · At 4 a.m.: Good ___ · At bedtime: Good ___ · When you leave: ___" lines={3} /><Correction>Good morning = صباح الخير · Good afternoon = مساء الخير بعد الظهر · Good evening = مساء الخير · Good night = تصبح على خير · Bye = إلى اللقاء.</Correction></section>

      <section className="fifth-section"><h2>🔤 2. Missing letters</h2><Answer label="Complete: Ba___ (ball) · ___a___ (car) · Te___y___r (teddy bear) · D___l (doll) · Tr___l (train)" /><Correction>Ball = كرة · Car = سيارة · Teddy bear = دمية دب · Doll = دمية · Train = قطار.</Correction></section>

      <section className="fifth-section"><h2>🔢 3. Numbers 14–20</h2><div className="number-strip"><span>14 fourteen</span><span>15 fifteen</span><span>16 sixteen</span><span>17 seventeen</span><span>18 eighteen</span><span>19 nineteen</span><span>20 twenty</span></div><Answer label="Match or complete: 14 = ___ · 15 = ___ · 16 = ___ · 17 = ___ · 18 = ___ · 19 = ___ · 20 = ___" lines={3} /><Correction>14 fourteen = أربعة عشر · 15 fifteen = خمسة عشر · 16 sixteen = ستة عشر · 17 seventeen = سبعة عشر · 18 eighteen = ثمانية عشر · 19 nineteen = تسعة عشر · 20 twenty = عشرون.</Correction></section>

      <section className="fifth-section"><h2>🌅 4. Daily routine</h2><p>Use: <strong>get up · get dressed · wash my face · comb my hair · have breakfast · go to school</strong>.</p><Answer label="Label the pictures: wake up / get dressed / wash my face / comb my hair / have breakfast / go to school." lines={3} /><Correction>wake up = يستيقظ · get dressed = يرتدي ملابسه · wash my face = يغسل وجهي · comb my hair = أمشط شعري · have breakfast = أتناول الفطور · go to school = أذهب إلى المدرسة.</Correction></section>

      <section className="fifth-section"><h2>✍️ 5. Write about your daily routine</h2><Answer label="Every morning I ___ up at 7 o’clock. First, I ___ and ___. Second, I ___. Next, I ___. Finally, I ___." lines={6} /><Correction>Example: Every morning I get up at 7 o’clock. First, I wash my face and comb my hair. Second, I get dressed. Next, I have breakfast. Finally, I go to school. First = أولاً · second = ثانياً · next = بعد ذلك · finally = أخيراً.</Correction></section>

      <section className="fifth-section"><h2>🙂 6. Adjectives</h2><p>Match the pictures or choose the correct adjective.</p><div className="arabic-grid"><span><strong>curly hair</strong><small>شعر مجعد</small></span><span><strong>long hair</strong><small>شعر طويل</small></span><span><strong>tall</strong><small>طويل القامة</small></span><span><strong>short</strong><small>قصير</small></span><span><strong>fat</strong><small>سمين</small></span><span><strong>thin</strong><small>نحيف</small></span><span><strong>old</strong><small>كبير في السن</small></span><span><strong>young</strong><small>صغير السن</small></span><span><strong>glasses</strong><small>نظارات</small></span><span><strong>beautiful</strong><small>جميل</small></span><span><strong>clever</strong><small>ذكي</small></span><span><strong>friendly</strong><small>ودود</small></span></div><Answer label="Choose: He is (tall / short). She has ___ hair (curly / straight). He has (glasses / hat). He is (thin / fat). She has (long / short) hair. He is (young / old)." lines={3} /><Correction>Possible answers: tall · curly · glasses · fat · long · young. Curly = مجعد · straight = مستقيم · glasses = نظارات · friendly = ودود · clever = ذكي.</Correction></section>

      <section className="fifth-section"><h2>📝 7. Describe a friend</h2><Answer label="Use: He/She is... He/She has... He/She likes..." lines={7} /><Correction>Example: My friend is Sara. She is young and friendly. She has long hair and glasses. She likes reading and playing. Young = صغير السن · long hair = شعر طويل · likes = يحب.</Correction></section>
      <Link className="fifth-quiz-link" to="/courses/5eme/english/review/quiz">🎯 Open separate quiz /20 →</Link>
    </div>
  )
}

export default EnglishFifthReview
