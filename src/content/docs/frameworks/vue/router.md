---
title: Vue Router
description: Associer une URL à une page, router-view et router-link.
sidebar:
  order: 6
---

Le routeur associe une URL à une page.

```ts
// router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import AccueilPage from '@/views/AccueilPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'accueil', component: AccueilPage },
    { path: '/avocat', name: 'avocat', component: () => import('@/views/AvocatPage.vue') },
  ],
})

export default router
```

- `<router-view />` : emplacement où la page courante s'affiche (souvent dans un layout).
- `<router-link to="/avocat">` : lien sans rechargement de page. Dans notre cas, le `href="#"` des cartes deviendrait un `router-link`.
- `component: () => import(...)` : chargement paresseux, la page n'est téléchargée qu'à la première visite.
- `useRoute()` lit les paramètres d'URL, `useRouter()` permet de naviguer par code (`router.push('/')`).
