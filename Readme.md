# 💸 SplitMate

Application web de gestion de dépenses partagées entre amis, colocataires ou voyageurs. Elle fonctionne entièrement dans le navigateur, **sans serveur ni authentification** : les données sont sauvegardées dans le `LocalStorage`.

> Projet réalisé en binôme dans le cadre de la formation Full Stack Development (YouCode).
> Lancement du brief : 26/10/2026 — Date limite : 05/11/2026 à 23h59.

---

## 📌 Contexte

Les comptes entre amis sont souvent gérés par des notes ou des messageries : paiements oubliés, dettes difficiles à suivre, calculs manuels. SplitMate permet de créer des groupes, d'ajouter des membres, d'enregistrer des dépenses et de calculer automatiquement les soldes et les remboursements nécessaires.

## ✨ Fonctionnalités

- **Tableau de bord** : nombre de groupes, de membres, total des dépenses, dernières dépenses, répartition par catégorie (barres de progression).
- **Groupes (CRUD)** : création, modification, suppression avec confirmation, groupes ouverts / clôturés, affichage en cartes avec total dépensé.
- **Membres (CRUD)** : ajout, modification, suppression (interdite si le membre est lié à des dépenses).
- **Dépenses (CRUD)** : titre, montant, catégorie, date, payeur, membres concernés, parts égales ou personnalisées, validation des données.
- **Soldes et remboursements** : solde = montant payé − montant dû, liste « X doit Y € à Z », marquage d'un remboursement comme effectué, recalcul automatique.
- **Recherche, filtres et tri** : par titre, catégorie, payeur, période ; tri par date ou montant ; message si aucun résultat.
- **Persistance et interface** : LocalStorage, notifications (toasts), interface responsive mobile et ordinateur.
- **Bonus** : export / import JSON, mode sombre, graphique par catégorie, dépenses récurrentes.

## 🏁 Niveaux de difficulté

| Niveau | Contenu |
|--------|---------|
| 🟢 MVP | Groupes, membres, dépenses à parts égales, soldes, LocalStorage |
| 🟡 Standard | Partage personnalisé, remboursements optimisés, filtres, dashboard |
| 🔴 Bonus | Export/import JSON, mode sombre, graphique, dépenses récurrentes |

## 🛠️ Technologies

- HTML5
- Tailwind CSS
- JavaScript ES6+ (modules ES, destructuring, spread/rest, fonctions fléchées, `map`, `filter`, `reduce`, `sort`)
- LocalStorage
- Git / GitHub (branches + Pull Requests)

## 🗂️ Architecture du projet

```
splitmate/
├── index.html
├── css/
│   └── style.css
└── js/
    ├── main.js       # Point d'entrée et navigation
    ├── storage.js    # LocalStorage
    ├── groupes.js    # CRUD groupes
    ├── membres.js    # CRUD membres
    ├── depenses.js   # CRUD et répartition
    ├── soldes.js     # Soldes et remboursements
    ├── filtres.js    # Recherche, filtres et tri
    ├── ui.js         # DOM, toasts et confirmations
    └── utils.js      # Validation et formatage
```

## 🧾 Modèle de données

```js
// Groupe
{ id, nom, description, devise, dateDebut, cloture: false }

// Membre
{ id, groupeId, nom, pseudo }

// Dépense
{
  id, groupeId, titre, montant, categorie, date, payeurId,
  parts: [{ membreId, montant }]
}

// Remboursement
{ id, groupeId, deId, versId, montant, date }
```

## 📋 Product Backlog

| ID | User Story |
|----|-----------|
| US01 | Créer et gérer des groupes de dépenses |
| US02 | Ajouter et gérer les membres d'un groupe |
| US03 | Enregistrer une dépense et sélectionner les membres concernés |
| US04 | Modifier ou supprimer une dépense erronée |
| US05 | Consulter mon solde et celui des autres membres |
| US06 | Savoir qui doit rembourser qui et combien |
| US07 | Rechercher, filtrer et trier les dépenses |
| US08 | Consulter un tableau de bord récapitulatif |
| US09 | Retrouver mes données après actualisation |
| US10 | Utiliser l'application sur mobile et ordinateur |

## 🚀 Installation et lancement

```bash
# 1. Cloner le dépôt
git clone https://github.com/Ayoub-benyahiia/SplitMate-brief.git

# 2. Entrer dans le dossier
cd splitmate

# 3. Ouvrir l'application
# Les modules ES nécessitent un serveur local (ex. extension Live Server de VS Code)
```

> ⚠️ Les modules ES (`import` / `export`) ne fonctionnent pas en ouvrant `index.html` directement avec `file://`. Utilisez **Live Server** ou un serveur local équivalent.

## 🌿 Stratégie Git

- `main` : version stable
- `develop` : branche d'intégration
- Branches fonctionnelles : `feature/groupes`, `feature/membres`, `feature/depenses`, `feature/soldes`, `feature/filtres`, `feature/dashboard`

**Règles :**
1. Une branche par fonctionnalité
2. Pull Request vers `develop`
3. Revue du code avant chaque intégration
4. Fusion de `develop` dans `main` après validation finale
5. Commits explicites : `feat:`, `fix:`, `style:`, `docs:`

## 👥 Équipe

Projet réalisé en binôme par **Ayoub Ben Yahia** et **Boubaker Settaf**.

## 📅 Planning

- Lancement : 26/10/2026 à 8h30
- Mise en situation : du 03/11/2026 au 05/11/2026
- Soumission : 05/11/2026 à 23h59

## 🎤 Évaluation

- Présentation du projet sur Canva ou PowerPoint (10 min)
- Explication du code et de la logique
- Questions-réponses
- Mise en situation (Bootstrap / Tailwind CSS, JavaScript ES6)

## 📄 Licence

Projet pédagogique réalisé à YouCode.