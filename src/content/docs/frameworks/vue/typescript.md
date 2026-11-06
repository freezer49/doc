---
title: TypeScript avec Vue
description: Les notions TypeScript utiles au quotidien dans un projet Vue.
sidebar:
  order: 7
---

| Concept | Exemple | Quand |
|---|---|---|
| `interface` / `type` | `interface Dossier { ... }` | Décrire la forme d'un objet |
| Union | `'avenir' \| 'passe' \| 'annule'` | Une valeur parmi plusieurs |
| `Record<K, V>` | `Record<ModaliteRendezVous, string>` | Table de correspondance |
| Optionnel | `telephone?: string` | Champ parfois absent (`string \| undefined`) |
| Accès sécurisé | `rdv.value?.date` | Peut être `undefined` |
| Garde | `if (!valeur) return ''` | Avant un usage qui refuse `undefined` |
| Type générique | `ref<Dossier \| null>(null)` | Préciser le type d'une `ref` vide au départ |

:::caution[Erreur fréquente]
`Argument of type 'string | undefined' is not assignable` : la solution est presque toujours une garde (`if`, `v-if`, `??`) ou un type qui accepte `undefined`.
:::
