import { Link, useLocation } from 'react-router-dom'
import './FrenchSixthLisaExam.css'

const readingText = `Lisa est couturière dans un petit atelier situé au centre du village. Chaque matin, elle commence sa journée en préparant ses outils : des aiguilles, des fils de toutes les couleurs et des tissus soigneusement pliés. Ses mains expertes transforment de simples morceaux de tissu en de magnifiques vêtements. Elle travaille souvent sur des commandes spéciales, comme des robes pour des mariages ou des costumes pour des fêtes.

Parfois, des clients viennent lui apporter des habits abîmés. Avec patience, Lisa répare les déchirures et remplace les boutons manquants. Elle s'applique toujours à faire un travail impeccable, car elle sait que les gens lui font confiance.

Le soir, elle range son atelier et prend des notes pour les commandes à venir.

Même si son travail est fatigant, Lisa est heureuse, car elle fait ce qu'elle aime.`

function Box({ title, children }) {
  return <section className="lisa-box"><h2>{title}</h2>{children}</section>
}

function Questions() {
  return (
    <>
      <Box title="Je lis le texte">
        <div className="lisa-reading"><p>{readingText}</p></div>
      </Box>
      <Box title="Je comprends le texte">
        <ol className="lisa-questions">
          <li>Je relève la phrase qui montre où travaille Lisa.</li>
          <li>Je relève la phrase qui montre que :
            <ol type="a"><li>Lisa aime voir ses clients heureux.</li><li>Lisa utilise des outils variés.</li><li>Lisa réalise des vêtements pour des occasions importantes.</li></ol>
          </li>
          <li>Cherche dans le texte le synonyme ou l’antonyme des mots suivants : <strong>Excellent</strong> = … ; <strong>pénible</strong> = … ; <strong>Merveilleux</strong> = …</li>
          <li>J’encadre la bonne explication : « Lisa a des mains expertes ».
            <ul><li>Lisa sait très bien utiliser ses mains grâce à son expérience et sa pratique.</li><li>Lisa n’arrive pas à travailler correctement.</li></ul>
          </li>
          <li>Penses-tu que le travail de Lisa est difficile ou facile ? Et pourquoi ?</li>
        </ol>
      </Box>
      <Box title="Avis">
        <p><strong>Situation 1 :</strong> À ton avis, quelle est la meilleure méthode pour communiquer avec ton ami ? Dis pourquoi.</p>
        <p><strong>Situation 2 :</strong> Lisa travaille très dur chaque jour, mais elle aime ce qu’elle fait. Penses-tu que c’est important d’aimer son travail ? Pourquoi ?</p>
      </Box>
      <Box title="Révision langue">
        <ol className="lisa-questions">
          <li>Enrichis les phrases suivantes en ajoutant des noms, des adjectifs ou des compléments.
            <ul>
              <li>Lisa travaille …</li><li>Son travail consiste à …</li><li>Le travail de Lisa est …</li>
              <li>Aujourd’hui, beaucoup de gens utilisent …</li><li>Les moyens de communication … ont changé avec le temps.</li>
              <li>Parfois, envoyer un message … est plus pratique.</li>
            </ul>
          </li>
          <li>À l’aide de ces phrases, retrouve l’ordre de l’histoire et écris-la en évitant la répétition du mot « François » :
            <ul><li>Grand-père dépose un baiser sur le front de François.</li><li>Mais François est fatigué.</li><li>Grand-père raconte une histoire à François.</li><li>François s’endort. Il s’éloigne du lit sur la pointe des pieds.</li></ul>
          </li>
          <li>Réécris le texte en supprimant les répétitions. Emploie : <strong>eux, ils, le, il, leur</strong>.
            <div className="lisa-reading"><p>Le cirque arrive. Le grand chapiteau est dressé, le grand chapiteau est immense. De grands drapeaux surmontent le chapiteau. Les enfants se rassemblent sur la place. Quelle joie pour les enfants ! Le patron arrive et distribue des invitations aux enfants. Le patron est très généreux.</p></div>
          </li>
        </ol>
      </Box>
    </>
  )
}

