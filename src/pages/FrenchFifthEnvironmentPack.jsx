import { Link, useLocation } from 'react-router-dom'
import './FrenchFifthEnvironmentPack.css'

const treeText = `Aujourd’hui, c’est la fête de l’arbre. Le directeur de l’école demande aux élèves de planter des arbres dans le jardin. Avant de rentrer à la maison, tous les élèves se dirigent vers le jardin de l’école. Ils plantent de petits arbres et ils les arrosent.

Paul et Pierre sont deux méchants garçons. Ils coupent les racines et plantent seulement les feuillages. Le lendemain, quand le directeur fait une tournée dans le jardin, il voit des feuilles mortes à la place des arbres.

Très fâché, il gronde les deux garçons. Il leur dit : « Un arbre, c’est la joie de la terre et les arbres nous donnent de l’oxygène. » Honteux, les deux enfants demandent pardon. Ils lui promettent de respecter les arbres et la nature.`

const quartierText = `Dans un petit quartier calme, les habitants vivent entourés de maisons coquettes, mais les rues commencent à être envahies par des déchets et des herbes folles. Les poubelles débordent, et personne ne semble prendre soin de l’endroit.

Un jour, Sami, un garçon curieux et observateur, décide qu’il est temps d’agir. Il remarque des papiers, des bouteilles vides et des fleurs fanées. Il en parle à ses amis : « Voulons-nous que notre quartier soit propre et accueillant ? Nous devons tous nous y mettre. »

Le lendemain, Sami rassemble ses voisins pour expliquer son plan : « Nous allons organiser une journée de nettoyage. Chacun pourra apporter des balais, des pelles et des sacs pour les déchets. Nous planterons aussi des fleurs pour embellir notre quartier. »

Le samedi suivant, tout le monde se met au travail. Amira récolte des bouteilles en plastique pour les recycler. Karim désherbe les trottoirs. Même les plus jeunes enfants participent en arrosant les plantes. Ensemble, ils nettoient chaque coin du quartier.

Le soir, le quartier est propre, éclatant et rempli de fleurs. Sami dit : « Quand nous travaillons ensemble, nous pouvons rendre notre environnement plus beau et plus agréable. »`

function Box({ title, children }) {
  return <section className="fifth-pack__box"><h2>{title}</h2>{children}</section>
}

function Navigation({ part }) {
  return (
    <nav className="fifth-pack__nav" aria-label="Parties de la fiche">
      <Link className={part === 'lecture' ? 'is-current' : ''} to="/courses/5eme/francais/environnement-pack/lecture">📖 Lecture</Link>
      <Link className={part === 'production' ? 'is-current' : ''} to="/courses/5eme/francais/environnement-pack/production">✍️ Production écrite</Link>
      <Link className={part === 'langue' ? 'is-current' : ''} to="/courses/5eme/francais/environnement-pack/langue">🔤 Langue</Link>
    </nav>
  )
}

function Header({ part }) {
  return <header className="fifth-pack__hero">
    <p className="eyebrow">Français · 5e année · Module 1</p>
    <h1>🌳 Notre environnement</h1>
    <p>Fiche de travail : lecture, production écrite et langue</p>
    <Navigation part={part} />
  </header>
}

