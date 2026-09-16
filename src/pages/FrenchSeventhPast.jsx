import { Link } from 'react-router-dom'
import './FrenchPresent.css'

function Answer({ label, lines = 1 }) {
  return lines > 1 ? <label className="present-answer">{label}<textarea rows={lines} /></label> : <label className="present-answer">{label}<input type="text" /></label>
}

function Correction({ children }) {
  return <details className="present-correction"><summary>Voir la correction</summary>{children}</details>
}

function FrenchSeventhPast() {
  return (
    <div className="present-page">
      <header className="present-heading">
        <p className="eyebrow">Français · 7th form</p>
        <h1>Le passé composé et les verbes pronominaux</h1>
        <p>Conjugaison, accords, exercices corrigés et impératif.</p>
        <Link className="present-quiz-link" to="/courses/7eme/francais/passe-compose/quiz">Évaluation séparée /20 →</Link>
      </header>

      <section className="present-section">
        <h2>1. Le passé composé</h2>
        <p>Le passé composé est formé de l’auxiliaire <strong>être</strong> ou <strong>avoir</strong> au présent et du participe passé. Il exprime une action terminée.</p>
        <div className="ending-grid"><span><strong>1er groupe</strong><br />participe en -é : ils ont téléphoné</span><span><strong>2e groupe</strong><br />participe en -i : nous avons grandi</span><span><strong>3e groupe</strong><br />-t, -s ou -u : vous avez lu, nous avons fait</span><span><strong>Avec être</strong><br />accord avec le sujet : les filles sont parties</span></div>
      </section>

      <section className="present-section">
        <h2>2. Reconnaître et compléter</h2>
        <p>Écris l’infinitif des verbes au passé composé.</p>
        <Answer label="Quand mon tour est venu (___), j’ai demandé (___). J’ai montré (___) sa photo. Le maître a regardé (___) et il a dit (___). J’ai rougi (___) de bonheur. J’ai annoncé (___) la nouvelle." lines={3} />
        <Answer label="Transforme avec “mes cousins” : Ils ___ au maître. Ils ___ leur photo. Mes cousins ___ de bonheur. Ils ___ la bonne nouvelle." />
        <Correction><p>Infinitifs : venir, demander, montrer, regarder, dire, rougir, annoncer. Réponses : ont demandé, ont montré, ont rougi, ont annoncé.</p></Correction>
      </section>

      <section className="present-section">
        <h2>3. Conjuguer au passé composé</h2>
        <Answer label="Rex (s’installer) ___. Quand il (voir) ___ le maître, il (montrer) ___ ses dents. Le maître (s’arrêter) ___. J’(faire) ___ mon exposé. Mes camarades m’(applaudir) ___." lines={3} />
        <Answer label="Hier, nous (participer) ___ à une fête. Mon père (choisir) ___ les cadeaux. Ma mère (confectionner) ___ des gâteaux. Mon oncle (se déguiser) ___ en clown. Nous (jouer) ___ des sketches." lines={3} />
        <Correction><p>Rex s’est installé, il a vu, il a montré. Le maître s’est arrêté. J’ai fait. Mes camarades m’ont applaudi. Nous avons participé, mon père a choisi, ma mère a confectionné, mon oncle s’est déguisé, nous avons joué.</p></Correction>
      </section>

      <section className="present-section">
        <h2>4. Les verbes avec être</h2>
        <p>Les verbes de mouvement et les verbes pronominaux utilisent souvent <strong>être</strong> au passé composé. Le participe passé s’accorde : je suis sorti(e), elles sont sorties.</p>
        <Answer label="Paul (ouvrir) ___ la fenêtre. Les rayons (pénétrer) ___ et (caresser) ___ l’oreiller. Le chat (dresser) ___ la tête et (observer) ___ son maître. Maman m’(promettre) ___ un bon petit déjeuner." lines={3} />
        <Answer label="Qui parle, Nadia ou Sami ? Je me suis souvenue (___). Je suis sorti (___). Je suis revenue (___). Je suis restée (___). Je suis retombée (___)." />
        <Correction><p>Paul a ouvert. Les rayons ont pénétré et ont caressé. Le chat a dressé et a observé. Maman m’a promis. “Souvenue, revenue, restée, retombée” : Nadia ; “sorti” : Sami.</p></Correction>
      </section>

      <section className="present-section">
        <h2>5. Les verbes pronominaux</h2>
        <p>Un verbe pronominal utilise un pronom réfléchi qui désigne la même personne que le sujet. Au passé composé, il se conjugue avec <strong>être</strong>.</p>
        <div className="ending-grid"><span>Présent : je me brosse, tu te brosses, elle se brosse</span><span>Passé : je me suis brossé(e), elle s’est brossée</span><span>Pluriel : nous nous sommes brossés(es)</span><span>Impératif : brosse-toi, brossons-nous, brossez-vous</span></div>
        <Answer label="Souligne les verbes pronominaux : Nous expliquons la leçon. Vous vous lavez les dents. Ils se sont trompés. La pluie se calmera. Je me rends compte de sa gentillesse." lines={3} />
        <Answer label="Ajoute le pronom : Tu ___ inquiètes. Nous ___ lançons. Vous ___ êtes perdus. Je ___ promène. Mes cousins ___ faufileront." />
        <Correction><p>Verbes pronominaux : vous vous lavez, ils se sont trompés, se calmera, je me rends compte. Pronoms : t’, nous, vous, me, se.</p></Correction>
      </section>

      <section className="present-section">
        <h2>6. Passé composé et impératif</h2>
        <Answer label="Mets au passé composé : Le bateau (se briser) ___. Marie (se mettre) ___ à table. Nous (s’allonger) ___ sous le parasol. Les dames (se promener) ___. Tu (se diriger) ___ vers le guichet." lines={3} />
        <Answer label="Transforme à l’impératif : “Tu te maquilles” → ___. “Vous vous occupez de votre frère” → ___. “Nous nous méfions des animaux” → ___." lines={3} />
        <Correction><p>Le bateau s’est brisé. Marie s’est mise. Nous nous sommes allongés. Les dames se sont promenées. Tu t’es dirigé(e). Impératif : maquille-toi ! Occupez-vous de votre frère ! Méfions-nous des animaux !</p></Correction>
      </section>

      <section className="present-section">
        <h2>7. Production</h2>
        <p>Raconte en six phrases une activité passée. Utilise au moins deux verbes avec avoir, deux verbes avec être et un verbe pronominal.</p>
        <Answer label="Mon récit" lines={8} />
        <Correction><p>Exemple : Hier, j’ai visité un musée. J’ai regardé des tableaux. Ensuite, je suis sorti avec mes amis. Nous sommes allés au parc. Je me suis reposé sous un arbre. Nous avons raconté notre journée.</p></Correction>
      </section>
      <Link className="present-quiz-link" to="/courses/7eme/francais/passe-compose/quiz">Ouvrir le quiz séparé /20 →</Link>
    </div>
  )
}

export default FrenchSeventhPast
