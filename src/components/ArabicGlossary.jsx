import { useLocation } from 'react-router-dom'
import './ArabicGlossary.css'

const glossaries = [
  {
    match: 'english/greetings',
    title: 'Essential words',
    words: [
      ['Hello / Hi', 'مرحبا'],
      ['Good morning', 'صباح الخير'],
      ['Good evening', 'مساء الخير'],
      ['Goodbye', 'إلى اللقاء'],
      ['Name', 'الاسم'],
      ['Age', 'العمر'],
      ['Nice to meet you', 'سعيد بلقائك'],
    ],
  },
  {
    match: 'english/hobbies',
    title: 'Essential words',
    words: [
      ['Hobby', 'هواية'],
      ['Read', 'يقرأ'],
      ['Draw', 'يرسم'],
      ['Listen to music', 'يستمع إلى الموسيقى'],
      ['Play', 'يلعب'],
      ['Collect', 'يجمع'],
      ['Prefer', 'يفضّل'],
    ],
  },
  {
    match: 'english/free-time',
    title: 'Essential words',
    words: [
      ['Free time', 'وقت الفراغ'],
      ['Watch TV', 'يشاهد التلفاز'],
      ['Go out', 'يخرج'],
      ['Visit', 'يزور'],
      ['Usually', 'عادةً'],
      ['Sometimes', 'أحيانًا'],
      ['Never', 'أبدًا'],
    ],
  },
  {
    match: 'english',
    title: 'Essential words',
    words: [
      ['Family', 'العائلة'],
      ['Friend', 'صديق'],
      ['School', 'المدرسة'],
      ['Learn', 'يتعلّم'],
      ['Speak', 'يتكلّم'],
      ['Read', 'يقرأ'],
      ['Write', 'يكتب'],
      ['Question', 'سؤال'],
      ['Answer', 'إجابة'],
    ],
  },
  {
    match: 'francais/environnement',
    title: 'Mots essentiels',
    words: [
      ['L’environnement', 'البيئة'],
      ['La nature', 'الطبيعة'],
      ['Recycler', 'يعيد التدوير'],
      ['Économiser', 'يوفّر'],
      ['Protéger', 'يحمي'],
      ['La pollution', 'التلوّث'],
      ['Les déchets', 'النفايات'],
    ],
  },
  {
    match: 'module-1',
    title: 'Mots essentiels',
    words: [
      ['Le travail', 'العمل'],
      ['Le métier', 'المهنة'],
      ['Le médecin', 'الطبيب'],
      ['L’enseignant', 'المعلّم'],
      ['Le policier', 'الشرطي'],
      ['Travailler', 'يعمل'],
      ['Aider', 'يساعد'],
    ],
  },
  {
    match: 'francais/en-famille',
    title: 'Mots essentiels',
    words: [
      ['La famille', 'العائلة'],
      ['Le père', 'الأب'],
      ['La mère', 'الأم'],
      ['Le frère', 'الأخ'],
      ['La sœur', 'الأخت'],
      ['Les parents', 'الوالدان'],
      ['Aimer', 'يحبّ'],
    ],
  },
  {
    match: 'francais/passe-compose',
    title: 'Mots essentiels',
    words: [
      ['Hier', 'أمس'],
      ['La semaine dernière', 'الأسبوع الفارط'],
      ['Avoir', 'يملك / فعل مساعد'],
      ['Être', 'يكون / فعل مساعد'],
      ['Faire', 'يفعل'],
      ['Aller', 'يذهب'],
      ['Finir', 'ينهي'],
    ],
  },
  {
    match: 'francais',
    title: 'Mots essentiels',
    words: [
      ['La phrase', 'الجملة'],
      ['Le verbe', 'الفعل'],
      ['Le nom', 'الاسم'],
      ['L’adjectif', 'الصفة'],
      ['Lire', 'يقرأ'],
      ['Écrire', 'يكتب'],
      ['Comprendre', 'يفهم'],
      ['Répondre', 'يجيب'],
    ],
  },
]

function ArabicGlossary() {
  const { pathname } = useLocation()
  if (pathname.endsWith('/quiz')) return null

  const glossary = glossaries.find(({ match }) => pathname.includes(match))
  if (!glossary) return null

  return (
    <aside className="arabic-glossary" aria-label="Arabic translation">
      <h2>{glossary.title} <span lang="ar" dir="rtl">· الترجمة بالعربية</span></h2>
      <div className="arabic-glossary__grid">
        {glossary.words.map(([term, translation]) => (
          <span key={term}>
            <strong>{term}</strong>
            <small lang="ar" dir="rtl">{translation}</small>
          </span>
        ))}
      </div>
    </aside>
  )
}

export default ArabicGlossary
