import { Link } from 'react-router-dom'
import './FrenchSixthProduction.css'

const professions = [
  {
    title: 'Le métier de directeur',
    emoji: '🎓',
    text: [
      'Le directeur exerce un métier de responsabilité. Il dirige une école, une entreprise ou une administration. Son rôle est d’organiser le travail, de prendre des décisions et de veiller au bon fonctionnement de l’établissement.',
      'Chaque jour, il rencontre les personnes qui travaillent avec lui, planifie les activités et cherche des solutions aux problèmes. Il vérifie aussi que les objectifs sont respectés et que l’ambiance de travail reste positive.',
      'Ce métier demande du sérieux, de l’organisation et un esprit de leadership. Le directeur doit être juste, attentif et capable d’écouter les autres avant de décider.',
      'J’admire ce métier, car il aide à guider une équipe et à réaliser de beaux projets. Plus tard, j’aimerais être directeur pour organiser le travail et contribuer à la réussite des autres.',
    ],
  },
  {
    title: 'Le métier du policier',
    emoji: '👮',
    text: [
      'Le policier exerce un métier important au service de la société. Il travaille dans la rue, dans un commissariat ou dans différents lieux publics. Son rôle est de protéger les citoyens, de faire respecter la loi et d’aider les personnes en difficulté.',
      'Chaque jour, il surveille les quartiers, règle la circulation, intervient en cas de problème et répond aux appels des habitants. Il peut aussi secourir des victimes, rechercher des informations et participer à des actions de prévention. Il travaille souvent en équipe.',
      'Le travail du policier demande du courage, de la discipline et beaucoup de sang-froid. Il faut être vigilant, honnête et prêt à agir rapidement. Ce métier peut être difficile, mais il est nécessaire pour assurer la sécurité de tous.',
      'J’admire beaucoup ce métier, car le policier protège les personnes et fait respecter l’ordre. Plus tard, j’aimerais devenir policier pour aider les autres, défendre la justice et servir mon pays.',
    ],
  },
  {
    title: 'Le métier d’acteur',
    emoji: '🎬',
    text: [
      'L’acteur exerce un métier artistique et passionnant. Il joue des rôles dans des pièces de théâtre, des films ou des séries. Grâce à son talent, il donne vie à des personnages et raconte de belles histoires.',
      'Chaque jour, il apprend ses textes, répète ses scènes et travaille ses gestes, sa voix et ses expressions. Sur scène ou devant la caméra, il doit bien comprendre son personnage pour jouer avec justesse et émotion.',
      'Ce métier demande de la créativité, de la confiance en soi et beaucoup de travail. L’acteur doit être patient, attentif et capable de collaborer avec le metteur en scène, les techniciens et les autres comédiens.',
      'J’admire ce métier, car il nous fait rire, rêver ou réfléchir. Plus tard, j’aimerais être acteur pour partager des émotions avec le public et faire vivre de belles histoires.',
    ],
  },
  {
    title: 'Le métier de pilote',
    emoji: '✈️',
    text: [
      'Le pilote exerce un métier passionnant et très important. Il est responsable de la conduite d’un avion et assure la sécurité de tous les passagers pendant le vol. Il travaille dans une compagnie aérienne.',
      'Chaque jour, il prépare son vol en vérifiant l’état de l’avion, en consultant la météo et en étudiant le plan de vol. Ensuite, il communique avec la tour de contrôle et dirige l’avion pendant le décollage, le vol et l’atterrissage.',
      'Le travail du pilote demande une grande responsabilité, une bonne condition physique et une excellente concentration. Il doit bien connaître les instruments de bord et respecter des règles strictes.',
      'J’admire beaucoup ce métier, car il permet de découvrir le monde et de vivre des expériences uniques. Plus tard, j’aimerais devenir pilote pour voyager, transporter des passagers en sécurité et réaliser mon rêve de voler.',
    ],
  },
  {
    title: 'Le métier du pédiatre',
    emoji: '🩺',
    text: [
      'Le pédiatre est un médecin qui soigne les bébés, les enfants et les adolescents. Il travaille dans un hôpital, une clinique ou un cabinet médical. Son rôle est de surveiller la santé des jeunes patients, de les examiner et de les soigner.',
      'Chaque jour, il reçoit des enfants malades ou en bonne santé pour une visite de contrôle. Il écoute les parents, ausculte les patients, donne des conseils et prescrit des médicaments si nécessaire. Il vérifie aussi leur croissance, leur alimentation et leurs vaccins.',
      'Le travail du pédiatre demande beaucoup de patience, de douceur et de responsabilité. Il faut aimer les enfants, savoir les rassurer et être très attentif à leurs besoins.',
      'J’admire beaucoup ce métier, car le pédiatre protège la santé des enfants et rassure les familles. Plus tard, j’aimerais devenir pédiatre pour soigner les petits patients avec gentillesse et attention.',
    ],
  },
  {
    title: 'Le métier de fleuriste',
    emoji: '🌸',
    text: [
      'La fleuriste exerce un métier très beau et utile. Elle travaille dans un magasin de fleurs où elle s’occupe des plantes et des fleurs. Elle reçoit les fleurs fraîches, les nettoie et les entretient pour qu’elles restent belles et parfumées.',
      'Elle compose de magnifiques bouquets pour les mariages, les anniversaires ou les fêtes. Elle conseille aussi les clients et les aide à choisir les fleurs qui leur plaisent.',
      'La fleuriste doit être créative, patiente et avoir un bon sens de l’esthétique. Elle aime la nature et connaît bien les différentes variétés de fleurs. Son métier demande aussi de l’organisation et de la gentillesse.',
      'J’admire beaucoup cette profession, car elle apporte de la joie aux gens et rend notre environnement plus coloré. Plus tard, j’aimerais devenir fleuriste pour créer de beaux bouquets.',
    ],
  },
  {
    title: 'Le métier de pâtissier',
    emoji: '🍰',
    text: [
      'Le pâtissier exerce un métier gourmand et créatif. Il prépare des gâteaux, des tartes, des biscuits et d’autres douceurs qui font plaisir aux petits comme aux grands. Il travaille souvent dans une pâtisserie ou une boulangerie.',
      'Chaque jour, il choisit les ingrédients, prépare les pâtes, mélange les produits et décore ses créations avec soin. Il doit respecter les quantités, le temps de cuisson et la présentation.',
      'Ce métier demande de la précision, de la patience et beaucoup d’imagination. Le pâtissier doit aussi être propre, organisé et appliqué.',
      'J’admire ce métier, car il apporte de la joie pendant les fêtes et les moments heureux. Plus tard, j’aimerais être pâtissier pour créer de jolis gâteaux et faire plaisir aux autres.',
    ],
  },
  {
    title: 'Le métier de maîtresse',
    emoji: '📚',
    text: [
      'La maîtresse exerce un métier très important dans la société. Elle travaille à l’école et accueille les élèves dans sa classe. Son rôle est d’enseigner, d’expliquer les leçons et d’aider les enfants à apprendre à lire, à écrire et à compter.',
      'Chaque jour, elle prépare les activités, présente les leçons, pose des questions et corrige les exercices. Elle écoute ses élèves, les encourage et les aide à progresser.',
      'Ce métier demande beaucoup de patience, de douceur et d’organisation. La maîtresse doit savoir adapter son travail aux besoins de chaque élève.',
      'J’admire beaucoup ce métier, car la maîtresse aide les enfants à construire leur avenir. Plus tard, j’aimerais être maîtresse pour transmettre le savoir et participer à la réussite des élèves.',
    ],
  },
  {
    title: 'Le métier de dentiste',
    emoji: '🦷',
    text: [
      'La dentiste exerce un métier très utile pour la santé. Elle travaille dans un cabinet dentaire. Son rôle est de soigner les dents et d’aider les patients à garder une bonne hygiène bucco-dentaire.',
      'Chaque jour, elle examine la bouche, vérifie les dents, soigne les caries et conseille les patients. Elle utilise une lampe, un miroir dentaire et d’autres instruments. Elle rassure aussi les enfants quand ils ont peur.',
      'Le travail de la dentiste demande de la patience, de la douceur et beaucoup de précision. Elle doit être attentive, propre et bien organisée.',
      'J’admire ce métier, car il aide les personnes à se sentir mieux. Plus tard, j’aimerais peut-être devenir dentiste pour soigner les dents et donner confiance aux patients.',
    ],
  },
  {
    title: 'Le métier de médecin',
    emoji: '👩‍⚕️',
    text: [
      'Le médecin exerce un métier très important dans notre société. Il travaille dans un hôpital, une clinique ou un cabinet médical. Il utilise des instruments, comme le stéthoscope et le thermomètre, pour examiner ses patients.',
      'Chaque jour, il accueille les malades avec gentillesse et les écoute attentivement. Il leur pose des questions, les examine pour découvrir la cause de leur maladie, puis prescrit des médicaments et donne des conseils pour guérir.',
      'Le travail du médecin est difficile et fatigant, car il doit parfois travailler la nuit. Il doit être patient, attentif, courageux et responsable. Il éprouve une grande joie lorsqu’un malade retrouve la santé.',
      'J’admire beaucoup cette noble profession. Plus tard, j’aimerais devenir médecin pour soigner les malades, soulager leurs souffrances et sauver des vies.',
    ],
  },
]

