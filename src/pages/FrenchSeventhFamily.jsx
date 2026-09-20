import './FrenchPresent.css'

function Answer({ label, lines = 1 }) {
  return lines > 1 ? <label className="present-answer">{label}<textarea rows={lines} /></label> : <label className="present-answer">{label}<input type="text" /></label>
}

function Correction({ children }) {
  return <details className="present-correction"><summary>Voir la correction</summary>{children}</details>
}

function FrenchSeventhFamily() {
  return (
    <div className="present-page">
      <header className="present-heading">
        <p className="eyebrow">Français · 7th form</p>
        <h1>Rédaction : le récit en famille</h1>
        <p>Module : En famille · Comprendre, organiser et rédiger un récit.</p>
      </header>

      <section className="present-section">
        <h2>Je m’entraîne !</h2>
        <h3>Exercice 1 : Je comprends un récit</h3>
        <p>Lis attentivement le texte suivant puis réponds aux questions.</p>
        <div className="present-reading">
          <p>Dimanche matin, je me suis réveillé plus tôt que d’habitude. Toute la maison était encore silencieuse. C’était l’anniversaire de maman et ma sœur et moi, nous voulions lui préparer une surprise. Nous avons décoré le salon et préparé son petit-déjeuner préféré. Quelques minutes plus tard, maman est entrée. En voyant les ballons et les cadeaux, elle est restée immobile de surprise. Puis, elle nous a serrés très fort dans ses bras. J’étais tellement heureux de la voir sourire !</p>
        </div>
        <Answer label="1. Qui raconte cette histoire ?" />
        <Answer label="2. Relève deux mots qui montrent que le narrateur participe aux événements." />
        <Answer label="3. Où se déroule principalement la scène ?" />
        <Answer label="4. Quel événement la famille fête-t-elle ?" />
        <Answer label="5. Quels sont les personnages présents ?" />
        <Answer label="6. Relève une phrase exprimant un sentiment." />
        <Answer label="7. Ce récit est-il raconté à la 1re ou à la 3e personne ? Justifie ta réponse." lines={2} />
        <Correction><p>1. C’est un enfant qui raconte. 2. « je » et « nous » (ou « me », « j’ »). 3. La scène se déroule principalement dans le salon de la maison. 4. La famille fête l’anniversaire de maman. 5. Le narrateur, sa sœur et leur maman sont présents. 6. « J’étais tellement heureux de la voir sourire ! » 7. Le récit est raconté à la 1re personne : le narrateur emploie « je » et « nous ».</p></Correction>
      </section>

      <section className="present-section">
        <h3>Exercice 2 : J’analyse une situation d’écrit</h3>
        <p>Pendant les vacances, tu passes quelques jours chez tes grands-parents. Un événement inattendu rend ton séjour inoubliable. Raconte ce qui s’est passé et exprime tes sentiments.</p>
        <Answer label="Qui raconte ?" />
        <Answer label="Où ?" />
        <Answer label="Quand ?" />
        <Answer label="Personnages possibles" />
        <Answer label="Événement à raconter" />
        <Answer label="Personne utilisée pour raconter" />
        <Answer label="Sentiments possibles" />
        <Correction><p>Exemple : un enfant raconte, chez ses grands-parents, pendant les vacances. Les personnages possibles sont l’enfant, ses grands-parents et ses cousins. Il peut raconter la disparition puis la retrouvaille d’un petit chat, à la 1re personne, en exprimant la peur, l’inquiétude, le soulagement et la joie.</p></Correction>
      </section>

      <section className="present-section">
        <h3>Exercice 3 : J’organise mon récit</h3>
        <p>Remets les phrases dans l’ordre pour obtenir un récit cohérent.</p>
        <p>a. Finalement, nous avons retrouvé le petit chat derrière un arbre.<br />b. Soudain, ma sœur a entendu un faible miaulement dans le jardin.<br />c. Un après-midi, je jouais avec mes cousins chez mes grands-parents.<br />d. Très heureux, nous l’avons ramené à la maison.<br />e. Nous nous sommes immédiatement mis à sa recherche.</p>
        <Answer label="Ordre" />
        <Correction><p>c → b → e → a → d.</p></Correction>
      </section>

      <section className="present-section">
        <h3>Exercice 4 : J’évite les répétitions</h3>
        <p>Réécris le passage en remplaçant les mots répétés par des mots de reprise.</p>
        <div className="present-reading"><p>Ma sœur a préparé un gâteau. Ma sœur a décoré le gâteau avec des fraises. Ensuite, ma sœur a posé le gâteau sur la table. Mes parents ont découvert le gâteau et mes parents ont félicité ma sœur.</p></div>
        <Answer label="Réécriture" lines={5} />
        <Correction><p>Ma sœur a préparé un gâteau. Elle l’a décoré avec des fraises. Ensuite, elle l’a posé sur la table. Mes parents l’ont découvert et l’ont félicitée.</p></Correction>
      </section>

      <section className="present-section">
        <h3>Exercice 5 : J’enrichis mon récit</h3>
        <p>Complète avec : <strong>d’abord · soudain · ensuite · quelques minutes plus tard · finalement</strong>.</p>
        <Answer label="1. ___, nous avons commencé à préparer la surprise." />
        <Answer label="2. ___, nous avons décoré le salon." />
        <Answer label="3. ___, nous avons entendu maman ouvrir la porte." />
        <Answer label="4. ___, elle est entrée dans la pièce." />
        <Answer label="5. ___, toute la famille s’est réunie autour du gâteau." />
        <Correction><p>1. D’abord · 2. Ensuite · 3. Soudain · 4. Quelques minutes plus tard · 5. Finalement.</p></Correction>
      </section>

      <section className="present-section">
        <h3>Exercice 6 : J’exprime les sentiments</h3>
        <p>Associe chaque situation au sentiment qui convient : heureux · inquiet · surpris · fier · triste · ému.</p>
        <Answer label="1. Je ne retrouve plus mon petit frère dans le parc." />
        <Answer label="2. Papa découvre le cadeau que je lui ai fabriqué." />
        <Answer label="3. J’ai réussi à préparer seul une belle surprise." />
        <Answer label="4. Mes grands-parents doivent repartir après les vacances." />
        <Answer label="5. Toute ma famille est venue pour mon anniversaire sans me prévenir." />
        <Correction><p>1. inquiet · 2. ému · 3. fier · 4. triste · 5. surpris.</p></Correction>
      </section>

      <section className="present-section">
        <h3>Exercice 7 : Je prépare ma production</h3>
        <p>Sujet : Un jour, avec un membre de ta famille, tu vis un événement que tu n’oublieras jamais. Raconte ce qui s’est passé en exprimant tes sentiments.</p>
        <Answer label="Le début : où ? quand ? avec qui ?" />
        <Answer label="L’événement : que s’est-il passé ?" />
        <Answer label="Les actions : qu’avez-vous fait ?" />
        <Answer label="Les sentiments : qu’as-tu ressenti ?" />
        <Answer label="La fin : comment l’histoire s’est-elle terminée ?" />
        <Correction><p>Vérifie que ton projet présente le lieu, le moment et les personnages, raconte les actions dans un ordre logique avec des connecteurs, utilise des mots de reprise et exprime clairement tes sentiments.</p></Correction>
      </section>

      <section className="present-section">
        <h2>Productions écrites guidées</h2>
        <h3>Sujet 1 : L’anniversaire de ton frère</h3>
        <p>C’est l’anniversaire de ton frère. Avec ta famille, tu prépares une surprise. Raconte cette journée.</p>
        <Answer label="Rédaction" lines={10} />
        <Correction><p>Aujourd’hui, c’est l’anniversaire de mon frère. Avec ma famille, nous préparons une belle surprise pour lui. D’abord, je décore le salon avec des ballons et des guirlandes. Ma mère prépare un délicieux gâteau au chocolat. Mon père achète un joli cadeau que nous cachons dans une armoire. L’après-midi, mon frère rentre à la maison. Tout à coup, nous crions : « Surprise ! » Il est très étonné et très heureux. Nous chantons « Joyeux anniversaire » et il souffle ses bougies. Enfin, il ouvre son cadeau et nous remercie avec un grand sourire. Cette belle fête nous permet de passer un merveilleux moment en famille.</p></Correction>

        <h3>Sujet 2 : La fête des mères</h3>
        <p>À l’occasion de la fête des mères, tu prépares une surprise pour ta maman. Raconte cette journée.</p>
        <Answer label="Rédaction" lines={10} />
        <Correction><p>Aujourd’hui, c’est la fête des mères et je veux faire plaisir à ma maman. D’abord, je prépare une jolie surprise avec ma sœur. Nous décorons la maison avec des fleurs et des ballons. Je fabrique une belle carte et j’écris un message d’amour pour elle. Ensuite, nous préparons un délicieux gâteau au chocolat. Quand maman rentre à la maison, nous l’accueillons avec un grand sourire. Je lui offre les fleurs, la carte et le gâteau. Elle lit mon message, elle sourit et elle est très émue. Elle nous embrasse et nous remercie avec tendresse. Je suis très heureux de voir ma maman heureuse en ce jour spécial.</p></Correction>

        <h3>Sujet 3 : Un accident à la maison</h3>
        <p>Ta mère sort faire des courses et te laisse avec ton petit frère. Pendant son absence, un accident se produit. Raconte ce qui s’est passé et ce que tu as fait.</p>
        <Answer label="Rédaction" lines={10} />
        <Correction><p>Ma mère sort le matin pour faire des courses et me laisse avec mon petit frère. Nous jouons dans le salon. Tout à coup, mon frère court vers l’escalier. Il glisse et tombe. Il se frappe la tête contre une marche. Il se met à crier et son front commence à saigner. Je suis très inquiet. Je le prends dans mes bras et j’essaie de le rassurer. Puis, j’appelle ma mère. Elle me dit de rester calme et d’appeler les secours. J’appelle le numéro d’urgence et je donne notre adresse. Quelques minutes plus tard, l’ambulance arrive. Les secouristes le soignent et l’emmènent à l’hôpital. Heureusement, le médecin le soigne et il va mieux.</p></Correction>

        <h3>Sujet 4 : Le mariage de ma sœur</h3>
        <p>Raconte le mariage de ta sœur. Décris les préparatifs, la cérémonie et la fête.</p>
        <Answer label="Rédaction" lines={10} />
        <Correction><p>Le mariage de ma sœur est un jour très spécial pour toute notre famille. Depuis plusieurs semaines, nous préparons cette grande fête avec beaucoup de joie. D’abord, nous décorons la maison et nous accueillons les invités. Ma sœur choisit une belle robe blanche et se prépare avec ses amies. Le jour J, la cérémonie a lieu à la mairie puis à la mosquée. Ma sœur et son mari échangent leurs vœux et tout le monde les applaudit. Après la cérémonie, nous allons à la salle des fêtes. Il y a de la musique, des chants et un délicieux repas. Tout le monde danse et s’amuse jusqu’à tard dans la nuit. Je suis très heureux de voir ma sœur commencer une nouvelle vie.</p></Correction>

        <h3>Sujet 5 : Un problème familial</h3>
        <p>Raconte un problème que ta famille a vécu et explique comment vous l’avez résolu.</p>
        <Answer label="Rédaction" lines={10} />
        <Correction><p>Un jour, ma famille a rencontré un problème. Mon frère et moi nous nous disputions souvent à cause du bruit et des jeux. Nous nous sommes fâchés et nous ne parlions plus pendant plusieurs jours. Mes parents étaient inquiets car ils voulaient la paix à la maison. Ils nous ont conseillé de parler calmement et de nous écouter. Nous nous sommes assis ensemble et chacun a expliqué ce qu’il ressentait. Nous avons compris nos erreurs et nous nous sommes excusés. Nous avons décidé de respecter les règles et de partager nos affaires. Depuis ce jour, nous sommes plus patients et nous nous aidons. Grâce au dialogue et à l’amour, nous avons retrouvé la paix et la joie dans notre famille.</p></Correction>
      </section>

      <section className="present-section">
        <h2>Rédaction modèle</h2>
        <p>Un jour, avec un membre de ta famille, tu vis un événement que tu n’oublieras jamais.</p>
        <div className="present-reading">
          <p>Dimanche dernier, je suis allé au parc avec mon petit frère. Il faisait beau et nous étions très heureux de passer la journée ensemble. Pendant que nous jouions, mon frère a aperçu un joli ballon rouge et s’est éloigné pour le suivre. Quelques minutes plus tard, je me suis retourné, mais il n’était plus là. Soudain, j’ai commencé à avoir très peur. Je l’ai cherché partout en criant son prénom. Mon cœur battait très fort et je ne savais plus quoi faire. Heureusement, un monsieur est venu vers moi et m’a demandé si je cherchais un petit garçon. Il m’a accompagné jusqu’à l’entrée du parc. Là, j’ai retrouvé mon frère près d’un gardien. Dès qu’il m’a vu, il a couru vers moi et m’a serré dans ses bras. J’étais tellement soulagé et heureux de le retrouver ! Depuis ce jour, je fais beaucoup plus attention à lui lorsque nous sortons ensemble. Je n’oublierai jamais cette journée.</p>
        </div>
      </section>
    </div>
  )
}

export default FrenchSeventhFamily