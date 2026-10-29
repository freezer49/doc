---
title: Workflow et règles d'or
description: Le workflow Git du quotidien, les règles d'or, les messages de commit et les pull requests.
sidebar:
  order: 2
---

## Workflow standard

```sh
git status                          # Où j'en suis ?
git switch -c fix/mon-bug           # Créer une branche et y aller
# ... coder ...
git status                          # Vérifier
git diff                            # Relire
git add .                           # Ajouter
git commit -m "fix: description"    # Valider
git push -u origin fix/mon-bug      # Publier
```

Ensuite, on ouvre une **pull request** sur GitHub.

## Règles d'or

1. ⚠️ **Ne jamais travailler sur `main`** → toujours créer une branche
2. 🔍 **`git status` avant tout** → commit, switch, merge…
3. 📝 **Des messages clairs** → ton futur toi te remerciera
4. 👀 **`git diff` avant de commiter** → relis tes changements
5. 🚫 **Pas de `--amend` après un push** → sauf sur une branche perso

## Un bon message de commit

```sh
git commit -m "fix: correct decrement button"
```

- **Type** : `feat:` (nouvelle fonctionnalité), `fix:` (correction), `docs:` (documentation), `chore:` (maintenance)
- **Description concise** : que fait ce commit ?
- **À éviter** : « update », « fix bug » (trop vague)

## Pull request (GitHub)

Ce n'est **pas une commande Git**, mais une fonctionnalité de GitHub : on demande à fusionner sa branche dans `main`, ce qui permet une relecture avant.

Une bonne PR contient :

- ✅ ce que j'ai fait
- ✅ pourquoi
- ✅ comment tester

:::tip
Tu n'as pas à tout retenir. Sache **où chercher** et **quoi utiliser**.
:::
