---
title: Tri à bulles
description: Bubble sort — on échange les voisins mal placés. O(n²).
sidebar:
  order: 2
---

**Complexité :** `O(n²)`, lent
**À retenir :** sert surtout à apprendre

On compare chaque paire de voisins. Si celui de gauche est plus grand, on les échange. On recommence jusqu'à ce que tout soit en ordre.

```js
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // on échange les deux voisins
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

bubbleSort([5, 3, 1, 8, 2]); // → [1, 2, 3, 5, 8]
```

:::note
`arr.length - i - 1` : après chaque passage, le plus grand élément restant est arrivé au bout. Inutile de le revérifier.
:::
