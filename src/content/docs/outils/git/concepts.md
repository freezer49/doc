---
title: Concepts
description: Dépôt, commit, push et branches expliqués simplement.
sidebar:
  order: 1
---

## Le dépôt (repo)

Un dépôt Git (*repository*, ou *repo*) est un dossier contenant des fichiers dont Git suit l'historique. On interagit avec ces fichiers grâce à plusieurs fonctionnalités : **commit**, **push**, **branch**…

## Commit puis push

Pour envoyer ses fichiers vers le dépôt en ligne (GitHub), il faut d'abord **commit** pour enregistrer les modifications localement, puis **push** pour les envoyer.

:::tip[Métaphore]
On **charge** le pistolet (commit) avant de **tirer** (push) : on prépare l'info, puis on l'envoie dans le dépôt distant.
:::

## Les branches

Une branche permet de travailler sur une copie du projet **sans toucher à la version de base** : pour essayer une idée de son côté, tester d'autres solutions, puis fusionner si ça marche.

```
main ──●──●──●──────●   (branche principale)
             \     /
feature       ●──●      (branche de travail)
```

:::note
`main` est le nouveau nom par défaut de la branche principale. Les anciens projets utilisent encore `master`.
:::

## Le hash

Chaque commit a un **hash** : un identifiant unique (ex. `6fddbf5`) qu'on utilise pour désigner ce commit dans les commandes.
