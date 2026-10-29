---
title: Introduction
description: La complexité et les index i / j, pour comprendre les algorithmes de tri.
sidebar:
  order: 1
---

## La complexité

La **complexité** mesure la vitesse d'un algorithme selon la taille de la liste.

- `O(n²)` → lent
- `O(n log n)` → rapide

Les 3 premiers tris (bulles, sélection, insertion) servent à **apprendre**. Les 2 derniers (fusion, rapide) sont **utilisés en vrai**.

## Les index : comprendre i et j

Chaque case d'un tableau a une **adresse qui commence à 0**.

```js
const arr = [5, 3, 1, 8, 2];
//  index :  0  1  2  3  4

arr[0]; // → 5
arr[3]; // → 8
```

| Variable | Rôle |
| --- | --- |
| `i` | numéro du **passage** : combien de fois on a relu la liste |
| `j` | position du **curseur** pendant ce passage |

:::tip
`i` et `j` auraient pu s'appeler `passage` et `curseur`. C'est juste une convention.
:::
