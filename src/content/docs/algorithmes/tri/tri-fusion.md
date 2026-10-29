---
title: Tri fusion
description: Merge sort — diviser pour régner. O(n log n), toujours fiable.
sidebar:
  order: 5
---

**Complexité :** `O(n log n)`, rapide ✓
**À retenir :** diviser pour régner, toujours fiable

On coupe la liste en deux, on trie chaque moitié (récursivement), puis on fusionne les deux parties triées.

```js
function mergeSort(arr) {
  if (arr.length <= 1) return arr; // cas de base

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid)); // trie la moitié gauche
  const right = mergeSort(arr.slice(mid));   // trie la moitié droite

  return merge(left, right); // fusionne les deux
}

function merge(left, right) {
  const result = [];
  while (left.length && right.length) {
    // on prend la plus petite des deux têtes de liste
    result.push(left[0] <= right[0] ? left.shift() : right.shift());
  }
  return [...result, ...left, ...right];
}

mergeSort([5, 3, 1, 8, 2]); // → [1, 2, 3, 5, 8]
```

:::note
Le `<=` (plutôt que `<`) rend le tri **stable** : deux éléments égaux gardent leur ordre de départ. C'est important quand on trie des objets.
:::
