# Ikkir Akkra

Plateforme éducative interactive destinée à accompagner les élèves dans
l'apprentissage du français et de l'anglais. L'application propose des
parcours par niveau scolaire, des leçons, des exercices corrigés, des quiz
interactifs et un espace personnel permettant de consulter les résultats.


## Sommaire

1. [Fonctionnalités](#fonctionnalités)
2. [Technologies](#technologies)
3. [Prérequis](#prérequis)
4. [Installation rapide](#installation-rapide)
5. [Configuration](#configuration)
6. [Démarrage](#démarrage)
7. [Architecture](#architecture)
8. [Parcours utilisateur](#parcours-utilisateur)
9. [Catalogue pédagogique et routes](#catalogue-pédagogique-et-routes)
10. [Authentification](#authentification)
11. [Fonctionnement des quiz](#fonctionnement-des-quiz)
12. [Internationalisation](#internationalisation)
13. [API HTTP](#api-http)
14. [Base de données](#base-de-données)
15. [Stockage côté navigateur](#stockage-côté-navigateur)
16. [Ajouter ou modifier du contenu](#ajouter-ou-modifier-du-contenu)
17. [Qualité, tests et build](#qualité-tests-et-build)
18. [Déploiement](#déploiement)
19. [Dépannage](#dépannage)
20. [Sécurité et recommandations](#sécurité-et-recommandations)
21. [Arborescence](#arborescence)

## Fonctionnalités

- Page d'accueil avec présentation de la plateforme et accès aux niveaux.
- Navigation principale : accueil, cours, niveaux, présentation et contact.
- Parcours scolaires pour les **5e**, **6e** et **7e**.
- Cours de français :
  - lecture et compréhension ;
  - grammaire ;
  - conjugaison ;
  - vocabulaire ;
  - production écrite ;
  - exercices corrigés.
- Cours d'anglais :
  - vocabulaire ;
  - grammaire ;
  - lecture ;
  - situations de communication ;
  - exercices et révisions.
- Quiz à choix multiples avec :
  - correction question par question ;
  - avertissement si des questions sont sans réponse ;
  - score immédiat ;
  - retour sur la bonne réponse ;
  - meilleur score, dernier score et nombre de tentatives.
- Création de compte, connexion, déconnexion et suppression du compte.
- Profil utilisateur avec historique des résultats enregistrés sur le serveur.
- Interface en français, anglais et arabe.
- Prise en charge du sens d'écriture RTL pour l'arabe.
- Chargement différé des pages pédagogiques avec `React.lazy`.
- Animations et effet d'inclinaison 3D, avec prise en compte de la préférence
  système de réduction des animations dans les quiz.
- Interface responsive et éléments d'accessibilité de base :
  labels de formulaires, rôles ARIA, focus après correction et navigation
  clavier dans les quiz.
- Assistant de correction IA local pour les productions écrites et les réponses
  des élèves, accessible aux utilisateurs connectés.

## Technologies

### Frontend

- React `19`
- React DOM `19`
- React Router DOM `7`
- Vite `8`
- CSS natif organisé par fonctionnalité
- `localStorage` pour la langue et les statistiques locales des quiz

### Backend

- Node.js en mode ESM
- Express `5`
- PostgreSQL
- `pg` pour la connexion à PostgreSQL
- `cors` pour autoriser le frontend
- `dotenv` pour charger les variables d'environnement
- `crypto.scryptSync` pour le hachage des mots de passe

### Outils de développement

- Vitest
- Testing Library pour React
- Oxlint
- Prettier
- `concurrently` pour lancer frontend et backend simultanément

## Prérequis

Installer les éléments suivants avant de commencer :

- Node.js récent, idéalement Node.js 20 ou supérieur ;
- npm ;
- PostgreSQL 14 ou supérieur ;
- Git.

Vérifier les versions :

```bash
node --version
npm --version
psql --version
```

Le projet utilise une base PostgreSQL nommée `ikkir_akkra` dans l'exemple de
configuration, mais tout autre nom convient si `DATABASE_URL` est adapté.

## Installation rapide

Depuis la racine du dépôt :

```bash
npm install
```

Créer ensuite une base PostgreSQL :

```bash
createdb ikkir_akkra
```

Copier le modèle de variables d'environnement :

```bash
cp .env.example .env
```

Modifier `.env`, puis appliquer le schéma :

```bash
psql "$DATABASE_URL" -f server/schema.sql
```

Lancer les deux parties de l'application :

```bash
npm run dev:full
```

Ouvrir ensuite :

- frontend : <http://localhost:5173>
- API : <http://localhost:3001>
- contrôle de santé : <http://localhost:3001/api/health>

## Configuration

### Variables d'environnement du serveur

Le fichier `.env.example` contient :

```dotenv
DATABASE_URL=postgresql://postgres:mot_de_passe@localhost:5432/ikkir_akkra
PORT=3001
CLIENT_URL=http://localhost:5173
OLLAMA_URL=http://127.0.0.1:11434
OLLAMA_MODEL=qwen2.5:7b
```

| Variable | Obligatoire | Valeur par défaut | Rôle |
|---|---:|---|---|
| `DATABASE_URL` | Oui | aucune | URL de connexion PostgreSQL utilisée par `server/db.js` |
| `PORT` | Non | `3001` | Port HTTP de l'API Express |
| `CLIENT_URL` | Non | `http://localhost:5173` | Origine autorisée par CORS |
| `TRUST_PROXY` | Non | `false` | Doit être `true` uniquement derrière un reverse proxy de confiance |
| `NODE_ENV` | Non | aucune | En `production`, impose HTTPS pour `CLIENT_URL` et `TRUST_PROXY=true` |
| `OLLAMA_URL` | Non | `http://127.0.0.1:11434` | Adresse du serveur Ollama local |
| `OLLAMA_MODEL` | Non | `qwen2.5:7b` | Modèle utilisé par le correcteur IA |

### Correcteur IA local

Installer Ollama, puis télécharger le modèle choisi :

```bash
ollama pull qwen2.5:7b
ollama serve
```

Après connexion, ouvrir `/assistant-correction`. La clé d’un fournisseur
externe n’est pas nécessaire : le serveur Node appelle Ollama localement,
limite les copies à 6000 caractères et applique une limite de 20 corrections
par heure et par adresse IP.

Format recommandé de `DATABASE_URL` :

```text
postgresql://UTILISATEUR:MOT_DE_PASSE@HOTE:PORT/NOM_DE_BASE
```

Ne jamais publier le vrai fichier `.env`, son mot de passe PostgreSQL ou un
jeton de session. Le fichier `.env.example` doit uniquement contenir des
valeurs d'exemple.

### Variable frontend optionnelle

Le frontend lit également :

```dotenv
VITE_API_URL=http://localhost:3001/api
```

Si `VITE_API_URL` n'est pas défini, les appels utilisent `/api`. En
développement, Vite redirige `/api` vers `http://localhost:3001` grâce à
[vite.config.js](./vite.config.js).

## Démarrage

### Frontend seul

```bash
npm run dev
```

### API seule

```bash
npm run server
```

### Frontend et API

```bash
npm run dev:full
```

### Prévisualiser le build de production

```bash
npm run build
npm run preview
```

Les scripts sont définis dans [package.json](./package.json).

## Architecture

L'application est organisée en deux processus :

```text
Navigateur
   |
   | React + React Router + localStorage
   v
Frontend Vite :5173
   |
   | /api en développement, ou VITE_API_URL
   v
API Express :3001
   |
   | pg / DATABASE_URL
   v
PostgreSQL
```

### Démarrage React

1. [src/main.jsx](./src/main.jsx) charge les feuilles de style globales.
2. `I18nProvider` initialise la langue et le sens d'écriture.
3. `AuthProvider` restaure l'utilisateur depuis la session API.
4. `App` installe le routeur, la barre de navigation, le contenu et le pied
   de page.
5. Les pages de cours sont chargées à la demande avec `React.lazy`.

### Contexte d'authentification

[src/auth/AuthProvider.jsx](./src/auth/AuthProvider.jsx) expose :

- `user` : utilisateur courant, `null` si déconnecté, `undefined` pendant la
  restauration initiale ;
- `register(data)` ;
- `login(data)` ;
- `logout()` ;
- `deleteAccount()`.

Le composant [src/auth/ProtectedRoute.jsx](./src/auth/ProtectedRoute.jsx)
redirige vers `/login` lorsqu'un utilisateur non connecté tente d'ouvrir
`/profile`.

### Contexte de traduction

[src/i18n/I18nProvider.jsx](./src/i18n/I18nProvider.jsx) expose :

- `lang` : code courant (`fr`, `en` ou `ar`) ;
- `setLang(code)` ;
- `t(key, variables)` ;
- `dir` : `ltr` ou `rtl` ;
- `locale` : locale utilisée pour le formatage des dates.

### Couche API

[src/api.js](./src/api.js) centralise :

- l'URL de l'API ;
- la lecture et l'écriture du jeton ;
- les en-têtes JSON ;
- le traitement des réponses HTTP ;
- la conversion des erreurs serveur en `Error`.

## Parcours utilisateur

### Visiteur

1. Ouvrir `/`.
2. Choisir `Cours` ou un niveau.
3. Ouvrir une matière.
4. Lire une leçon.
5. Ouvrir le quiz associé.
6. Répondre aux questions et demander la correction.

Les résultats de quiz sont conservés localement dans le navigateur, même sans
compte.

### Utilisateur inscrit

1. Ouvrir `/register`.
2. Saisir le nom, l'adresse e-mail, le mot de passe et sa confirmation.
3. Le serveur crée l'utilisateur et une session.
4. Le frontend enregistre le jeton et redirige vers `/profile`.
5. Les quiz peuvent être associés à l'historique serveur via `/api/results`.

### Utilisateur connecté

Le profil permet de :

- consulter son adresse e-mail ;
- retourner aux cours ;
- se déconnecter ;
- consulter les résultats reçus du serveur ;
- supprimer définitivement son compte.

## Catalogue pédagogique et routes

### Routes générales

| Route | Fonction |
|---|---|
| `/` | Accueil |
| `/courses` | Sélection du niveau |
| `/courses/5eme` | Parcours 5e |
| `/courses/6eme` | Parcours 6e |
| `/courses/7eme` | Parcours 7e |
| `/levels` | Présentation des niveaux |
| `/about` | Présentation de la plateforme |
| `/contact` | Contact |
| `/login` | Connexion |
| `/register` | Inscription |
| `/profile` | Profil protégé |
| `*` | Page introuvable |

### Français

| Niveau | Leçon | Quiz |
|---|---|---|
| 5e | `/courses/5eme/francais` | `/courses/5eme/francais/quiz` |
| 5e | `/courses/5eme/francais/conjugaison-present` | même route suivie de `/quiz` |
| 5e | `/courses/5eme/francais/environnement` | même route suivie de `/quiz` |
| 5e | `/courses/5eme/francais/modules-1-2` | même route suivie de `/quiz` |
| 6e | `/courses/6eme/module-1` | leçon avec évaluation intégrée |
| 6e | `/courses/6eme/francais/revision` | même route suivie de `/quiz` |
| 6e | `/courses/6eme/francais/conjugaison-present` | même route suivie de `/quiz` |
| 6e | `/courses/6eme/francais/accepter-les-autres` | même route suivie de `/quiz` |
| 7e | `/courses/7eme/francais/conjugaison-present` | même route suivie de `/quiz` |
| 7e | `/courses/7eme/francais/passe-compose` | même route suivie de `/quiz` |
| 7e | `/courses/7eme/francais/en-famille` | production écrite |
| 7e | `/courses/7eme/francais/devoir-controle-1` | même route suivie de `/quiz` |

### English

| Niveau | Leçon | Quiz |
|---|---|---|
| 5e | `/courses/5eme/english/greetings` | même route suivie de `/quiz` |
| 5e | `/courses/5eme/english/units-2-3` | même route suivie de `/quiz` |
| 5e | `/courses/5eme/english/review` | même route suivie de `/quiz` |
| 6e | `/courses/6eme/english-unit-1` | leçon avec quiz |
| 6e/7e | `/courses/english-tenses` | leçon de grammaire |
| 6e | `/courses/6eme/english-reading` | leçon de lecture |
| 6e | `/courses/6eme/english/revision` | même route suivie de `/quiz` |
| 6e/7e | `/courses/:level/english/free-time` | même route suivie de `/quiz` |
| 6e/7e | `/courses/:level/english/hobbies` | même route suivie de `/quiz` |
| 7e | `/courses/7eme/english` | même route suivie de `/quiz` |
| 7e | `/courses/7eme/english/unit-2` | même route suivie de `/quiz` |
| 7e | `/courses/7eme/english/midterm-1` | même route suivie de `/quiz` |
| 7e | `/courses/7eme/english/module-1-review` | même route suivie de `/quiz` |

Les routes paramétrées utilisent `:level`, qui doit actuellement être
`5eme`, `6eme` ou `7eme` selon le contenu appelé.

## Authentification

### Inscription

Le frontend vérifie :

- nom d'au moins deux caractères ;
- adresse e-mail de forme valide ;
- mot de passe d'au moins six caractères ;
- confirmation identique au mot de passe.

Le serveur normalise l'e-mail en minuscules, hache le mot de passe avec
`crypto.scryptSync`, crée l'utilisateur et retourne une session.

### Connexion

Le serveur recherche l'e-mail normalisé, vérifie le hachage puis crée un
jeton aléatoire de 32 octets. Le jeton est conservé dans `localStorage` sous
la clé `ikkir:api-token` et envoyé aux routes protégées dans l'en-tête
`Authorization` avec le schéma Bearer.

### Déconnexion et suppression

- La déconnexion supprime la session côté serveur puis le jeton côté client.
- La suppression supprime l'utilisateur ; la contrainte `ON DELETE CASCADE`
  supprime ses sessions et ses résultats.

## Fonctionnement des quiz

Le composant partagé [src/components/Quiz.jsx](./src/components/Quiz.jsx)
reçoit notamment :

```jsx
<Quiz
  theme="fifth"
  lang="en"
  eyebrow="English · 5th form"
  title="Greetings and Introductions Quiz"
  subtitle="20 questions · total /20."
  questions={questions}
  backTo="/courses/5eme"
  backLabel="Back to 5th form →"
/>
```

Chaque question peut être écrite sous forme d'objet :

```js
{
  q: 'What is your name?',
  options: ['I am ten.', 'My name is Lina.', 'I live in Tunis.'],
  answer: 1
}
```

ou sous forme de tableau :

```js
['What is your name?', ['I am ten.', 'My name is Lina.'], 1]
```

`answer` est l'index de la bonne option, à partir de zéro.

### Cycle d'un quiz

1. Les réponses sont conservées dans l'état React.
2. Le bouton de correction signale d'abord les questions non répondues.
3. Une seconde validation autorise la correction partielle.
4. Le score est calculé avec `points` par réponse correcte.
5. La correction affiche la bonne et la mauvaise réponse.
6. Le résultat est enregistré localement avec le chemin de la page.
7. Le meilleur score et le nombre de tentatives sont affichés.
8. Le bouton `Recommencer` réinitialise uniquement le quiz courant.

Les seuils de message sont :

- au moins 80 % : excellent travail ;
- au moins 50 % : bon travail ;
- moins de 50 % : relire la leçon et réessayer.

Les statistiques locales sont gérées par
[src/utils/progress.js](./src/utils/progress.js). Elles ne sont pas un
substitut à l'historique serveur affiché dans le profil.

## Internationalisation

Les langues disponibles sont définies dans
[src/i18n/translations.js](./src/i18n/translations.js) :

| Code | Langue | Direction | Locale |
|---|---|---|---|
| `fr` | Français | `ltr` | `fr-FR` |
| `en` | English | `ltr` | `en-GB` |
| `ar` | العربية | `rtl` | `ar-TN` |

Les traductions générales se trouvent dans :

- [src/i18n/fr.js](./src/i18n/fr.js)
- [src/i18n/en.js](./src/i18n/en.js)
- [src/i18n/ar.js](./src/i18n/ar.js)

Pour ajouter une traduction :

1. ajouter la même clé dans les trois fichiers ;
2. utiliser `t('ma.cle')` dans le composant ;
3. ajouter les variables sous la forme `{name}` si nécessaire ;
4. vérifier le rendu en RTL ;
5. vérifier le titre et l'attribut `dir` du document.

La langue choisie est mémorisée dans `localStorage` sous `ikkir:lang`.

## API HTTP

L'API est définie dans [server/index.js](./server/index.js). Les réponses
JSON d'erreur utilisent généralement la forme :

```json
{ "error": "Message d'erreur" }
```

### Santé de l'API

```http
GET /api/health
```

Réponse `200` :

```json
{ "ok": true }
```

Cette route vérifie également que PostgreSQL répond.

### Authentification

#### Inscription

```http
POST /api/auth/register
Content-Type: application/json
```

Corps :

```json
{
  "name": "Lina",
  "email": "lina@example.com",
  "password": "motdepasse"
}
```

Réponse `201` :

```json
{
  "user": {
    "id": "uuid",
    "name": "Lina",
    "email": "lina@example.com",
    "createdAt": "2026-01-01T10:00:00.000Z"
  },
  "token": "jeton-de-session"
}
```

Codes possibles : `400` données invalides, `409` e-mail déjà utilisé,
`500` erreur serveur.

#### Connexion

```http
POST /api/auth/login
Content-Type: application/json
```

Corps :

```json
{
  "email": "lina@example.com",
  "password": "motdepasse"
}
```

Réponse `200` : même forme que l'inscription. Une combinaison incorrecte
retourne `401`.

#### Utilisateur courant

```http
GET /api/auth/me
Authorization: Bearer <token>
```

Réponse `200` :

```json
{
  "user": {
    "id": "uuid",
    "name": "Lina",
    "email": "lina@example.com",
    "createdAt": "2026-01-01T10:00:00.000Z"
  }
}
```

Sans jeton ou avec un jeton inconnu : `401`.

#### Déconnexion

```http
POST /api/auth/logout
Authorization: Bearer <token>
```

Réponse : `204 No Content`.

#### Suppression du compte

```http
DELETE /api/auth/account
Authorization: Bearer <token>
```

Réponse : `204 No Content`.

### Résultats

#### Lire les résultats

```http
GET /api/results
Authorization: Bearer <token>
```

Réponse `200` :

```json
[
  {
    "id": "uuid",
    "quiz": "english-greetings",
    "score": 17,
    "total": 20,
    "createdAt": "2026-01-01T10:00:00.000Z"
  }
]
```

Les résultats sont triés du plus récent au plus ancien et filtrés par
utilisateur connecté.

#### Enregistrer un résultat

```http
POST /api/results
Authorization: Bearer <token>
Content-Type: application/json
```

Corps :

```json
{
  "quiz": "english-greetings",
  "score": 17,
  "total": 20
}
```

Réponse `201` : résultat créé. Cette route doit recevoir des valeurs
cohérentes avec les contraintes SQL (`score >= 0`, `total > 0`).

## Base de données

Le schéma est dans [server/schema.sql](./server/schema.sql). Il active
`pgcrypto` pour générer les UUID.

### Table `users`

| Colonne | Type | Description |
|---|---|---|
| `id` | UUID | Identifiant primaire |
| `name` | TEXT | Nom affiché |
| `email` | TEXT UNIQUE | Adresse normalisée |
| `password_hash` | TEXT | Sel et hash scrypt |
| `created_at` | TIMESTAMPTZ | Date de création |

### Table `sessions`

| Colonne | Type | Description |
|---|---|---|
| `token` | TEXT | Identifiant de session primaire |
| `user_id` | UUID | Référence vers `users` |
| `created_at` | TIMESTAMPTZ | Date de création |

La suppression d'un utilisateur supprime ses sessions grâce à
`ON DELETE CASCADE`.

### Table `results`

| Colonne | Type | Description |
|---|---|---|
| `id` | UUID | Identifiant primaire |
| `user_id` | UUID | Propriétaire du résultat |
| `quiz` | TEXT | Identifiant ou nom du quiz |
| `score` | INTEGER | Score obtenu, supérieur ou égal à zéro |
| `total` | INTEGER | Score maximal, strictement positif |
| `created_at` | TIMESTAMPTZ | Date de soumission |

Les index sur `sessions.user_id` et `(results.user_id, results.created_at)`
optimisent les requêtes du profil.

Commandes utiles :

```bash
# Appliquer le schéma
psql "$DATABASE_URL" -f server/schema.sql

# Ouvrir une console PostgreSQL
psql "$DATABASE_URL"

# Vérifier les tables
psql "$DATABASE_URL" -c '\dt'
```

## Stockage côté navigateur

| Clé | Contenu | Portée |
|---|---|---|
| `ikkir:api-token` | Jeton de session API | Authentification |
| `ikkir:lang` | Code de langue | Préférence utilisateur |
| `ikkir:session` | Ancienne session locale | Compatibilité avec la couche locale |
| `ikkir:db:<table>` | Données de la base locale générique | Couche locale |
| `ikkir:quiz:<route>` | meilleur score, dernier score, tentatives | Quiz courant |

Le contenu de `localStorage` est propre au navigateur et peut être supprimé
par l'utilisateur. Il ne faut donc pas y stocker de données sensibles.

## Ajouter ou modifier du contenu

### Ajouter une leçon

1. Créer `src/pages/MaLecon.jsx`.
2. Créer une feuille `src/pages/MaLecon.css` si nécessaire.
3. Importer la page avec `lazy` dans [src/App.jsx](./src/App.jsx).
4. Ajouter une route explicite dans `<Routes>`.
5. Ajouter le lien dans [src/pages/LevelCourses.jsx](./src/pages/LevelCourses.jsx).
6. Vérifier les liens de retour vers le niveau.
7. Tester en français, anglais et arabe si le contenu est traduit.

Exemple :

```jsx
const MaLecon = lazy(() => import('./pages/MaLecon'))

<Route path="/courses/6eme/francais/ma-lecon" element={<MaLecon />} />
```

### Ajouter un quiz

1. Créer un tableau `questions`.
2. Utiliser des index de réponses valides.
3. Créer `MaLeconQuiz.jsx`.
4. Réutiliser le composant commun `Quiz`.
5. Ajouter la route `<lecon>/quiz`.
6. Définir `backTo` vers la page de leçon ou le niveau.
7. Vérifier le total annoncé et le nombre réel de questions.

Exemple minimal :

```jsx
import Quiz from '../components/Quiz'

const questions = [
  {
    q: 'Question ?',
    options: ['Réponse A', 'Réponse B', 'Réponse C'],
    answer: 1,
  },
]

export default function MaLeconQuiz() {
  return (
    <Quiz
      theme="reading"
      lang="fr"
      eyebrow="Français · 6e"
      title="Quiz de la leçon"
      subtitle="1 question · total /1."
      questions={questions}
      backTo="/courses/6eme"
      backLabel="Retour au niveau"
    />
  )
}
```

### Ajouter un résultat serveur

Le composant de quiz utilise actuellement les statistiques locales. Pour
alimenter l'historique du profil, appeler `saveResult` depuis
[src/db/results.js](./src/db/results.js) après la correction, uniquement si
l'utilisateur est connecté, puis gérer explicitement les erreurs réseau.

### Ajouter une matière à un niveau

Modifier le tableau `subjects` de `LevelCourses.jsx`. Chaque module doit
contenir :

```js
{
  title: 'Titre visible',
  detail: 'Description courte',
  path: '/courses/6eme/francais/ma-lecon',
  active: true
}
```

Utiliser `active: false` uniquement pour un contenu réellement indisponible.

## Qualité, tests et build

### Lint

```bash
npm run lint
npm run lint:fix
```

### Formatage

```bash
npm run format
npm run format:check
```

### Tests

```bash
npm test
```

La configuration Vitest autorise l'absence de tests avec
`--passWithNoTests`. Lorsqu'une fonctionnalité est ajoutée, privilégier des
tests ciblés pour les composants, les validations et les flux
d'authentification.

### Build de production

```bash
npm run build
```

Le build Vite génère le répertoire `dist/`. Il doit être exécuté avant une
mise en production afin de détecter les erreurs d'import, de syntaxe ou de
compilation.

## Déploiement

### Backend

1. Installer les dépendances avec `npm ci`.
2. Définir `DATABASE_URL`, `PORT` et `CLIENT_URL`.
3. Exécuter `server/schema.sql` sur la base de production.
4. Démarrer avec `npm run server`.
5. Exposer uniquement le port HTTP via un reverse proxy HTTPS.
6. Vérifier `/api/health`.

### Frontend

1. Définir `VITE_API_URL` vers l'URL publique de l'API.
2. Exécuter `npm run build`.
3. Servir `dist/` avec un serveur statique.
4. Configurer le fallback SPA vers `index.html` pour les routes React.
5. Autoriser cette origine dans `CLIENT_URL`.

Le frontend et l'API peuvent être déployés sur des domaines différents, mais
la configuration CORS et l'URL d'API doivent alors être cohérentes.

### Configuration Vercel + Render

Le dépôt contient les manifests suivants :

- [vercel.json](./vercel.json) : build du frontend Vite, publication de
  `dist/` et fallback SPA vers `index.html` ;
- [render.yaml](./render.yaml) : service web Render pour l'API Express,
  contrôle de santé `/api/health` et variables sensibles à saisir dans le
  tableau de bord.

Procédure :

1. Importer le dépôt dans Vercel et conserver la commande `npm run build`.
2. Définir `VITE_API_URL` avec l'URL HTTPS publique du service Render suivie
   de `/api`.
3. Créer le service Render à partir de `render.yaml`.
4. Dans Render, saisir `DATABASE_URL` avec l'URL Supabase PostgreSQL et
   `CLIENT_URL` avec l'URL Vercel HTTPS.
5. Appliquer [server/schema.sql](./server/schema.sql) une fois sur la base
   Supabase avant de démarrer l'API.
6. Vérifier `https://<api>/api/health` puis le parcours frontend.

Les valeurs `DATABASE_URL` et `CLIENT_URL` sont volontairement déclarées
`sync: false` afin qu'aucun secret ou domaine ne soit commité.

### Sauvegardes Supabase

Les sauvegardes ne peuvent pas être configurées depuis ce dépôt sans accès au
projet Supabase. Dans Supabase, activer les sauvegardes et la rétention
adaptées au plan choisi, puis tester une restauration sur un projet séparé.
Pour une sauvegarde indépendante, utiliser `pg_dump` depuis un environnement
sécurisé :

```bash
mkdir -p backups
pg_dump "$DATABASE_URL" --format=custom --file "backups/ikkir-akkra-$(date -u +%Y%m%dT%H%M%SZ).dump"
```

Ne pas commiter le répertoire `backups/`. Stocker les dumps chiffrés dans un
coffre ou un stockage privé avec une politique de rétention, et vérifier
régulièrement une restauration :

```bash
createdb ikkir_akkra_restore
pg_restore --clean --if-exists --dbname "$RESTORE_DATABASE_URL" backup.dump
```

## Dépannage

### `ECONNREFUSED` ou échec de `/api/health`

Vérifier que PostgreSQL est démarré, que `DATABASE_URL` est correct et que le
serveur API est lancé :

```bash
npm run server
curl http://localhost:3001/api/health
```

### Erreur CORS

Vérifier que `CLIENT_URL` correspond exactement à l'origine du navigateur,
notamment le protocole, le nom d'hôte et le port. Redémarrer l'API après toute
modification de `.env`.

### Page blanche après un rafraîchissement

En développement, utiliser le serveur Vite. En production, configurer le
fallback de toutes les routes vers `index.html`.

### La langue ne change pas

Supprimer `ikkir:lang` dans le stockage local du navigateur puis recharger :

```js
localStorage.removeItem('ikkir:lang')
```

### Le profil redirige vers la connexion

Le jeton peut être absent, expiré ou invalide. Se déconnecter, supprimer
`ikkir:api-token`, se reconnecter et vérifier que `/api/auth/me` répond `200`.

### Le score local a disparu

Les scores de quiz sont stockés dans `localStorage`. La suppression des
données du site, le mode privé ou un changement de navigateur les supprime.
L'historique serveur du profil est indépendant.

## Sécurité et recommandations

Le projet applique déjà plusieurs mesures utiles :

- requêtes PostgreSQL paramétrées ;
- hachage des mots de passe avec scrypt ;
- comparaison du hash avec `timingSafeEqual` ;
- données utilisateur limitées à une représentation publique ;
- sessions aléatoires stockées côté serveur ;
- suppression en cascade des données associées.

Les protections déjà intégrées dans cette version sont :

- en-têtes HTTP `X-Content-Type-Options`, `X-Frame-Options`,
  `Referrer-Policy` et `Permissions-Policy` ;
- désactivation de l'en-tête Express `X-Powered-By` ;
- limitation des requêtes JSON à 100 ko ;
- limitation en mémoire des tentatives d'inscription et de connexion ;
- limitation des écritures de session et de résultats ;
- validation de la taille et du type des résultats ;
- sessions expirant après 30 jours ;
- validation stricte du format Bearer et des hashes de mots de passe ;
- arrêt propre du serveur sur `SIGTERM` et `SIGINT` ;
- exclusion de `.env`, `node_modules`, `dist` et des rapports de couverture
  dans `.gitignore` ;
- workflow GitHub Actions dans `.github/workflows/ci.yml` avec installation
  reproductible, audit, lint, tests et build.
- tests unitaires ciblés du rate limiting dans
  `server/rateLimit.test.js` ;
- garde-fous de démarrage en production : `CLIENT_URL` HTTPS et proxy de
  confiance explicitement activé ;
- réponses API marquées `Cache-Control: no-store` et HSTS activé en production.

Les éléments qui restent dépendants de l'hébergeur sont :

- terminaison TLS/HTTPS et redirection HTTP vers HTTPS ;
- sauvegardes et restauration PostgreSQL ;
- journalisation et surveillance centralisées ;
- limitation distribuée si plusieurs instances API sont déployées.

Le rate limiting actuel est volontairement sans dépendance et en mémoire.
Il protège une instance unique, mais doit être remplacé par un mécanisme
partagé (par exemple celui du reverse proxy ou Redis) en cas de déploiement
horizontal.

## Arborescence

```text
.
├── index.html                 # Document HTML racine
├── package.json               # Scripts et dépendances
├── package-lock.json          # Verrouillage des versions npm
├── vite.config.js             # Plugin React et proxy /api
├── public/                    # Ressources servies telles quelles
│   ├── favicon.svg
│   ├── icons.svg
│   └── logo.png.png
├── server/
│   ├── db.js                  # Pool PostgreSQL et helper query
│   ├── index.js               # API Express et middleware auth
│   └── schema.sql             # Tables et index PostgreSQL
└── src/
    ├── App.jsx                # Routeur et chargement des pages
    ├── api.js                 # Client HTTP et jeton
    ├── main.jsx               # Point d'entrée React
    ├── auth/                  # Contexte et services d'authentification
    ├── components/             # Navigation, pied de page et quiz partagé
    ├── db/                     # Résultats et couche locale
    ├── i18n/                   # Langues, traductions et contexte
    ├── pages/                  # Accueil, niveaux, leçons et quiz
    ├── utils/                  # Progression locale des quiz
    └── assets/                 # Images utilisées par le frontend
```

## Conventions de contribution

- Conserver les routes en minuscules avec des segments explicites.
- Réutiliser `Quiz` plutôt que créer une logique de correction parallèle.
- Réutiliser `useI18n` pour les textes d'interface.
- Utiliser les requêtes SQL paramétrées dans toute nouvelle route.
- Ne pas commiter de secrets ou de données personnelles.
- Exécuter au minimum `npm run lint`, `npm test` et `npm run build` avant une
  livraison.
- Documenter toute nouvelle route, variable d'environnement ou table dans ce
  fichier.
