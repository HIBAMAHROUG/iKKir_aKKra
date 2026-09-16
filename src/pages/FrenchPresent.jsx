import { Link, useParams } from 'react-router-dom'
import './FrenchPresent.css'

function Answer({ label, lines = 1 }) {
  return lines > 1 ? <label className="present-answer">{label}<textarea rows={lines} /></label> : <label className="present-answer">{label}<input type="text" /></label>
}

function Correction({ children }) {
  return <details className="present-correction"><summary>Voir la correction</summary>{children}</details>
}

function FrenchPresent() {
  const { level } = useParams()
  const form = level === '5eme' ? '5th form' : level === '6eme' ? '6th form' : '7th form'

  return (
    <div className="present-page">
      <header className="present-heading">
        <p className="eyebrow">Français · {form}</p>
        <h1>Le présent de l’indicatif</h1>
        <p>Cahier de conjugaison : reconnaître les groupes, conjuguer et utiliser le présent.</p>
        <Link className="present-quiz-link" to={`/courses/${level}/francais/conjugaison-present/quiz`}>Évaluation séparée /20 →</Link>
      </header>

      <section className="present-section">
        <h2>La leçon</h2>
        <p>Le présent de l’indicatif indique une action en train de se réaliser. Il peut aussi exprimer une vérité générale ou rendre une action passée plus vivante.</p>
        <div className="ending-grid"><span><strong>1er groupe</strong><br />e · es · e · ons · ez · ent</span><span><strong>2e groupe</strong><br />is · is · it · issons · issez · issent</span><span><strong>3e groupe</strong><br />s · s · t · ons · ez · ent</span><span><strong>-dre, pouvoir, vouloir</strong><br />ds · ds · d / x · x · t</span></div>
      </section>

      <section className="present-section">
        <h2>1. Reconnaître les groupes</h2>
        <p>Écris l’infinitif des verbes entre parenthèses, puis classe-les dans les trois groupes.</p>
        <Answer label="Cette fois, il n’y a (___) pas le mur de la pluie. Le vent vient (___) seul. Je vois (___) les arbres bouger. Les nuages avancent (___). C’est (___) le ciel qui m’effraie (___). Il se déplace (___), s’ouvre (___) et j’ai (___) l’impression de tomber." lines={3} />
        <Answer label="Classe les infinitifs : 1er groupe / 2e groupe / 3e groupe." lines={3} />
        <Correction><p>Infinitifs : avoir, venir, voir, avancer, être, effrayer, se déplacer, s’ouvrir, avoir, tomber. 1er groupe : avancer, effrayer, déplacer, tomber. 2e groupe : aucun dans cette série. 3e groupe : avoir, venir, voir, être, ouvrir.</p></Correction>
      </section>

      <section className="present-section">
        <h2>2. Compléter les terminaisons</h2>
        <Answer label="Vous nettoy___ la cuisine. Le coureur pren___ place. Nous applaud___ les participants. Les enfants prenn___ leur petit déjeuner. Tu veu___ ranger ta chambre. Nous mett___ des fleurs dans le vase. Je descend___ la pente." lines={3} />
        <Correction><p>Vous nettoyez. Le coureur prend. Nous applaudissons. Les enfants prennent. Tu veux. Nous mettons. Je descends.</p></Correction>
      </section>

      <section className="present-section">
        <h2>3. Conjuguer au présent</h2>
        <Answer label="Julie ___ (faire) de la gymnastique. Les enfants ___ (crier) très fort quand ils ___ (jouer). Tu ___ (fournir) beaucoup d’efforts." />
        <Answer label="Mon père (se préparer) ___ en haut de la piste. Il (prendre) ___ son élan, (pousser) ___ sur ses bâtons et (descendre) ___ la piste." />
        <Correction><p>Julie fait. Les enfants crient quand ils jouent. Tu fournis. Mon père se prépare, prend son élan, pousse et descend la piste.</p></Correction>
      </section>

      <section className="present-section">
        <h2>4. Les verbes du 3e groupe</h2>
        <p>Complète le paragraphe avec <strong>faire, se retourner, avoir, vouloir, savoir, pouvoir, voir, se dire, aller, venir</strong>.</p>
        <Answer label="Le bateau ___ une longue glissade et se ___. J’___ de l’eau dans la cabine. Je ___ pomper, mais je ne ___ pas si je ___ atteindre la pompe. Je ___ un poisson. Je me ___ que j’___ y rester s’il ne me ___ pas une idée." lines={4} />
        <Correction><p>Le bateau fait une longue glissade et se retourne. J’ai de l’eau. Je veux pomper, mais je ne sais pas si je peux atteindre la pompe. Je vois un poisson. Je me dis que je vais y rester s’il ne me vient pas une idée.</p></Correction>
      </section>

      <section className="present-section">
        <h2>5. Construire un paragraphe</h2>
        <p>Utilise : <strong>prendre, pouvoir, avoir, être, raconter, savoir</strong>.</p>
        <Answer label="Toute seule dans ma chambre, c’___ différent. Je ___ mon chat contre moi et lui ___ ma journée. Je ___ bien qu’il ne ___ pas comprendre ce que je lui ___. Mais j’___ besoin de lui." lines={4} />
        <Correction><p>C’est différent. Je prends mon chat et lui raconte ma journée. Je sais bien qu’il ne peut pas comprendre ce que je lui raconte. Mais j’ai besoin de lui.</p></Correction>
      </section>

      <section className="present-section">
        <h2>6. Production</h2>
        <p>Écris six phrases au présent : deux habitudes, deux actions de maintenant et deux vérités générales.</p>
        <Answer label="Mes phrases" lines={8} />
        <Correction><p>Exemples : Je lis chaque soir. Nous allons à l’école. Je fais mes exercices maintenant. Ma sœur prépare le dîner. Le soleil se lève à l’est. Les oiseaux chantent au printemps.</p></Correction>
      </section>
      <Link className="present-quiz-link" to={`/courses/${level}/francais/conjugaison-present/quiz`}>Ouvrir le quiz séparé /20 →</Link>
    </div>
  )
}

export default FrenchPresent
