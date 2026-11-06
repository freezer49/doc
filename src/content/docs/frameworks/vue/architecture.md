---
title: Architecture et organisation
description: Pages, layouts, composants, architecture en couches et arborescence src/.
sidebar:
  order: 8
---

## Pages, layouts, composants

| Type | Où le ranger (convention) | Rôle |
|---|---|---|
| **Page** (vue) | `views/` ou `pages/` | Associée à une URL, assemble des composants |
| **Layout** | `layouts/` | Entoure les pages (menu, barre latérale), contient `<router-view />` |
| **Composant** | `components/` | Morceau d'écran réutilisable |
| **Composable** | `composables/` | Logique réactive réutilisable |

- Une **page** assemble, un **composant** affiche une partie, un **composable** calcule.
- Nommage : fichiers en **PascalCase** (`CarteRendezVous.vue`). Dans le template, on écrit `<CarteRendezVous />` ou `<carte-rendez-vous />`.

## Architecture en couches

```
API (contrat)  →  mapper  →  modèle du domaine  →  composant
AppointmentV1     toDossier     Dossier              écran
```

| Couche | Fichier type | Rôle |
|---|---|---|
| **Contrat** | `api/contract/v1.ts` | Forme exacte des données de l'API |
| **Mock** | `api/gateways/mock/fixtures/` | Fausses données pour développer sans backend |
| **Gateway** | `api/gateways/` | Choisit mock ou réel, fait les appels |
| **Mapper** | `api/mappers.ts` | Traduit l'API en modèle du domaine |
| **Domaine** | `domain/types.ts`, `domain/rules.ts` | Vocabulaire de l'application, règles métier |
| **Composable** | `composables/` | Charge et expose les données |
| **Composant / page** | `components/`, `views/` | Affichage uniquement |

**Pourquoi ?** Quand l'API change, seul le mapper bouge. Quand la V2 arrive, les écrans restent identiques. Un écran qui lit directement l'API serait à réécrire à chaque changement.

### Mock ou API réelle

```ts
export const dossierGateway =
  import.meta.env.VITE_API_MODE === 'mock'
    ? createMockGateway()
    : createHttpGateway(import.meta.env.VITE_API_URL)
```

- `import.meta.env` : variables d'environnement Vite, définies dans `.env.local`.
- Seul ce fichier sait lequel est utilisé. Les composants ne changent pas.

## Organisation d'un projet Vue

```
src/
├── api/              contrat, mappers, gateways, mocks
├── domain/           types et règles métier
├── components/       composants réutilisables
├── composables/      logique réutilisable (useXxx)
├── views/            pages (associées à une route)
├── layouts/          structure autour des pages
├── router/           configuration des routes
├── plugins/          vuetify.ts, etc.
├── theme/            couleurs (light, dark)
└── main.ts           point d'entrée
```

- **Alias `@`** : raccourci pour `src/`, défini dans `vite.config.ts`. `@/components/X.vue` équivaut à `../components/X.vue` depuis n'importe quel fichier.
