---
title: Nommer et typer les colonnes
description: Conventions de noms de colonnes et choix des types de données (dont MySQL).
sidebar:
  order: 2
---

## Les noms de colonnes

| Concept | Nom habituel |
| --- | --- |
| Identifiant unique | `id` |
| Nom d'utilisateur | `username` |
| Adresse mail | `email` |
| Mot de passe | `password_hash` |
| Date de création | `created_at` |
| Date de modification | `updated_at` |
| Référence à une autre table | `<table>_id` (ex. `user_id`) |
| Actif ou non | `is_active` |
| Titre | `title` ou `name` |

**Comment trouver le bon nom ?** Pose-toi la question : « Qu'est-ce que cette colonne stocke exactement ? », puis traduis-le en anglais de façon concise.

:::caution[Mots de passe]
On ne stocke **jamais** un mot de passe en clair : on stocke son **hash** (avec bcrypt ou argon2, par exemple). D'où le nom `password_hash`, qui le rappelle.
:::

## Les types de données

| Tu veux stocker… | Type à utiliser |
| --- | --- |
| un identifiant auto-incrémenté | `INTEGER` + clé primaire (voir ci-dessous) |
| du texte court (nom, email…) | `VARCHAR(255)` |
| du texte long (description, bio…) | `TEXT` |
| un nombre entier | `INTEGER` |
| un nombre à virgule **exact** (prix, argent) | `DECIMAL(10, 2)` |
| un nombre à virgule approximatif (mesures, calculs) | `FLOAT` |
| vrai / faux | `BOOLEAN` |
| une date + heure | `TIMESTAMP` |
| juste une date | `DATE` |

:::caution[Argent → DECIMAL]
`FLOAT` arrondit (`0.1 + 0.2` ≠ `0.3`). Pour des prix, utilise `DECIMAL`.
:::

### L'identifiant auto-incrémenté

```sql
-- MySQL
id INT AUTO_INCREMENT PRIMARY KEY

-- PostgreSQL
id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY
```

## Spécificités MySQL

| Type | Description |
| --- | --- |
| `INT` | nombre entier (32 bits), `SIGNED` (avec négatifs) ou `UNSIGNED` (positifs uniquement) |
| `SMALLINT` / `BIGINT` | entiers plus petits (16 bits) ou plus grands (64 bits) |
| `FLOAT` / `DOUBLE` | nombres à virgule flottante (approximatifs) |
| `CHAR(size)` | texte de longueur **fixe** |
| `VARCHAR(size)` | texte de longueur **variable**, avec une limite |
| `TEXT` | texte long (jusqu'à 64 Ko ; `MEDIUMTEXT` / `LONGTEXT` pour plus) |
| `DATETIME` | date + heure au format `YYYY-MM-DD hh:mm:ss`, stockée telle quelle |
| `TIMESTAMP` | date + heure stockée en UTC et convertie selon le fuseau horaire ; limitée aux années 1970 à 2038 |

## Exemple complet

```sql
CREATE TABLE users (
  id            INT AUTO_INCREMENT PRIMARY KEY,
  username      VARCHAR(50)  NOT NULL UNIQUE,
  email         VARCHAR(255) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  is_active     BOOLEAN      DEFAULT TRUE,
  created_at    TIMESTAMP    DEFAULT CURRENT_TIMESTAMP
);
```

:::tip
Pour dessiner tes tables et leurs relations avant de les coder, utilise [DrawSQL](https://drawsql.app/) (voir [Sites utilitaires](../../../ressources/utilitaires/#bases-de-données)).
:::
