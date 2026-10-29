---
title: Commandes de base
description: init, clone, status, log, diff, add, commit, push, pull…
sidebar:
  order: 3
---

## Envoyer ses modifications sur GitHub (version rapide)

Se placer d'abord **dans le dossier cloné** depuis GitHub, puis :

```sh
git add .                          # ou git add <nom_fichier>
git commit -m "description du changement"
git push
```

Pour travailler proprement sur une branche, voir le [workflow standard](../workflow/).

## Démarrer

| Commande | Effet |
| --- | --- |
| `git init` | crée un nouveau dépôt Git dans le dossier courant |
| `git clone <url>` | copie un dépôt distant en local |

## Observer

### git status

**Ton meilleur ami : utilise-le tout le temps.** Il affiche :

- les fichiers modifiés
- les fichiers dans la zone de staging (prêts à être commités)
- la branche actuelle
- l'état de synchronisation avec le distant

### git log

```sh
git log                        # Historique complet : commits, auteurs, hash
git log --oneline              # Version compacte
git log --oneline --graph      # Avec visualisation des branches
git log --oneline --all        # Toutes les branches
```

### git show

```sh
git show 368be09               # Ce qui a changé exactement dans ce commit
```

### git diff

```sh
git diff                       # Tes modifs (pas encore ajoutées) vs dernier commit
git diff main feature          # Entre deux branches
git diff <hash1> <hash2>       # Entre deux commits
```

## Préparer et valider

| Commande | Effet |
| --- | --- |
| `git add <fichier>` | ajoute le fichier à la zone de staging (l'index) |
| `git add .` | ajoute tous les fichiers modifiés du dossier courant |
| `git commit -m "message"` | crée un point dans l'historique avec un message (voir [un bon message de commit](../workflow/#un-bon-message-de-commit)) |
| `git commit --amend -m "nouveau message"` | remplace le dernier commit (pour corriger son message ou y ajouter un oubli) |

:::caution
- Vérifie toujours avec `git status` ce que tu ajoutes.
- `git commit --amend` change le hash du commit : uniquement **avant le push**, ou sur une branche perso.
:::

## Synchroniser avec le dépôt distant

| Commande | Effet |
| --- | --- |
| `git push -u origin <branche>` | premier push d'une branche : la publie et la lie à sa version distante |
| `git push` | pushs suivants : envoie les commits locaux vers le dépôt distant |
| `git fetch` | télécharge les nouveaux commits du distant **sans modifier** nos fichiers |
| `git pull` | télécharge **et fusionne** les commits du distant (= `fetch` + `merge`) |
| `git pull origin main` | idem, en précisant le distant (`origin`) et la branche |
