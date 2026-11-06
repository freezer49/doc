---
title: Grille et breakpoints
description: v-container, v-row, v-col et points de rupture responsive.
sidebar:
  order: 2
---

## Grille

```vue
<v-container>
  <v-row>
    <v-col cols="12" md="6">Gauche</v-col>
    <v-col cols="12" md="6">Droite</v-col>
  </v-row>
</v-container>
```

- `v-container` : centre le contenu avec une largeur maximale. `fluid` retire cette limite.
- `v-row` : ligne. `v-col` : colonne sur 12 unités.
- `cols="12"` : toute la largeur par défaut. `md="6"` : moitié à partir de 960 px.

## Breakpoints

| Nom | Largeur minimale |
|---|---|
| `xs` | 0 (mobile) |
| `sm` | 600 px |
| `md` | 960 px |
| `lg` | 1280 px |
| `xl` | 1920 px |

Les classes utilitaires se suffixent : `pa-md-14`, `d-none d-md-block`, `flex-column flex-md-row`. Elles s'appliquent à partir du breakpoint indiqué.
