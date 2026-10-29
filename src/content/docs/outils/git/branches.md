---
title: Branches
description: Créer, changer, comparer, fusionner des branches et résoudre les conflits.
sidebar:
  order: 4
---

## Lister

```sh
git branch           # Branches locales
git branch -a        # + branches distantes
```

## Créer et changer de branche

| Commande | Effet |
| --- | --- |
| `git switch <nom>` | se place sur la branche |
| `git switch -c <nom>` | crée la branche **et** se place dessus |
| `git branch <nom>` | crée une branche (sans y aller) |
| `git branch -d <nom>` | supprime la branche |

:::tip[Ancienne syntaxe]
`git checkout <nom>` et `git checkout -b <nom>` font la même chose que `switch`. Tu les croiseras souvent dans les tutos.
:::

## Comparer

```sh
git diff main feature   # différences entre les deux branches
```

## Fusionner : merge vs rebase

**`git merge <nom>`** → fusionne la branche `<nom>` dans la branche courante (crée un commit de fusion).

```sh
git switch main
git merge feature/dark-mode
```

**`git rebase <nom>`** → rejoue les commits de la branche courante **par-dessus** `<nom>`. L'historique reste linéaire.

**`git rebase <base> <branche>`** → rejoue `<branche>` par-dessus `<base>` (raccourci pour se placer sur `<branche>` puis faire `git rebase <base>`).

```
Avant :            main ──A──B
                           \
                   feature  C──D

merge :            main ──A──B──────M
                           \       /
                            C──D──

rebase :           main ──A──B──C'──D'
```

:::caution
Ne rebase pas une branche déjà pushée et partagée : ça réécrit son historique.
:::

## Résoudre un conflit

Quand deux branches modifient les mêmes lignes, Git marque le conflit dans le fichier :

```
<<<<<<< HEAD
ta version
=======
autre version
>>>>>>> feature/dark-mode
```

**3 étapes :**

1. Modifier le fichier (choisir quoi garder)
2. Supprimer les marqueurs `<<<<<<<`, `=======`, `>>>>>>>`
3. `git add` puis `git commit`

## Déplacer une branche

| Commande | Effet |
| --- | --- |
| `git branch -f <branche> <cible>` | déplace `<branche>` sur `<cible>` (un commit, une autre branche…) |
| `git branch -f <branche> <autre>~3` | déplace `<branche>` 3 commits avant `<autre>` |
