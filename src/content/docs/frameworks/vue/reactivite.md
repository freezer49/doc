---
title: Réactivité
description: ref, reactive, computed et watch.
sidebar:
  order: 3
---

## `ref`

Pour une valeur simple qui peut changer.

```ts
import { ref } from 'vue'
const ouvert = ref(false)

function basculer() {
  ouvert.value = !ouvert.value   // .value dans le script
}
```

Dans le template : `{{ ouvert }}` (Vue déballe la valeur).

## `reactive`

Pour un objet dont on modifie plusieurs champs. Moins utilisé en Vue 3 récent, car `ref` suffit souvent.

```ts
import { reactive } from 'vue'
const formulaire = reactive({ nom: '', email: '' })
formulaire.nom = 'Camille'    // pas de .value
```

## `computed`

Valeur dérivée d'autres données. Recalculée uniquement quand ses dépendances changent, et mise en cache.

```ts
import { computed } from 'vue'
const nomComplet = computed(() => `${avocat.prenom} ${avocat.nom}`)
```

- Dans le script : `nomComplet.value`.
- Dans le template : `{{ nomComplet }}`.
- Un `computed` ne doit **jamais** modifier une donnée. Il ne sert qu'à calculer.

## `const` simple ou `computed` ?

- Donnée fixe, qui ne dépend d'aucune `ref` : `const nom = dossier.avocat.nom`.
- Donnée qui dépend d'une `ref` ou d'une prop qui change : `computed`.
- Dans notre cas, `dossier` est passé une fois, donc `const` suffit pour la plupart des valeurs. Un `computed` devient utile dès qu'on calcule à partir de données réactives.

## `watch`

Exécute du code quand une valeur change. À utiliser pour un effet de bord (appel API, sauvegarde), pas pour un simple affichage.

```ts
import { watch } from 'vue'
watch(() => props.dossierId, (nouvelId) => chargerDossier(nouvelId))
```
