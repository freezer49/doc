---
title: Tri par insertion
description: Insertion sort — comme trier ses cartes en main. O(n²), O(n) si presque trié.
sidebar:
  order: 4
---

**Complexité :** `O(n²)` en général, `O(n)` si la liste est déjà presque triée ✨
**À retenir :** comme trier ses cartes en main

On garde une partie gauche déjà triée. Chaque nouvel élément glisse vers la gauche jusqu'à sa bonne place.

```js
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    // on recule tant que le voisin de gauche est plus grand
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current; // on insère à la bonne place
  }
  return arr;
}

insertionSort([5, 3, 1, 8, 2]); // → [1, 2, 3, 5, 8]
```
