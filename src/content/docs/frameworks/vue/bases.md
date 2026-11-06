---
title: Les bases
description: Qu'est-ce que Vue, le fichier .vue et la syntaxe du template.
sidebar:
  order: 1
---

## Qu'est-ce que Vue ?

Vue est un framework JavaScript pour construire des interfaces. Il découpe l'écran en **composants** et met à jour automatiquement l'affichage quand les données changent. Vous écrivez *ce que l'écran doit montrer*, Vue s'occupe de *comment le mettre à jour*.

## Le fichier `.vue` (Single File Component)

Un composant tient dans un seul fichier à trois blocs :

```vue
<script setup lang="ts">
// logique : imports, données, fonctions
</script>

<template>
  <!-- affichage (HTML + directives Vue) -->
</template>

<style scoped>
/* style limité à ce composant */
</style>
```

- **`<script setup>`** : tout ce qui est déclaré au niveau racine est accessible dans le template. Pas besoin de `return` ni d'`export`.
- **`lang="ts"`** : active TypeScript dans le bloc.
- **`<template>`** : un seul élément racine était obligatoire en Vue 2. En Vue 3, plusieurs racines sont possibles (fragments), mais un seul élément englobant reste plus simple à lire.
- **`<style scoped>`** : le CSS ne s'applique qu'aux éléments de ce composant. Vue ajoute un identifiant unique aux balises pour l'isoler.

:::caution[Piège courant]
Sans `setup`, `<script lang="ts">` ne rend rien visible au template. Les variables restent dans le script.
:::

## Syntaxe du template

| Syntaxe | Rôle | Exemple |
|---|---|---|
| `{{ valeur }}` | Affiche une valeur (texte échappé) | `{{ dossier.client.prenom }}` |
| `:attribut="expr"` | Lie un attribut à une expression (raccourci de `v-bind`) | `:icon="mdiCheck"` |
| `@evenement="fn"` | Écoute un événement (raccourci de `v-on`) | `@click="ouvrir"` |
| `v-model="x"` | Liaison bidirectionnelle pour les champs de saisie | `<v-text-field v-model="nom" />` |

Dans le template, on n'écrit **pas** `.value` pour une `ref`. Dans le script, si.

Une expression peut être une valeur, un calcul simple, ou un appel de fonction. Une instruction (`if`, `for`) ne fonctionne pas directement, il faut une directive.