function Corrections() {
  return (
    <>
      <Box title="Compréhension">
        <ol className="lisa-answers">
          <li>« Lisa est couturière dans un petit atelier situé au centre du village. »</li>
          <li><ol type="a"><li>« Elle s’applique toujours à faire un travail impeccable, car elle sait que les gens lui font confiance. » Cette phrase est la plus proche du sens attendu.</li><li>« Chaque matin, elle commence sa journée en préparant ses outils : des aiguilles, des fils de toutes les couleurs et des tissus soigneusement pliés. »</li><li>« Elle travaille souvent sur des commandes spéciales, comme des robes pour des mariages ou des costumes pour des fêtes. »</li></ol></li>
          <li><strong>Excellent</strong> = impeccable ; <strong>pénible</strong> = fatigant ; <strong>Merveilleux</strong> = magnifique.</li>
          <li>Lisa sait très bien utiliser ses mains grâce à son expérience et à sa pratique.</li>
          <li>Réponse possible : « Je pense que le travail de Lisa est difficile, car il est fatigant et demande de la patience et de la précision. Mais Lisa est heureuse, car elle aime ce qu’elle fait. »</li>
        </ol>
      </Box>
      <Box title="Avis — réponses possibles">
        <p>À mon avis, la meilleure méthode est de téléphoner à mon ami, car j’entends sa voix et il me répond tout de suite. Si nous sommes proches, je préfère lui parler directement.</p>
        <p>Oui, il est important d’aimer son travail, car on le fait avec plaisir et on le fait mieux. Comme Lisa, on est heureux même quand on est fatigué.</p>
        <p className="lisa-note">Toute réponse correcte, bien écrite et justifiée est acceptée.</p>
      </Box>
      <Box title="Révision langue — réponses possibles">
        <ol className="lisa-answers">
          <li><ul><li>Lisa travaille <strong>sérieusement</strong>.</li><li>Son travail consiste à <strong>coudre des vêtements et à réparer les habits abîmés</strong>.</li><li>Le travail de Lisa est <strong>fatigant</strong>.</li><li>Aujourd’hui, beaucoup de gens utilisent <strong>le téléphone portable</strong>.</li><li>Les moyens de communication <strong>modernes</strong> ont changé avec le temps.</li><li>Parfois, envoyer un message <strong>à un ami qui habite loin</strong> est plus pratique.</li></ul></li>
          <li>Grand-père raconte une histoire à François. Mais <strong>l’enfant</strong> est fatigué et s’endort. Grand-père dépose un baiser sur <strong>son</strong> front, puis il s’éloigne du lit sur la pointe des pieds.</li>
          <li>Le cirque arrive. Le grand chapiteau est dressé, <strong>il</strong> est immense. De grands drapeaux <strong>le</strong> surmontent. Les enfants se rassemblent sur la place. Quelle joie pour <strong>eux</strong> ! Le patron arrive et <strong>leur</strong> distribue des invitations. <strong>Il</strong> est très généreux.</li>
        </ol>
        <p className="lisa-note">Rappel : un pronom remplace un nom déjà cité. « Ils » n’est pas utile dans ce texte.</p>
      </Box>
    </>
  )
}

function FrenchSixthLisaExam() {
  const { pathname } = useLocation()
  const correctionOnly = pathname.endsWith('/correction')

  return (
    <div className="lisa-exam">
      <header className="lisa-hero">
        <p className="eyebrow">Français · 6e année · Devoir</p>
        <h1>🧵 Fiche : Lisa la couturière</h1>
        <p>{correctionOnly ? 'Correction du devoir — à consulter après avoir terminé.' : 'Énoncé du devoir — lis attentivement et réponds aux questions.'}</p>
        <nav className="lisa-nav" aria-label="Navigation du devoir">
          <Link className={!correctionOnly ? 'is-current' : ''} to="/courses/6eme/francais/devoir-lisa">Énoncé seul</Link>
          <Link className={correctionOnly ? 'is-current' : ''} to="/courses/6eme/francais/devoir-lisa/correction">Correction seule</Link>
        </nav>
      </header>
      {correctionOnly ? <Corrections /> : <Questions />}
      <Link className="button-link" to="/courses/6eme/module-1">← Retour au module 1</Link>
    </div>
  )
}

export default FrenchSixthLisaExam
