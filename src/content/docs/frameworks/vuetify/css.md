---
title: CSS dans Vue
description: scoped, :deep(), variables CSS, Flexbox/Grid et responsive.
sidebar:
  order: 5
---

## `scoped`

`<style scoped>` isole le style du composant. Pour atteindre un élément interne d'un composant Vuetify, on utilise `:deep()` :

```css
.carte-rdv__actions :deep(.v-btn) {
  min-width: 13rem;
}
```

## Variables CSS

Les variables du thème sont des variables CSS (`--v-theme-rdv`). On peut aussi définir les siennes :

```css
.carte {
  --espace: 1.5rem;
  padding: var(--espace);
}
```

## Flexbox et Grid

- **Flexbox** : une rangée ou une colonne. `display: flex`, `justify-content`, `align-items`, `gap`.
- **Grid** : une grille à deux dimensions. `display: grid`, `grid-template-columns: 1fr 1fr`, `gap`.
- Pour la page d'accueil, Grid suffit. Vuetify propose `v-row`/`v-col` si vous préférez rester dans ses classes.

## Responsive

```css
@media (min-width: 960px) {
  .grille-bas {
    grid-template-columns: 1fr 1fr;
  }
}
```

Le breakpoint `960px` correspond à `md` dans Vuetify. Gardez la même valeur pour rester cohérent.

## Ne pas mélanger deux systèmes

Tailwind (`shadow-[…]`, `bg-surface`) et Vuetify (`pa-6`, `d-flex`) peuvent coexister, mais leurs règles se chevauchent et leur priorité n'est pas toujours évidente. Choisissez un système principal par projet.
