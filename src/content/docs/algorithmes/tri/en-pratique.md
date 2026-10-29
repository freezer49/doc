---
title: En pratique (JavaScript)
description: Trier avec .sort() et .toSorted() — nombres, strings, objets.
sidebar:
  order: 8
---

En vrai, tu utiliseras **toujours** `.sort()` ou `.toSorted()`. Ce qui compte, c'est d'écrire la bonne fonction de comparaison.

## Nombres

```js
// TOUJOURS mettre le comparateur !
[10, 3, 42, 1].sort((a, b) => a - b); // croissant   → [1, 3, 10, 42]
[10, 3, 42, 1].sort((a, b) => b - a); // décroissant → [42, 10, 3, 1]
```

:::caution[Piège classique]
Sans comparateur, `.sort()` trie les éléments **comme du texte** :

```js
[10, 3, 42].sort(); // → [10, 3, 42]  FAUX ("10" < "3" < "42")
```
:::

## Strings avec accents

```js
["Été", "Automne", "Hiver"].sort((a, b) => a.localeCompare(b, "fr"));
```

## Objets

C'est le cas le plus fréquent, notamment en React.

```js
const users = [
  { name: "Zoé", age: 28 },
  { name: "Alice", age: 22 },
  { name: "Marc", age: 35 },
];

users.sort((a, b) => a.age - b.age);               // par âge croissant
users.sort((a, b) => a.name.localeCompare(b.name)); // par nom alphabétique
```

## sort vs toSorted

`.sort()` **modifie** le tableau original. `.toSorted()` renvoie une copie triée et laisse l'original intact, ce qui est utile en React.

```js
const original = [5, 2, 8];
const trie = original.toSorted((a, b) => a - b);
// original → [5, 2, 8] (inchangé)
// trie     → [2, 5, 8]
```

## Logique du comparateur

Pour `(a, b) => a - b` :

- résultat **négatif** → `a` reste avant `b`
- résultat **positif** → `b` passe avant `a`
- résultat **zéro** → l'ordre ne change pas
