# TP Angular 21 — Staff (Signals only)

![GIF](https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGxhdjRzZmF6b2h4NjAweDg1d3BvdDh0cnY1dW1mdW0yeGR5emw0YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/If06XcAqynYH8QEP9S/giphy.gif)

## Contexte
Tu travailles sur une application Angular 21 (thème Harry Potter).  
Tu dois créer une page **/staff** qui affiche les membres du staff récupérés depuis une API.

---

## Contraintes obligatoires

- Angular **21**
- **Signals uniquement**
- Séparation claire :
  - **Parent = container (logique, data, état)**
  - **Enfant = presentational (affichage uniquement)**
- SCSS imbriqué

---

## Objectif fonctionnel

- Appeler une API pour récupérer les membres du staff
- Ajouter une route `/staff`
- Afficher les données sous forme de cartes
- Gérer :
  - état de chargement
  - état “liste vide”

---

## Étape 1 — Route `/staff` (lazy)

### À faire
- Ajouter une route `/staff`
- La route doit être **lazy-loaded**
- Définir :
  - `title` : `HP - Staff`
  - `data` :
    - `section: 'Harry Potter'`
    - `breadcrumb: 'Staff'`

### Résultat attendu
- Accès direct via l’URL `/staff`
- Navigation possible depuis la topbar
- Le titre de la page change correctement

---

## Étape 2 — Modèle Staff

Créer le model du staff.

### Règle
- Le modèle est utilisé **partout**
- Aucun composant ne redéfinit la structure

---

## Étape 3 — Service API

### À faire
- Créer un service chargé de récupérer les staff depuis l’API
- L’API expose un endpoint `GET /staff`

### Contraintes
- Le service **ne gère pas l’affichage**
- Le service **ne contient pas de logique UI**
- Le service expose les données sous une forme compatible.

---

## Étape 4 — Parent (container)

### Rôle du parent (`staff-page`)
Le parent est **le cerveau**.

Il doit :
- appeler le service
- stocker les données dans des **signals**
- gérer les états :
  - loading
  - error
  - success
- décider **quoi afficher**

### États à gérer (obligatoires)
- `loading = true` → affichage d’un loader ou skeleton
- `staff.length === 0` → empty state
- `staff.length > 0` → affichage de la liste

### Interdictions
- Le parent **n’affiche pas les cartes**
- Le parent **ne gère pas le layout des items**

---

## Étape 5 — Enfant (presentational)

### Rôle de l’enfant (`staff-list`)
L’enfant est **stupide** (dumb component).

Il doit :
- recevoir la liste via une entrée
- afficher les cartes
- être totalement réutilisable
- ne jamais appeler l’API

### Interdictions
- Pas de service injecté
- Pas de logique métier
- Pas de gestion d’état global

---

## Étape 6 — UI / SCSS

### Page `/staff`
- Titre clair : **Staff**
- Sous-titre explicatif
- Compteur du nombre de membres

### États visuels obligatoires
- Loading : skeleton ou placeholder
- Empty state : message clair
- Error state : message visible

---

## Étape 7 — Signals (obligatoire partout)

### Règles strictes
- Les données sont stockées dans des **signals**
- L'état (`loading`) est un **signal**
- Aucun `Observable` dans les composants

---

## Critères de validation

Le TP est validé si :

- La route `/staff` est lazy
- Le service appelle l’API
- Le parent récupère les données et gère les états
- L’enfant affiche uniquement
- Tout est basé sur des signals
- Le rendu est propre et responsive
- Le code respecte la séparation des responsabilités

---

### Bonus — Page `/characters` : personnage actif

#### Objectif
Rendre la page `/characters` plus agréable visuellement et ajouter une interaction simple.

#### Consigne
Sur la page `/characters` :

- Afficher la liste des personnages sous une forme agréable (cartes ou liste stylée).
- Ajouter **un bouton sur chaque personnage**.
- Lorsqu’on clique sur ce bouton :
  - la page doit afficher le texte (en haut de la page) :

**Active character : NOM_DU_PERSONNAGE**

#### Contraintes
- Utiliser **uniquement des signals**
- Respecter la séparation :
  - parent = gestion de l’état
  - enfant = affichage + émission d’événement
- L’enfant ne modifie jamais l’état directement (`pensez output`)
- Le rendu doit être propre et responsive

#### Résultat attendu
- Le clic sur un personnage met à jour dynamiquement le personnage actif affiché sur la page
- Un seul personnage peut être actif à la fois


---

## Rappel important

Si tu supprimes le service et que tu passes une liste mock au composant enfant :  
👉 **l’affichage doit continuer à fonctionner**

C’est le signe que ta séparation est bonne.

