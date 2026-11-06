---
title: Erreurs fréquentes et checklist
description: Mémo des erreurs classiques et checklist avant de valider un composant.
sidebar:
  order: 9
---

## Erreurs fréquentes

| Symptôme | Cause probable | Correction |
|---|---|---|
| Variable du script absente dans le template | `<script>` sans `setup` | Utiliser `<script setup>` |
| `Cannot redeclare block-scoped variable` | Même nom déclaré deux fois | Supprimer le doublon |
| `string \| undefined is not assignable` | Valeur optionnelle non gardée | Ajouter un `if` ou `??` |
| Texte qui ne se met pas à jour | Oubli de `ref` ou de `.value` dans le script | Utiliser `ref`, écrire `.value` dans le script |
| `//` affiché ou erreur au début du `.vue` | Commentaire JS hors bloc | Utiliser `<!-- -->` dans le template |
| Style qui ne s'applique pas à un bouton Vuetify | Style `scoped` ne traverse pas le composant | Utiliser `:deep(...)` |
| Liste qui se mélange au rechargement | `:key` absent ou basé sur l'index | Utiliser un identifiant unique |
| Couleur qui ne change pas en mode sombre | Couleur codée en dur | Passer par `rgb(var(--v-theme-…))` |
| Composant introuvable | Import oublié ou mauvais chemin | Vérifier l'import et l'alias `@` |

## Checklist avant de valider un composant

- [ ] Le fichier commence par `<script setup lang="ts">`.
- [ ] Chaque prop est typée avec `defineProps<{ ... }>()`.
- [ ] Aucune donnée n'est récupérée deux fois (un seul `toDossier` dans le parent).
- [ ] Les valeurs optionnelles sont gardées (`v-if`, `?.`, `??`).
- [ ] Aucune couleur en dur : tout passe par le thème.
- [ ] Les `v-for` ont un `:key` unique.
- [ ] Le composant ne modifie jamais une prop.
- [ ] La page est lisible en mobile (une colonne) et en desktop (deux colonnes).
- [ ] Le fichier a un commentaire d'une ligne en haut, en `<!-- -->`.

## Pour aller plus loin

- Vue 3 : `ref` vs `reactive`, `provide`/`inject`, `Teleport`, `Suspense`.
- Pinia : gestion d'état partagée entre plusieurs pages.
- Tests : Vitest pour la logique, Vue Test Utils pour les composants.
- Accessibilité : rôles ARIA, contraste des couleurs du thème, navigation au clavier.
- Documentation officielle : [vuejs.org](https://vuejs.org) et [vuetifyjs.com](https://vuetifyjs.com).
