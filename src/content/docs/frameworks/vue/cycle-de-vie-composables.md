---
title: Cycle de vie et composables
description: onMounted, chargement de données et logique réutilisable useXxx.
sidebar:
  order: 5
---

## Cycle de vie

| Hook | Quand | Usage typique |
|---|---|---|
| `onMounted` | Après l'affichage | Appel API, initialisation d'une librairie |
| `onUnmounted` | Avant la destruction | Nettoyer un écouteur, un timer |
| `onUpdated` | Après une mise à jour du DOM | Rare |

```ts
import { onMounted, ref } from 'vue'

const chargement = ref(true)
onMounted(async () => {
  dossier.value = await dossierGateway.getDossier('courant')
  chargement.value = false
})
```

:::tip[Schéma à connaître par cœur]
Pour tout chargement de données : état de chargement, puis erreur, puis données.
:::

```vue
<v-progress-circular v-if="chargement" indeterminate />
<v-alert v-else-if="erreur" type="error">Impossible de charger.</v-alert>
<CarteRendezVous v-else :dossier="dossier" />
```

## Composables

Un composable est une fonction qui réutilise de la logique réactive. Convention : nom en `useXxx`.

```ts
// composables/useDossierCourant.ts
export function useDossierCourant() {
  const dossier = ref<Dossier | null>(null)
  const chargement = ref(true)
  const erreur = ref<unknown>(null)

  onMounted(async () => {
    try {
      dossier.value = await dossierGateway.getDossier(DOSSIER_COURANT_ID)
    } catch (e) {
      erreur.value = e
    } finally {
      chargement.value = false
    }
  })

  return { dossier, chargement, erreur }
}
```

Utilisation :

```ts
const { dossier, chargement, erreur } = useDossierCourant()
```

**Règle** : un composant affiche, un composable porte la logique réutilisable.
