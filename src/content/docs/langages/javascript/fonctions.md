---
title: Fonctions
description: Déclaration, expression, arrow function, paramètres et return.
sidebar:
  order: 2
---

## Function declaration

Hoistée : on peut l'appeler avant sa définition.

```js
function somme(a, b) {
  return a + b;
}
```

## Function expression

Non hoistée.

```js
const somme = function (a, b) {
  return a + b;
};
```

## Arrow function

```js
const somme = (a, b) => a + b;
const double = x => x * 2;
const direBonjour = () => {
  return "hello"; // avec des {} → return obligatoire
};
```

## Paramètres vs arguments

- **Paramètres** → dans la déclaration : `function somme(a, b)`
- **Arguments** → à l'appel : `somme(2, 3)`

:::note
Sans `return`, une fonction renvoie `undefined`.
:::
