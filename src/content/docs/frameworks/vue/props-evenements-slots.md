---
title: Props, événements et slots
description: Faire communiquer un parent et un enfant.
sidebar:
  order: 4
---

## Props : donner des données à un enfant

```ts
// CarteRendezVous.vue
const props = defineProps<{ dossier: Dossier }>()
```

```vue
<!-- AccueilPage.vue -->
<CarteRendezVous :dossier="dossier" />
```

- Le flux va **du parent vers l'enfant**.
- Un enfant ne doit **jamais** modifier une prop directement. Si besoin, il émet un événement.
- Props optionnelles avec valeur par défaut :

```ts
const props = withDefaults(defineProps<{ taille?: number }>(), { taille: 24 })
```

## Émettre un événement : remonter une information

```ts
const emit = defineEmits<{ annuler: [id: string] }>()

function onAnnuler() {
  emit('annuler', dossier.id)
}
```

```vue
<CarteRendezVous :dossier="dossier" @annuler="traiterAnnulation" />
```

## `v-model` sur un composant

`v-model` n'est qu'un raccourci pour une prop `modelValue` et un événement `update:modelValue`. Utile pour un composant de saisie personnalisé.

## Slots : injecter du contenu dans un composant

Un slot permet au parent de fournir du HTML à l'enfant.

```vue
<!-- Carte.vue -->
<v-card>
  <slot name="titre" />
  <slot />              <!-- contenu par défaut -->
</v-card>
```

```vue
<Carte>
  <template #titre><h4>Mon avocat</h4></template>
  <p>Contenu</p>
</Carte>
```

Utile pour des cartes génériques : le même squelette, un contenu différent.
