---
title: Comparatif
description: Vitesse, mémoire et cas d'usage des 5 algorithmes de tri.
sidebar:
  order: 7
---

| Algorithme | Vitesse | Mémoire | Quand l'utiliser ? |
| --- | --- | --- | --- |
| 🔴 [Bulles](../tri-bulles/) | `O(n²)` | `O(1)` | pour apprendre uniquement |
| 🟠 [Sélection](../tri-selection/) | `O(n²)` | `O(1)` | très petites listes |
| 🟢 [Insertion](../tri-insertion/) | `O(n²)` / `O(n)`* | `O(1)` | liste presque triée ✨ |
| 🔵 [Fusion](../tri-fusion/) | `O(n log n)` | `O(n)` | gros volumes, résultat garanti |
| 🟣 [Rapide](../tri-rapide/) | `O(n log n)` en moyenne | `O(log n)` | la plupart des cas réels ⚡ |

\* `O(n)` quand la liste est déjà presque triée.
