---
title: Requêtes essentielles
description: SELECT, WHERE, ORDER BY, LIMIT, opérateurs, agrégation et ordre des clauses.
sidebar:
  order: 1
---

## L'ordre d'une requête

```sql
SELECT colonnes
FROM table
WHERE condition
GROUP BY colonne
HAVING condition_sur_groupe
ORDER BY colonne ASC | DESC
LIMIT nombre;
```

:::tip[Cet ordre est obligatoire]
`WHERE` vient toujours avant `ORDER BY`, qui vient avant `LIMIT`. `GROUP BY` et `HAVING` sont optionnels, mais quand ils sont là, ils se placent entre les deux.
:::

## Les mots-clés de base

| Mot-clé | Rôle | Exemple |
| --- | --- | --- |
| `SELECT` | choisir les colonnes à afficher | `SELECT bookname, author` |
| `*` | « toutes les colonnes » | `SELECT *` |
| `FROM` | indiquer la table source | `FROM books` |
| `WHERE` | filtrer selon une condition | `WHERE author = 'Virginia Woolf'` |
| `ORDER BY` | trier les résultats | `ORDER BY parution_date` |
| `ASC` | tri croissant (1, 2, 3…), par défaut | `ORDER BY parution_date ASC` |
| `DESC` | tri décroissant (3, 2, 1…) | `ORDER BY parution_date DESC` |
| `LIMIT` | limiter le nombre de résultats | `LIMIT 5` |

```sql
SELECT bookname, author
FROM books
WHERE author = 'Virginia Woolf'
ORDER BY parution_date DESC
LIMIT 5;
```

:::note
Les textes s'écrivent entre **apostrophes simples** : `'Virginia Woolf'`.
:::

## Opérateurs de comparaison (pour WHERE)

| Opérateur | Signification |
| --- | --- |
| `=` | égal à |
| `!=` ou `<>` | différent de |
| `>` | supérieur à |
| `<` | inférieur à |
| `>=` | supérieur ou égal |
| `<=` | inférieur ou égal |

:::caution[Piège : NULL]
Pour tester une valeur vide, on n'écrit pas `= NULL` mais `IS NULL` (ou `IS NOT NULL`).
:::

## Combiner des conditions

| Mot-clé | Rôle |
| --- | --- |
| `AND` | les deux conditions doivent être vraies |
| `OR` | au moins une condition doit être vraie |

```sql
WHERE author = 'Virginia Woolf' AND parution_date > '1925-01-01'
```

## Fonctions d'agrégation

| Fonction | Rôle |
| --- | --- |
| `COUNT(*)` | compter le nombre de lignes |
| `SUM()` | additionner des valeurs |
| `AVG()` | calculer la moyenne |
| `MIN()` | trouver la valeur minimum |
| `MAX()` | trouver la valeur maximum |

Avec `GROUP BY`, on calcule **par groupe** :

```sql
SELECT author, COUNT(*) AS nb_livres
FROM books
GROUP BY author;
```
