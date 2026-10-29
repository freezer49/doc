---
title: Tri par sélection
description: Selection sort — on place le minimum en premier, puis on recommence. O(n²).
sidebar:
  order: 3
---

**Complexité :** `O(n²)`, lent
**À retenir :** toutes petites listes

On cherche le plus petit élément de toute la liste et on le place en premier. Puis on recommence sur le reste.

```js
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) minIndex = j; // on trouve le minimum
    }
    // on place le minimum à sa position
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}

selectionSort([5, 3, 1, 8, 2]); // → [1, 2, 3, 5, 8]
```
