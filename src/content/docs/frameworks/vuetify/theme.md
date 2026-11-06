---
title: Le thème
description: Définir les couleurs une fois, les utiliser partout, mode sombre.
sidebar:
  order: 4
---

## Principe

Les couleurs sont définies **une seule fois**, dans le fichier de thème. Tous les composants les utilisent par leur nom. Pour changer une couleur, on ne touche qu'à ce fichier.

```ts
export const light: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#f3f3f6',
    surface: '#ffffff',
    primary: '#51609f',
    rdv: '#4673ad',
    // ...
  },
}
```

## Utiliser les couleurs du thème

| Où | Syntaxe |
|---|---|
| Composant Vuetify | `<v-btn color="rdv">` |
| CSS fond | `background: rgb(var(--v-theme-rdv));` |
| CSS texte sur fond coloré | `color: rgb(var(--v-theme-on-rdv));` |
| CSS bordure standard | `border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));` |
| CSS teinte transparente | `color-mix(in srgb, rgb(var(--v-theme-on-surface)) 8%, transparent)` |

- `on-<couleur>` : la couleur de texte lisible **sur** la couleur de base. Vuetify la génère automatiquement.
- Les variables `--v-theme-*` suivent le mode actif. Pas besoin de gérer le mode sombre dans les composants.

## Règle d'or

:::danger[Aucune couleur en dur dans les composants]
Ni `#fff`, ni `white`, ni `rgba(0,0,0,…)`. Si une couleur manque, on l'ajoute au thème.
:::

## Mode sombre

Le thème `dark` redéfinit les mêmes noms avec des valeurs adaptées (fond sombre, couleurs éclaircies). Un composant écrit une seule fois fonctionne dans les deux modes.
