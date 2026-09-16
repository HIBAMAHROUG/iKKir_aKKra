import { useState } from 'react'
import { Link } from 'react-router-dom'
import './ModuleSix.css'

const quizQuestions = [
  {
    question: 'Dans le texte, que montre l\'applaudissement du public ?',
    options: ['Joséphine a oublié son texte', 'Joséphine a bien joué son rôle', 'Le rideau est cassé'],
    answer: 1,
  },
  {
    question: 'Quel est un synonyme de « travail » ?',
    options: ['Le métier', 'La récréation', 'Le silence'],
    answer: 0,
  },
  {
    question: 'Quel déterminant convient : « ___ école » ?',
    options: ['Un', 'Une', 'Des'],
    answer: 1,
  },
  {
    question: 'Quelle phrase est au passé composé ?',
    options: ['Nous visiterons Tunis.', 'Nous visitons Tunis.', 'Nous avons visité Tunis.'],
    answer: 2,
  },
  {
    question: 'Après « pour », le verbe se met à...',
    options: ["l'infinitif", 'la forme impérative', 'la forme au présent'],
    answer: 0,
  },
  {
    question: 'Quel métier soigne les enfants ?',
    options: ['Le pédiatre', 'Le menuisier', 'Le journaliste'],
    answer: 0,
  },
  {
    question: 'Dans « Tom est silencieux », le mot « est » est...',
    options: ['Le verbe être', 'La préposition à', 'Un déterminant'],
    answer: 0,
  },
  {
    question: 'Quelle est la bonne forme : « Demain, je ___ » ?',
    options: ['travaillais', 'travaillerai', 'ai travaillé'],
    answer: 1,
  },
  {
    question: 'Que signifie « donner le meilleur de soi-même » ?',
    options: ['Faire tout son possible', 'Abandonner rapidement', 'Choisir un métier facile'],
    answer: 0,
  },
  {
    question: 'Quel mot complète la phrase : « Je ___ poser une question » ?',
    options: ['peut', 'peux', 'peu'],
    answer: 1,
  },
]

const corrections = {
  lecture: [
    'Joséphine a bien joué son rôle : le public applaudit et le rideau se relève plusieurs fois.',
    'Sa dernière réplique est : « Elle est morte. Adieu ! »',
    'Brusquement, tout à coup et soudain sont des mots de même sens.',
    'Elle est comparée à une statue ; les applaudissements ressemblent au bruissement de la mer ; ils l’enveloppent comme un manteau chaud.',
  ],
  grammaire: [
    'Nous irons à la piscine dimanche. La nuit, les étoiles scintillent dans le ciel.',
    'Le dentiste a arraché une dent à un enfant. L’hélicoptère est tombé dans la forêt. Tout l’équipage est porté disparu.',
    'Un nom commun est généralement accompagné d’un déterminant. Les noms propres s’écrivent sans déterminant, sauf certains pays et leurs habitants.',
  ],
  conjugaison: [
    'Passé : nous avons visité, le guide nous a expliqué. Présent : nous découvrons. Futur : nous partirons, nous regarderons.',
    'Présent : je joue. Passé composé : j’ai joué. Futur simple : je jouerai. Infinitif : jouer.',
    'Hier, nous sommes allés au zoo. Nous préparons un gâteau maintenant. Je lis un roman. Vous partirez l’été prochain. Demain, tu recevras ton ami. Ils ont fini leur devoir hier soir.',
  ],
  orthographe: [
    'Après à, de, par, pour et sans, le verbe se met à l’infinitif : pour préparer, à remplir, avant de mettre, par empiler, sans s’annoncer.',
    'Réponses : affamé, aider, marcher, dormir, jouer, essayé, embellir, commettre, tailler, chantez.',
    'Exemples : Je me lève tôt pour organiser ma journée. N’oublie pas de faire tes devoirs. Elle utilise l’eau pour laver la vaisselle.',
  ],
  vocabulaire: [
    'Travail, profession, métier, fonction, occupation et boulot sont des synonymes.',
    'Un journaliste couvre les événements et rédige des articles. Un plombier répare les fuites. Une couturière confectionne des vêtements. Un menuisier fabrique des meubles. Un instituteur enseigne aux élèves.',
    'Qualités utiles : courage, persévérance, respect, écoute, culture générale et goût du travail.',
  ],
  production: [
    'Rédige au moins huit phrases sur Tom pendant son stage.',
    'Ajoute un dialogue, les réactions de Tom et de Paloma, puis les sentiments de Tom à la fin.',
    'Exemple de conclusion : Tom se sent honteux, mais il comprend que découvrir un métier demande de l’attention et de la curiosité.',
  ],
}