function FrenchSixthProduction() {
  return (
    <div className="sixth-production">
      <header className="sixth-production__hero">
        <p className="eyebrow">Français · 6e année · Module 1</p>
        <h1>🎨 À la découverte des métiers</h1>
        <p>Production écrite guidée · Lis, observe les mots importants et imagine ton métier préféré !</p>
        <div className="sixth-production__sparkles" aria-hidden="true">✦ ✧ ✦</div>
      </header>

      <section className="sixth-production__intro">
        <h2>La recette d’une bonne production</h2>
        <div className="sixth-production__steps">
          <span>🌟 Je présente le métier.</span>
          <span>🔍 Je décris les activités.</span>
          <span>💡 Je donne les qualités nécessaires.</span>
          <span>💭 J’exprime mon admiration et mon rêve.</span>
        </div>
      </section>

      <div className="profession-grid">
        {professions.map((profession, index) => (
          <article className="profession-card" style={{ '--card-index': index }} key={profession.title}>
            <div className="profession-card__title">
              <span aria-hidden="true">{profession.emoji}</span>
              <h2>{profession.title}</h2>
            </div>
            {profession.text.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </article>
        ))}
      </div>

      <section className="sixth-production__challenge">
        <p className="eyebrow">À toi d’écrire !</p>
        <h2>Mon métier préféré</h2>
        <p>Choisis un métier. Présente-le en quatre paragraphes : son rôle, ses activités, ses qualités et la raison pour laquelle tu l’admires.</p>
        <textarea rows="8" aria-label="Ma production écrite" placeholder="Écris ici ta production écrite..." />
      </section>

      <Link className="button-link" to="/courses/6eme/module-1">← Retour au module 1</Link>
    </div>
  )
}

export default FrenchSixthProduction
