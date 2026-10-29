---
title: Tri rapide
description: Quick sort — un pivot, deux groupes, on recommence. O(n log n) en moyenne.
sidebar:
  order: 6
---

**Complexité :** `O(n log n)` en moyenne, le plus rapide en pratique
**À retenir :** choisir un pivot, séparer, recommencer

On choisit un **pivot**. Tout ce qui est plus petit va à gauche, tout ce qui est plus grand va à droite. On recommence dans chaque groupe.

```js
function quickSort(arr) {
  if (arr.length <= 1) return arr; // cas de base

  const pivot = arr[arr.length - 1]; // le dernier = pivot
  const left = arr.slice(0, -1).filter(x => x <= pivot); // plus petits
  const right = arr.slice(0, -1).filter(x => x > pivot); // plus grands

  return [...quickSort(left), pivot, ...quickSort(right)];
}

quickSort([5, 3, 1, 8, 2]); // → [1, 2, 3, 5, 8]
```

:::note
Cette version est la plus lisible, mais elle crée de nouveaux tableaux à chaque appel. La mémoire `O(log n)` du [comparatif](../comparatif/) concerne la version « en place », qui échange les éléments directement dans le tableau.

Pire cas : `O(n²)` si le pivot tombe toujours sur le plus petit ou le plus grand élément (par exemple, une liste déjà triée avec le dernier élément comme pivot).
:::