function Lecture() {
  return <>
    <Box title="Lecture 1 : Le respect des arbres">
      <div className="fifth-pack__reading"><p>{treeText}</p></div>
      <h3>1. J’écris « vrai » ou « faux »</h3>
      <ul className="fifth-pack__exercise"><li>Aujourd’hui, c’est la fête de l’arbre. ……</li><li>Les élèves plantent des fleurs dans le jardin. ……</li><li>Le directeur gronde les deux enfants. ……</li></ul>
      <details><summary>Voir la correction</summary><p>1. Vrai. 2. Faux : ils plantent des arbres. 3. Vrai.</p></details>
      <h3>2. J’entoure la bonne réponse</h3>
      <ul className="fifth-pack__exercise"><li>Le directeur est fâché : il est content / il est en colère.</li><li>Paul et Pierre sont gentils / méchants.</li></ul>
      <details><summary>Voir la correction</summary><p>Le directeur est en colère. Paul et Pierre sont méchants.</p></details>
      <h3>3. Je réponds aux questions</h3>
      <ol className="fifth-pack__exercise"><li>Que font Paul et Pierre ?</li><li>Que dit le directeur aux deux garçons ?</li><li>Paul et Pierre respectent-ils les arbres ? Pourquoi ?</li><li>Pourquoi faut-il respecter les arbres ?</li></ol>
      <details><summary>Voir la correction</summary><p>Ils coupent les racines et plantent seulement les feuillages. Le directeur dit : « Un arbre, c’est la joie de la terre et les arbres nous donnent de l’oxygène. » Non, ils ne respectent pas les arbres car ils coupent les racines. Il faut les respecter car ils donnent de l’oxygène et sont la joie de la terre.</p></details>
      <h3>4. Je complète les phrases</h3>
      <ul className="fifth-pack__exercise"><li>Le lendemain, le directeur ______ dans le jardin.</li><li>Il voit ______ à la place des arbres.</li><li>Très fâché, il ______ les deux garçons.</li><li>Les enfants demandent ______ et promettent ______.</li></ul>
      <details><summary>Voir la correction</summary><p>fait une tournée ; des feuilles mortes ; gronde ; pardon ; de respecter les arbres et la nature.</p></details>
      <h3>5. Début, suite ou fin ?</h3>
      <ol className="fifth-pack__exercise"><li>Paul et Pierre coupent les racines. ……</li><li>Le directeur demande aux élèves de planter des arbres. ……</li><li>Le directeur gronde les deux enfants. ……</li></ol>
      <details><summary>Voir la correction</summary><p>1. Suite · 2. Début · 3. Fin.</p></details>
      <h3>6. Je trouve un mot de même sens</h3>
      <ul className="fifth-pack__exercise"><li>Les arbustes sont bien arrosés. → …</li><li>Les enfants s’excusent auprès de leurs parents. → …</li></ul>
      <details><summary>Voir la correction</summary><p>Les petits arbres sont bien arrosés. Les enfants demandent pardon à leurs parents.</p></details>
    </Box>
    <Box title="Lecture 2 : Le grand projet du quartier fleuri">
      <div className="fifth-pack__reading"><p>{quartierText}</p></div>
      <h3>Questions</h3>
      <ol className="fifth-pack__exercise"><li>Les habitants prenaient-ils soin de leur environnement au début ? Justifie.</li><li>Sami agit-il seul ? Justifie.</li><li>Tout le monde participe-t-il au nettoyage ?</li><li>Qui dit : « Nous allons organiser une journée de nettoyage » ?</li><li>Quelles fleurs sont plantées ? Quel jour les habitants travaillent-ils ensemble ?</li><li>Relie : Sami, Amira, Karim, les enfants → propose / récolte / désherbe / arrosent.</li><li>Trouve dans le texte : recouvertes, rendre plus beau, ramassage, belles, le contraire de sale.</li></ol>
      <details><summary>Voir la correction</summary><p>Faux : les rues sont envahies par des déchets. Faux : Sami rassemble ses voisins. Vrai : même les plus jeunes participent. C’est Sami. Les fleurs sont des marguerites, des géraniums et des tournesols ; le travail a lieu samedi. Sami propose, Amira récolte, Karim désherbe et les enfants arrosent. Les réponses sont : envahies, embellir, récolte, coquettes, propre.</p></details>
    </Box>
  </>
}

function Production() {
  return <>
    <Box title="Projet d’écriture : ranger une chambre">
      <p><strong>Consigne :</strong> Je raconte un événement en rapport avec ma vie à l’école et mon environnement.</p>
      <div className="fifth-pack__word-grid"><span>ranger · balayer · nettoyer · plier · organiser · faire le lit</span><span>la chambre · le lit · les vêtements · les livres · le bureau</span><span>sale · propre · en désordre · joyeux · fier · agréable</span><span>« On va tout ranger ensemble ! » · « Bravo mes enfants ! »</span></div>
      <label className="fifth-pack__answer">Ma production écrite<textarea rows="9" /></label>
      <details><summary>Voir un modèle</summary><p>Samedi matin, ma maman me demande de ranger ma chambre. Je balaie le sol, je plie mes vêtements et je fais mon lit. J’organise aussi mes livres sur le bureau. Ma maman est fière de moi : « Bravo mon enfant ! Quelle belle chambre ! »</p></details>
    </Box>
    <Box title="Projet d’écriture : une action pour l’environnement">
      <div className="fifth-pack__word-grid"><span>ramasser · nettoyer · trier · jeter · sensibiliser · participer</span><span>les déchets · la plage · une poubelle · des sacs · une équipe · une campagne</span><span>propre · agréable · magnifique · responsable · écologique · citoyenne</span><span>ensemble · joyeusement · avec énergie · sans hésiter · avec plaisir</span></div>
      <label className="fifth-pack__answer">Raconte une campagne de nettoyage<textarea rows="9" /></label>
      <details><summary>Voir un modèle</summary><p>Hier, notre classe a organisé une campagne de nettoyage à la plage. Nous avons ramassé les déchets avec énergie, trié les papiers et jeté les sacs dans la poubelle. Ensemble, nous avons travaillé joyeusement. La plage est devenue propre et agréable.</p></details>
    </Box>
    <Box title="Mon projet d’écriture n° 1">
      <p>Remets les parties dans l’ordre : le début, la suite ou la fin.</p>
      <ol className="fifth-pack__exercise"><li>Le directeur nous surveille. Tout est merveilleux. La cour devient comme un paradis.</li><li>Aujourd’hui, nous allons à l’école pour fêter l’arbre. Nous nous partageons en groupes.</li><li>Nous ramassons les ordures, arrachons les mauvaises herbes, plantons des sapins et arrosons les plantes.</li></ol>
      <details><summary>Voir la correction</summary><p>2 = début · 3 = suite · 1 = fin. Les élèves nettoient, plantent et arrosent ; ils sont fatigués mais contents.</p></details>
    </Box>
  </>
}

