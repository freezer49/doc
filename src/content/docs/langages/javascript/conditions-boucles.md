---
title: Conditions et boucles
description: if/else, switch, for, for...of, for...in, while.
sidebar:
  order: 3
---

## if / else

```js
if (condition) {
  // ...
} else if (autre) {
  // ...
} else {
  // ...
}
```

## switch

Pour comparer une variable à plusieurs valeurs.

```js
switch (x) {
  case "a":
    // ...
    break;
  case "b":
    // ...
    break;
  default:
  // ...
}
```

## Boucles

**for classique**

```js
for (let i = 0; i < arr.length; i++) {
  // ...
}
```

**for...of** → parcourt les **valeurs** (tableaux, strings)

```js
for (const val of tableau) {
  // ...
}
```

**for...in** → parcourt les **clés** (objets)

```js
for (const cle in objet) {
  // ...
}
```

- **while** → tant que la condition est vraie
- **do...while** → exécute au moins une fois

## Contrôle

- **break** → sort de la boucle
- **continue** → passe à l'itération suivante
