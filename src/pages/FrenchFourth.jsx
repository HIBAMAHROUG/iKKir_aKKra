import { Link } from 'react-router-dom'
import './FrenchFourth.css'

function Answer({ label, lines = 1 }) {
  return lines > 1 ? <label className="fourth-answer">{label}<textarea rows={lines} /></label> : <label className="fourth-answer">{label}<input type="text" /></label>
}

function Corrections({ children }) {
  return <details className="fourth-correction"><summary>Voir la correction</summary>{children}</details>
}

function FrenchFourth() {
  return (
    <div className="fourth-page">
      <header className="fourth-heading">
        <p className="eyebrow">Français · 5th form</p>
        <h1>Exercices de remédiation</h1>
        <p>Verbes, prépositions, déterminants, vocabulaire, phrase et accord de l’adjectif.</p>
        <Link className="quiz-link" to="/courses/5eme/francais/quiz">Passer l’évaluation séparée /20 →</Link>
      </header>

      <section className="fourth-section">
        <h2>1. Les verbes être, avoir et aller</h2>
        <div className="conjugation-grid"><span><strong>Être</strong><br />je suis · tu es · il est · nous sommes · vous êtes · ils sont</span><span><strong>Avoir</strong><br />j’ai · tu as · il a · nous avons · vous avez · ils ont</span><span><strong>Aller</strong><br />je vais · tu vas · il va · nous allons · vous allez · ils vont</span></div>
        <h3>Complète avec être</h3>
        <Answer label="Le père de Sophie ___ docteur. Je ne ___ pas italien. Vous ___ fatigués. Tu ___ en retard. Elle ___ aimable." />
        <h3>Complète avec avoir</h3>
        <Answer label="J’___ une sœur. Marion ___ un chat. Nous ___ des devoirs. Tu ___ soif, elle ___ faim. Mon père ___ une voiture." />
        <h3>Complète avec aller</h3>
        <Answer label="Je ___ à la piscine. Tu ___ au parc. Nous ___ à l’école. Vous ___ à la pharmacie. Ils ___ à la plage." />
        <Corrections><p>Être : est, suis, êtes, es, est. Avoir : ai, a, avons, as, a, a. Aller : vais, vas, allons, allez, vont.</p></Corrections>
      </section>

      <section className="fourth-section">
        <h2>2. Aller : à, au ou chez</h2>
        <p><strong>à</strong> + nom féminin : à la plage. <strong>au</strong> = à + le, devant un nom masculin : au parc. <strong>chez</strong> devant une personne : chez le boulanger.</p>
        <Answer label="Je vais ___ le boulanger. Je vais ___ la boulangerie. Tu vas ___ le boucher. Tu vas ___ la boucherie. Il va ___ l’épicerie. Elle va ___ l’épicier." />
        <Answer label="Nous allons ___ notre tante. Pascal va ___ travail puis ___ magasin. Rim va ___ la piscine et son frère va ___ cinéma." />
        <Corrections><p>chez le boulanger · à la boulangerie · chez le boucher · à la boucherie · à l’épicerie · chez l’épicier · chez notre tante · au travail · au magasin · à la piscine · au cinéma.</p></Corrections>
      </section>

      <section className="fourth-section">
        <h2>3. Le verbe faire</h2>
        <p>Je fais · tu fais · il/elle fait · nous faisons · vous faites · ils/elles font.</p>
        <Answer label="Conjugue : Je ___ mes exercices. Tu ___ du sport. Il ___ un dessin. Nous ___ un gâteau. Vous ___ attention. Ils ___ leurs devoirs." />
        <Answer label="Construis une phrase avec faire : Youssef / tu / il / nous / mes amis." lines={4} />
        <Corrections><p>Je fais mes exercices. Tu fais du sport. Il fait un dessin. Nous faisons un gâteau. Vous faites attention. Ils font leurs devoirs.</p></Corrections>
      </section>

      <section className="fourth-section">
        <h2>4. Les verbes du 1er et du 2e groupe</h2>
        <div className="conjugation-grid"><span><strong>Chanter</strong><br />je chante · tu chantes · il chante · nous chantons · vous chantez · ils chantent</span><span><strong>Finir</strong><br />je finis · tu finis · il finit · nous finissons · vous finissez · ils finissent</span></div>
        <Answer label="Conjugue au présent : Je (jouer) ___. Nous (commencer) ___. Vous (manger) ___. Ils (choisir) ___. Elle (réussir) ___." />
        <Answer label="Construis une phrase avec examiner, tomber, arroser, planter, aimer et réussir." lines={4} />
        <Corrections><p>Je joue. Nous commençons. Vous mangez. Ils choisissent. Elle réussit. Attention : nous commençons prend une cédille.</p></Corrections>
      </section>

      <section className="fourth-section">
        <h2>5. Prendre, mettre et les déterminants possessifs</h2>
        <p><strong>Prendre :</strong> je prends, tu prends, il prend, nous prenons, vous prenez, ils prennent. <strong>Mettre :</strong> je mets, tu mets, il met, nous mettons, vous mettez, ils mettent.</p>
        <Answer label="Je ___ la table. Tu ___ ton cartable. Nous ___ de beaux vêtements. Vous ___ le bus. Les garçons ___ les ordures dans la poubelle." />
        <Answer label="Complète : Ce vélo est à moi : c’est ___ vélo. Cette robe est à toi : c’est ___ robe. Ces livres sont à nous : ce sont ___ livres. Cette rose est à elles : c’est ___ rose." />
        <Corrections><p>prends · mets · mettons · prenez · mettent. Possessifs : mon, ta, nos, leur.</p></Corrections>
      </section>

      <section className="fourth-section">
        <h2>6. Vocabulaire et phrases</h2>
        <p>Donner un conseil : <strong>Tu dois faire tes exercices. Il faut faire du sport. Vous devez mettre vos manteaux.</strong></p>
        <h3>Enrichis les phrases</h3>
        <Answer label="Je prépare un gâteau. La famille prend le dîner. Le maître parle. Il fait du sport." lines={4} />
        <h3>Enrichis le groupe nominal</h3>
        <Answer label="Je bois une tisane. Ton chat est perdu. La voiture est belle. Mon père nettoie notre jardin." lines={4} />
        <Corrections><p>Exemples : Je prépare un délicieux gâteau dans la cuisine. La famille prend le dîner calmement le soir. Mon gentil père nettoie notre grand jardin.</p></Corrections>
      </section>

      <section className="fourth-section">
        <h2>7. Accord de l’adjectif qualificatif</h2>
        <div className="adjective-grid"><span>petit → petite</span><span>fort → forte</span><span>grand → grande</span><span>heureux → heureuse</span><span>généreux → généreuse</span><span>gris → grise</span><span>beau → belle</span><span>nouveau → nouvelle</span><span>blanc → blanche</span><span>neuf → neuve</span></div>
        <Answer label="Mets au féminin : un garçon courageux → une fille ___. Un homme heureux → une femme ___. Un pull neuf → une robe ___." />
        <Corrections><p>courageuse · heureuse · neuve.</p></Corrections>
      </section>

      <Link className="quiz-link" to="/courses/5eme/francais/quiz">Ouvrir le quiz séparé /20 →</Link>
    </div>
  )
}

export default FrenchFourth