function Langue() {
  return <>
    <Box title="Les trois temps : présent, passé composé et futur">
      <p><strong>Présent</strong> : maintenant — je mange. <strong>Passé composé</strong> : hier — j’ai mangé. <strong>Futur</strong> : plus tard — je mangerai.</p>
      <ol className="fifth-pack__exercise"><li>Indique le temps : Nous ramassons les papiers. Les élèves ont planté des fleurs. Demain, je peindrai les bancs. Vous avez nettoyé le trottoir.</li><li>Complète avec aujourd’hui, hier ou demain : Nous décorons la cour __. Les enfants ont trié les déchets __. Nous planterons des arbres __.</li><li>Conjugue nettoyer et planter au présent, au passé composé et au futur.</li></ol>
      <details><summary>Voir la correction</summary><p>Présent, passé composé, futur, passé composé. Les repères sont aujourd’hui, hier, demain. Exemples : je nettoie / j’ai nettoyé / je nettoierai ; je plante / j’ai planté / je planterai.</p></details>
    </Box>
    <Box title="Les termes temporels">
      <p>Classe ces mots : aujourd’hui, demain, hier, dans une semaine, en ce moment, à présent, la semaine dernière, la semaine prochaine, avant-hier, maintenant, après-demain.</p>
      <label className="fifth-pack__answer">Le passé · Le présent · Le futur<textarea rows="4" /></label>
      <details><summary>Voir la correction</summary><p>Passé : hier, la semaine dernière, avant-hier. Présent : aujourd’hui, en ce moment, à présent, maintenant. Futur : demain, dans une semaine, la semaine prochaine, après-demain.</p></details>
    </Box>
    <Box title="Les terminaisons -é, -er, -es, -et, -ez">
      <ol className="fifth-pack__exercise"><li>Complète : Vous devez bien rang__ la bibliothèque. Ils ont admir__ le jardin. Collez d__ affiches sur l__ murs. Cette salle est bien décor__e !</li><li>Choisis : Hier, j’ai bien (marcher / marché). Elle a (danser / dansé). Le pêcheur a attrapé un poisson avec son (filet / filé).</li><li>Complète : Nous avons commenc__ à nettoy__ la cour. Les élèves ont décor__ les murs et accroch__ des guirlandes. J’ai apporté d__ outils pour jardin__.</li></ol>
      <details><summary>Voir la correction</summary><p>ranger, admiré, des, les, décorée. Marché, dansé, filet. Commencé, nettoyer, décoré, accroché, des, jardiner.</p></details>
    </Box>
    <Box title="Orthographe et types de phrases">
      <p><strong>Déclarative</strong> : Il fait beau. · <strong>Interrogative</strong> : Où est la classe ? · <strong>Exclamative</strong> : Quelle belle salle !</p>
      <ol className="fifth-pack__exercise"><li>Indique D, I ou E : Quelle belle classe ! Pourquoi avez-vous laissé ces papiers ? Les élèves plantent des fleurs. Comme cette cour est propre !</li><li>Ajoute la ponctuation : Les élèves ramassent les papiers __ Qui a accroché les guirlandes __ Comme cette salle est belle __</li><li>Écris un mini-dialogue entre deux enfants qui nettoient une classe.</li></ol>
      <details><summary>Voir la correction</summary><p>E, I, D, E. Les signes sont : . ? !. Dialogue possible : « Que fais-tu ? » — « Je range ma classe. » — « Quelle belle classe ! » — « Merci, tu peux m’aider ? »</p></details>
    </Box>
  </>
}

function FrenchFifthEnvironmentPack() {
  const { pathname } = useLocation()
  const part = pathname.endsWith('/production') ? 'production' : pathname.endsWith('/langue') ? 'langue' : 'lecture'
  return <div className="fifth-pack"><Header part={part} />{part === 'lecture' ? <Lecture /> : part === 'production' ? <Production /> : <Langue />}<Link className="button-link" to="/courses/5eme">← Retour au niveau 5e</Link></div>
}

export default FrenchFifthEnvironmentPack
