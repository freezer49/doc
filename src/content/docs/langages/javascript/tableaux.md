---
title: Tableaux
description: Index, ajout/retrait, slice/splice, map, filter, reduce…
sidebar:
  order: 4
---

## Les bases

- L'index commence à **0**
- Dernier élément → `arr[arr.length - 1]`
- Condition de boucle → `i < arr.length`

## Ajouter / retirer

| Méthode | Action | Position |
| --- | --- | --- |
| `push` | ajoute | fin |
| `pop` | retire | fin |
| `unshift` | ajoute | début |
| `shift` | retire | début |

## slice vs splice

- **`slice(début, fin)`** → extrait, ne modifie **pas** l'original
- **`splice(index, nb)`** → supprime/insère, **modifie** l'original

## Transformer

- **`map`** → transforme chaque élément → nouveau tableau
- **`filter`** → garde ceux qui passent le test → nouveau tableau
- **`reduce`** → réduit à une seule valeur
- **`find`** → trouve le premier élément correspondant
- **`forEach`** → exécute pour chaque élément (pas de retour)

```js
const nombres = [1, 2, 3, 4];

nombres.map(n => n * 2);              // [2, 4, 6, 8]
nombres.filter(n => n > 2);           // [3, 4]
nombres.reduce((acc, n) => acc + n, 0); // 10
nombres.find(n => n > 2);             // 3
```

## Autres méthodes

- **`includes(x)`** → `true` / `false`
- **`indexOf(x)`** → position ou `-1`
- **`join(", ")`** → transforme en string
- **`concat(arr2)`** → fusionne (ne modifie pas)

Pour trier : voir [Trier en pratique](../../../algorithmes/tri/en-pratique/).
