import { Link } from 'react-router-dom'
import './ModuleSix.css'

function Answer({ label, lines = 1 }) {
  return lines > 1 ? <label className="present-answer">{label}<textarea rows={lines} /></label> : <label className="present-answer">{label}<input type="text" /></label>
}

function Section({ title, children, correction }) {
  return <section className="lesson-section"><h2>{title}</h2>{children}<details className="correction"><summary>Voir la correction</summary><p>{correction}</p></details></section>
}

function FrenchSixthRevision() {
  return (
    <div className="module-page">
      <div className="module-heading">
        <p className="eyebrow">Français · 6e année de base</p>
        <h1>Fiche de révision · Modules 1 &amp; 2</h1>
        <p>Grammaire : le groupe nominal · Conjugaison : l’impératif, les temps et les verbes.</p>
        <Link className="button-link" to="/courses/6eme/francais/revision/quiz">Ouvrir le quiz /20 →</Link>
      </div>

      <Section title="Partie 1 · Grammaire : le groupe nominal" correction="GN : une voiture décapotable ; Jacques et Vincent ; les conseils de leur professeur ; mon père ; les vieux films ; ce fauteuil ; le clown ; cette horrible perruque ; le vase. Déterminants : une, les, leur, mon, les, ce, le, cette, le. Noms propres : Jacques, Vincent. Pronoms personnels : ils, elle, elle, elle, elle. Pour les exercices de remplacement : Les élèves aiment marcher dans la neige ; Amélie fait des courses au supermarché ; Robin a marqué un pénalty ; La comédienne est debout sur la scène. Majuscules : Jean, Françoise, Sidi Bou Saïd, Café des Délices, golfe de Tunis, Palais d’Erlanger. Pronoms : il, ils, vous, nous. Possessifs possibles : mon/ma, ses, sa. Démonstratifs : cette, un, ses deux, un. Dans le paragraphe : un, des, l’, une, le, les, ce ; forêt, écureuil, noisettes, animal, branche, vent, feuilles, sol, Mani, spectacle. Discussion : vous, nous, tu, je, je, ils, ils. ">
        <p>Un groupe nominal peut être formé d’un nom propre, d’un pronom personnel ou d’un déterminant + un nom commun. Le pronom personnel remplace un nom : <em>Magali → elle</em>. Le déterminant se place devant un nom.</p>
        <h3>Exercice 1</h3>
        <p>Souligne le groupe nominal et entoure le déterminant.</p>
        <ul><li>J’aimerais avoir une voiture décapotable.</li><li>Jacques et Vincent n’écoutent pas les conseils de leur professeur.</li><li>Mon père adore les vieux films.</li><li>Viens t’asseoir dans ce fauteuil !</li><li>Le clown est ridicule avec cette horrible perruque.</li><li>Sais-tu où est le vase ?</li></ul>
        <h3>Exercices 2 à 4</h3>
        <p>Classe les mots soulignés et entourés dans les catégories : déterminant, nom commun, nom propre, pronom personnel. Puis encadre les groupes nominaux de : <em>Fabien aime la natation. Sa sœur aime l’équitation. Mes parents se préparent pour voyager.</em></p>
        <p>Dans « Aline est institutrice. Elle aime beaucoup son métier. Elle fait bien son travail. Les élèves ont confiance en lui. », classe les mots en nom propre, nom commun, déterminant et pronom personnel.</p>
        <Answer label="Réponses des exercices 2 à 4" lines={3} />
        <h3>Exercices 5 à 11</h3>
        <p>Remplace le mot souligné par un nom propre ou un nom commun. Recopie le texte avec les majuscules des noms propres. Complète ensuite avec les pronoms personnels, les déterminants possessifs et démonstratifs.</p>
        <p><strong>Texte à corriger :</strong> La semaine dernière, deux touristes français Jean et sa femme Françoise sont allés à Sidi Bou Saïd. Ils se sont reposés au Café des Délices, qui offre une vue sur le golfe de Tunis. Le soir, ils ont assisté à un spectacle au Palais d’Erlanger.</p>
        <Answer label="Exercice 11 : vous / nous / tu / je / je / ils / ils" />
      </Section>

      <Section title="Partie 2 · Conjugaison : l’impératif, les temps et les verbes" correction="Ex. 1 : Range ; Choisissons. Ex. 2 : Vous ; Tu ; Nous. Ex. 3 : Écoute, traversons, finis, prenez, faisons, choisissez. Ex. 4 : Range ton bureau ! Lisons ce texte à haute voix ! Remplissez cette fiche ! Écris une lettre à ton ami ! Ex. 5 : Respectons les règles du jeu ! Ne reste pas longtemps au soleil ! Ne fais pas de bruit ! Ex. 7 : se met / pédaler ; est, a commencé / apprendre, lire, écrire ; a avalé. Ex. 8 : s’approche, a réparé, camper. Ex. 10 : Il a coupé (passé composé) ; vous ne rentrerez pas (futur) ; je ne vais pas (présent) ; ils arracheront (futur). Ex. 11 : entraîner, prépareront, réparer. Ex. 12 : réponses personnelles acceptées si l’expression temporelle convient. Ex. 13 : s’est inscrit, a utilisé, identifier, raboter, couper, est devenu, récompense, a donné, ouvre, fabrique, embauche, aider, fait, satisfaire, visitent, admirent, sera, gagnera. Ex. 14 : Les élèves ont apporté des tableaux. Ensuite, l’enseignante accroche les tableaux. Enfin, les enfants ramasseront les déchets. ">
        <h3>Exercices 1 à 6 · L’impératif</h3>
        <p>Souligne les verbes à l’impératif : <em>Tu ranges tes affaires. Range tes affaires. Nous choisissons un livre. Choisissons un livre.</em></p>
        <p>Écris le pronom : <em>Prenez soin de votre santé. Reste calme. Soyons solidaires.</em></p>
        <p>Conjugue à l’impératif : <em>(écouter, tu) la maîtresse ; (traverser, nous) la rue ; (finir, tu) tes devoirs ; (prendre, vous) vos cahiers ; (faire, nous) attention ; (choisir, vous) un responsable.</em></p>
        <Answer label="Transformations et conseils à l’ami souvent en retard" lines={5} />
        <h3>Exercices 7 à 11 · Les formes verbales</h3>
        <p>Entoure le verbe conjugué et souligne l’infinitif : <em>Le facteur se met à pédaler. René a commencé à apprendre à lire et à écrire. Il a avalé deux comprimés.</em></p>
        <p>Barre la forme fausse : <em>Le dentiste s’approche / s’approcher. Le mécanicien a réparé / réparer la voiture. La famille va campe / camper.</em></p>
        <Answer label="Exercice 10 : complète avec un pronom et indique le temps" lines={4} />
        <p>Barre la forme qui ne convient pas : <em>nous (nous entraînons / nous entraîner) ; les élèves (prépareront / préparer) ; aide son patron à (réparer / répare).</em></p>
        <h3>Exercices 12 à 14 · Les temps</h3>
        <p>Enrichis ces phrases avec une expression de temps : <em>Les élèves ont commencé à rédiger leur projet. Le photographe prendra une photo. Tu apprendras ta récitation. Le médecin examine le malade.</em></p>
        <p>Complète le texte sur Moncef, le menuisier, en choisissant entre le passé composé, le présent, le futur et l’infinitif.</p>
        <Answer label="Exercice 14 : rédige les trois phrases demandées" lines={4} />
      </Section>

      <section className="quiz-section"><p className="eyebrow">Évaluation</p><h2>Quiz de révision · /20</h2><p>Le quiz complet est disponible dans une page séparée.</p><Link className="button-link" to="/courses/6eme/francais/revision/quiz">Commencer le quiz /20 →</Link></section>
    </div>
  )
}

export default FrenchSixthRevision