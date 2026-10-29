---
title: Pièges à retenir
description: Les erreurs classiques en JavaScript.
sidebar:
  order: 7
---

:::caution[À garder en tête]
- `==` fait de la coercition → utiliser `===`
- `"2" + 2` = `"22"` (concaténation de strings)
- L'index d'un tableau commence à `0`
- Boucle : `i < length` (pas `<=`)
- `[]` et `{}` sont truthy
- `typeof null` = `"object"`
- Arrow function avec `{}` → besoin de `return`
- `const obj` → contenu modifiable, référence non réassignable
:::