function Section({ title, children, correction }) {
  return (
    <section className="lesson-section">
      <h2>{title}</h2>
      {children}
      <details className="correction">
        <summary>Voir la correction</summary>
        <ul>
          {correction.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </details>
    </section>
  )
}

function ModuleSix() {
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const score = quizQuestions.reduce(
    (total, item, index) => total + (answers[index] === item.answer ? 2 : 0),
    0,
  )

  function chooseAnswer(index, value) {
    setAnswers((current) => ({ ...current, [index]: Number(value) }))
    setSubmitted(false)
  }

  return (
    <div className="module-page">
      <div className="module-heading">
        <p className="eyebrow">Français · 6e année</p>
        <h1>Module 1 : Le travail et les métiers</h1>
        <p>Lis les leçons, consulte les corrections, puis passe l’évaluation sur 20 points.</p>
      </div>

      <Section title="1. Lecture : Apprentie comédienne" correction={corrections.lecture}>
        <p>Diplômée de l’école des arts dramatiques, Joséphine apprend le métier de comédienne. Après sa dernière réplique, un long silence laisse place aux applaudissements. Elle salue le public plusieurs fois et comprend que sa prestation a réussi.</p>
        <h3>Questions essentielles</h3>
        <ul>
          <li>La dernière réplique est : « Elle est morte. Adieu ! »</li>
          <li>Le public applaudit : cela montre que Joséphine a bien joué.</li>
          <li>Elle est désignée par : la jeune fille, l’apprentie comédienne et la future actrice.</li>
        </ul>
      </Section>

      <Section title="2. Grammaire : les déterminants" correction={corrections.grammaire}>
        <p>Le déterminant précise le genre et le nombre du nom : <strong>le, la, l’, un, une, les, des</strong>. Le nom commun est accompagné d’un déterminant : <em>une école, un préau, des classes</em>.</p>
        <p>Le nom propre s’écrit généralement sans déterminant : <em>Joséphine, Karim, Lyon</em>. Exception : <em>la Tunisie, la France, les Tunisiens</em>.</p>
        <h3>À retenir</h3>
        <p>Singulier masculin : le, un. Singulier féminin : la, une. Pluriel : les, des. Devant une voyelle, on utilise souvent l’ : <em>l’école, l’équipage</em>.</p>
      </Section>

      <Section title="3. Conjugaison : présent, passé et futur" correction={corrections.conjugaison}>
        <div className="time-grid">
          <div><strong>Présent</strong><span>Je joue maintenant.</span></div>
          <div><strong>Passé composé</strong><span>J’ai joué hier.</span></div>
          <div><strong>Futur simple</strong><span>Je jouerai demain.</span></div>
          <div><strong>Infinitif</strong><span>Jouer ne change pas.</span></div>
        </div>
        <p>Lis les indicateurs de temps : <em>aujourd’hui</em> appelle souvent le présent, <em>hier</em> le passé composé et <em>demain</em> le futur simple.</p>
      </Section>

      <Section title="4. Orthographe : l’infinitif après à, de, par, pour, sans" correction={corrections.orthographe}>
        <p>Quand deux verbes se suivent, le deuxième est à l’infinitif. Après <strong>à, de, par, pour, sans</strong>, on écrit aussi l’infinitif : <em>pour préparer, avant de dormir, sans commettre de fautes</em>.</p>
        <p>Attention aux homophones : <strong>a</strong> est le verbe avoir, <strong>à</strong> est une préposition ; <strong>et</strong> relie, <strong>est</strong> est le verbe être ; <strong>peux</strong> accompagne je/tu, <strong>peut</strong> accompagne il/elle.</p>
      </Section>

      <Section title="5. Vocabulaire : le travail et les métiers" correction={corrections.vocabulaire}>
        <p>Le travail peut apporter stabilité, autonomie, plaisir, argent, dignité et bien-être. Il demande de l’effort, du courage et de la passion.</p>
        <div className="job-grid">
          <span>Journaliste : recueillir et transmettre des informations.</span>
          <span>Plombier : installer et réparer les équipements sanitaires.</span>
          <span>Couturière : confectionner des vêtements et faire des retouches.</span>
          <span>Menuisier : fabriquer et réparer des meubles.</span>
          <span>Instituteur : enseigner et accompagner les élèves.</span>
          <span>Pédiatre : soigner les enfants.</span>
        </div>
        <p className="quote">« Petit à petit, l’oiseau fait son nid. » Donner le meilleur de soi-même, c’est faire tout son possible.</p>
      </Section>

      <Section title="6. Production écrite" correction={corrections.production}>
        <p><strong>Situation :</strong> Pendant son stage, Tom regarde des vidéos au lieu d’écouter le professionnel. Paloma est déçue et lui parle.</p>
        <p><strong>Consigne :</strong> Rédige un récit d’au moins huit phrases avec un dialogue, les réactions des personnages et les sentiments de Tom à la fin.</p>
        <div className="writing-lines">1. ........................................................................................................<br />2. ........................................................................................................<br />3. ........................................................................................................<br />4. ........................................................................................................</div>
      </Section>

      <section className="quiz-section">
        <p className="eyebrow">Évaluation finale</p>
        <h2>Quiz du module 1 · /20</h2>
        <p>10 questions, 2 points par bonne réponse. Choisis une réponse pour chaque question.</p>
        {quizQuestions.map((item, index) => (
          <fieldset className="quiz-question" key={item.question}>
            <legend>{index + 1}. {item.question}</legend>
            {item.options.map((option, optionIndex) => (
              <label key={option}>
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={optionIndex}
                  checked={answers[index] === optionIndex}
                  onChange={(event) => chooseAnswer(index, event.target.value)}
                />
                {option}
              </label>
            ))}
          </fieldset>
        ))}
        <button className="quiz-button" type="button" onClick={() => setSubmitted(true)}>Corriger mon quiz</button>
        {submitted && (
          <div className="score-box" role="status">
            <strong>Ta note : {score}/20</strong>
            <span>{score >= 16 ? 'Excellent travail !' : score >= 10 ? 'Bon travail, continue tes révisions.' : 'Relis la fiche et réessaie encore.'}</span>
          </div>
        )}
      </section>

      <Link className="button-link" to="/">Retour à l’accueil</Link>
    </div>
  )
}

export default ModuleSix
