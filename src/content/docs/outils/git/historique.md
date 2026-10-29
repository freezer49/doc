---
title: Historique et annulation
description: Annuler des modifications, mettre de côté, se déplacer dans les commits, copier, taguer.
sidebar:
  order: 5
---

## Annuler des modifications (pas encore commitées)

```sh
git restore script.js           # Annule les modifs d'un fichier
git restore .                   # Annule tout
git restore --staged script.js  # Retire du staging (garde les modifs)
```

:::danger
`git restore <fichier>` efface tes modifications non commitées : elles ne sont pas récupérables.
:::

## Mettre de côté : git stash

```sh
git stash        # Met de côté le travail en cours
git stash list   # Voir la liste
git stash pop    # Restaurer
```

**Scénario** : tu bosses sur une feature → bug urgent → `git stash` → tu corriges → `git stash pop`.

## Annuler un commit

| Commande | Effet |
| --- | --- |
| `git reset HEAD~1` | recule la branche d'un commit. Le commit disparaît de la branche, mais ses modifications restent dans les fichiers |
| `git revert <hash>` | crée un **nouveau** commit qui annule les modifications de `<hash>` : l'historique est conservé |
| `git commit --amend` | corrige le dernier commit (voir [Commandes de base](../commandes-base/#préparer-et-valider)) |

:::tip[reset ou revert ?]
- En **local** (pas encore pushé) → `reset`
- Sur une branche **partagée** → `revert`, qui ne réécrit pas l'historique
:::

## Se déplacer dans l'historique

| Commande | Effet |
| --- | --- |
| `git checkout <ref>^` | se place sur le commit **parent** |
| `git checkout <ref>~3` | remonte de 3 commits d'un coup |

`<ref>` peut être un nom de branche, un hash ou `HEAD` (le commit où l'on se trouve).

## Copier et réorganiser des commits

| Commande | Effet |
| --- | --- |
| `git cherry-pick <hash>` | copie un commit précis à la suite de la branche courante |
| `git cherry-pick <c1> <c2> …` | idem avec plusieurs commits |
| `git rebase -i HEAD~3` | ouvre un éditeur pour réordonner, renommer, fusionner ou supprimer les 3 derniers commits (ex. `c1 c2 c3` → `c2 c3 c1`) |

## Tags

| Commande | Effet |
| --- | --- |
| `git tag <nom> <commit>` | pose une étiquette fixe sur un commit (ex. `v1.0`) pour s'y référer |
| `git describe <ref>` | situe `<ref>` (`HEAD` par défaut) par rapport au tag le plus proche |

Format de la réponse de `describe` : `<tag>-<nbCommits>-g<hash>`, par exemple `v1.0-2-g6fddbf5` (2 commits après `v1.0`).

## Trouver un bug

**`git bisect`** → recherche par dichotomie le commit qui a introduit un bug : on indique un commit « bon » et un « mauvais », et Git te fait tester les commits intermédiaires.

```sh
git bisect start
git bisect bad            # le commit actuel a le bug
git bisect good <commit>  # ce commit-là fonctionnait
# … tester, puis répondre good / bad jusqu'à trouver le coupable
git bisect reset
```
