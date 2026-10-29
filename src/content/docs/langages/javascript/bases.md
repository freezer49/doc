---
title: Les bases
description: Variables, types primitifs, truthy/falsy et opérateurs.
sidebar:
  order: 1
---

## Variables

- **const** → constante, non réassignable, portée bloc
- **let** → réassignable, portée bloc
- **var** → réassignable, portée fonction (à éviter)

```js
const obj = { a: 1 };
obj.a = 2;   // ✅ on peut modifier le contenu
obj = {};    // ❌ TypeError : on ne peut pas réassigner
```

## Types primitifs

| Type | Exemples |
| --- | --- |
| `string` | `"texte"`, `'texte'` |
| `number` | `42`, `3.14`, `NaN` |
| `boolean` | `true`, `false` |
| `undefined` | non défini (automatique) |
| `null` | vide intentionnel |

```js
typeof "hello"; // "string"
typeof null;    // "object" (bug historique)
```

## Falsy vs Truthy

- **Falsy** (vaut `false`) → `false`, `0`, `""`, `null`, `undefined`, `NaN`
- **Truthy** (vaut `true`) → tout le reste, y compris `"0"`, `[]`, `{}`

## Opérateurs

- **`==`** → comparaison faible (avec coercition)
- **`===`** → comparaison stricte (valeur ET type) ✅ à privilégier
- **`? :`** → ternaire : `condition ? siVrai : siFaux`
- **`??`** → nullish : `valeur ?? "défaut"` (si `null` ou `undefined`)

```js
"2" + 2; // "22" (concaténation)
"2" - 1; // 1    (conversion en nombre)
```
