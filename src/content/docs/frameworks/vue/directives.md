---
title: Directives essentielles
description: v-if, v-show, v-for et classes dynamiques.
sidebar:
  order: 2
---

## Conditions

```vue
<p v-if="avocat.telephone">{{ avocat.telephone }}</p>
<p v-else-if="avocat">Pas de téléphone renseigné</p>
<p v-else>Chargement…</p>
```

- `v-if` : crée ou retire l'élément du DOM.
- `v-show` : masque avec `display: none`, l'élément reste dans le DOM. Préférable pour un affichage qui change souvent.
- Règle pratique : `v-if` pour une condition rare, `v-show` pour une bascule fréquente.

## Boucles

```vue
<ul>
  <li v-for="doc in documents" :key="doc.id">{{ doc.nom }}</li>
</ul>
```

- `:key` doit être **unique et stable** (un identifiant, jamais l'index si la liste change).
- `v-for` et `v-if` sur le même élément : évitez-les. Filtrez avec un `computed` à la place.

## Classes et styles dynamiques

```vue
<div :class="{ 'carte--active': actif, 'carte--grande': grande }" />
<v-chip :color="statut.couleur" />
```
