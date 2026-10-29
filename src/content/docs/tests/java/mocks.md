---
title: Mocks avec Mockito
description: Remplacer une dépendance par un faux objet pour isoler le test.
sidebar:
  order: 2
---

## C'est quoi un mock ?

Un **mock** est un **faux objet** qui remplace un vrai. On simule son comportement au lieu d'utiliser le vrai.

```
Sans mock :  UserService → UserRepository → Base de données
Avec mock :  UserService → faux UserRepository (mock)
```

:::tip[Analogie]
Tu veux tester **le bouton** d'une machine à café, sans brancher l'électricité, mettre du café ni attendre. Le mock, c'est une fausse machine qui répond exactement ce que tu veux.
:::

## Pourquoi ?

| Sans mock | Avec mock |
| --- | --- |
| dépend de la BDD, du réseau, d'autres classes | tu contrôles tout |
| lent ❌ | rapide ✅ |
| instable ❌ | fiable ✅ |

## Pas à pas

On utilise la librairie **Mockito** avec **JUnit**. Objectif : tester `UserService` (voir [Test unitaire](../test-unitaire/)).

**1. Créer un mock** → un faux `UserRepository`

```java
UserRepository userRepository = mock(UserRepository.class);
```

**2. Définir son comportement** → « quand on appelle `findById(1)`, retourne Alice »

```java
when(userRepository.findById(1)).thenReturn(new User(1, "Alice"));
```

**3. Injecter le mock** dans la classe testée

```java
UserService userService = new UserService(userRepository);
```

**4. Tester**

```java
User user = userService.getUser(1);
assertEquals("Alice", user.getName());
```

## Exemple complet

```java
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class UserServiceTest {

    @Test
    void testGetUser() {
        // 1. mock
        UserRepository userRepository = mock(UserRepository.class);
        // 2. comportement
        when(userRepository.findById(1)).thenReturn(new User(1, "Alice"));
        // 3. injection
        UserService userService = new UserService(userRepository);

        // 4. test
        User user = userService.getUser(1);
        assertEquals("Alice", user.getName());
    }
}
```

Pour écrire moins de code, voir [@Mock et @InjectMocks](../mock-injectmocks/).

## Vérifier les appels

Un mock sert aussi à vérifier **les interactions** :

```java
verify(userRepository).findById(1);              // appelée exactement 1 fois
verify(userRepository, times(2)).findById(1);    // appelée 2 fois
verify(userRepository, never()).findById(2);     // jamais appelée
```

## À retenir

Un mock :

- ne fait **rien de réel**
- fait **exactement ce que tu lui dis**
- sert à **isoler ton test**

:::caution[Erreurs classiques]
- Tester plusieurs classes en même temps
- Ne pas mocker les dépendances
- Croire que le mock « fait vraiment le travail » : non, tout est simulé
:::
