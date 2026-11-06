---
title: Les bases
description: Installation, préfixe v-, surfaces, boutons, chips et icônes.
sidebar:
  order: 1
---

## Installation et plugin

Vuetify s'installe comme plugin Vue. Le fichier `plugins/vuetify.ts` configure le thème.

```ts
import { createVuetify } from 'vuetify'
import { light, dark } from '@/theme'

export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: { light, dark },
  },
})
```

## Composants et préfixe

Tous les composants commencent par `v-` : `v-btn`, `v-card`, `v-chip`, `v-icon`. Ils s'écrivent en kebab-case dans le template, mais `VBtn` fonctionne aussi.

## Surfaces : `v-card`, `v-sheet`

- `v-sheet` : surface simple, sans ombre par défaut.
- `v-card` : surface avec ombre (`elevation`, de 0 à 24) et coins arrondis.
- `rounded` : `sm`, `md`, `lg`, `xl`, `pill`, ou `false`.
- `elevation="0"` retire l'ombre. Vous pouvez la remplacer par un `box-shadow` personnalisé, avec une couleur du thème.

## Boutons, chips, icônes

```vue
<v-btn color="rdv" size="large">Modifier</v-btn>
<v-btn color="error" variant="outlined">Annuler</v-btn>
<v-chip color="success" variant="flat" :prepend-icon="mdiCheck">Confirmé</v-chip>
<v-icon :icon="mdiScaleBalance" color="rdv" size="20" />
```

- `variant` : `flat`, `outlined`, `text`, `tonal`, `elevated`, `plain`.
- `color` : un nom du thème (`rdv`, `error`, `success`…), ou une couleur CSS.
- Icônes : `@mdi/js` exporte chaque icône comme constante (`mdiCheck`). On l'importe une par une, puis on la passe à `:icon`.
