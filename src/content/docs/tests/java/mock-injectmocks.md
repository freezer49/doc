---
title: "@Mock et @InjectMocks"
description: Les annotations Mockito qui créent et injectent les mocks automatiquement.
sidebar:
  order: 3
---

## Le problème

À la main, c'est répétitif, surtout avec plusieurs dépendances :

```java
UserRepository userRepository = mock(UserRepository.class);
UserService userService = new UserService(userRepository);
```

## @Mock → crée un faux objet

```java
@Mock
private UserRepository userRepository;
```

Signifie : « crée-moi un mock de `UserRepository` ».

:::caution[Initialisation obligatoire]
Les annotations ne fonctionnent que si Mockito est activé sur la classe de test :

```java
@ExtendWith(MockitoExtension.class)
```
:::

## @InjectMocks → crée la classe testée et y injecte les mocks

```java
@InjectMocks
private UserService userService;
```

Mockito :

1. crée un objet `UserService`
2. regarde son constructeur
3. y passe les mocks correspondants (« j'ai un mock `UserRepository` → je l'injecte »)

## Exemple complet

```java
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class UserServiceTest {

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private UserService userService;

    @Test
    void testGetUser() {
        when(userRepository.findById(1)).thenReturn(new User(1, "Alice"));

        User user = userService.getUser(1);

        assertEquals("Alice", user.getName());
    }
}
```

## Ce que Mockito fait en coulisses

```java
// Tu écris :
@Mock        UserRepository repo;
@InjectMocks UserService service;

// Mockito fait :
repo = mock(UserRepository.class);
service = new UserService(repo);
```

## Résumé

| Annotation | Rôle | Image mentale |
| --- | --- | --- |
| `@Mock` | crée un faux objet | 🎭 les acteurs |
| `@InjectMocks` | crée l'objet à tester + injecte les mocks | 🎬 le réalisateur |

En règle générale : les **dépendances** → `@Mock`, la **classe testée** → `@InjectMocks`.

## Pièges fréquents

:::caution
- **Oublier `@ExtendWith(MockitoExtension.class)`** → les champs restent `null` → `NullPointerException`.
- **Croire que `@InjectMocks` crée des mocks** → non, il utilise ceux déclarés avec `@Mock`.
- **Injection ratée** → Mockito essaie le constructeur, puis les setters, puis les champs. S'il n'y arrive pas, il **ne signale pas d'erreur** : la dépendance reste `null`. Privilégie l'injection par constructeur (bonne pratique).
- **`when(...)` inutilisé** → avec `MockitoExtension`, un comportement défini mais jamais appelé fait échouer le test (`UnnecessaryStubbingException`). Supprime les `when` dont le test n'a pas besoin.
:::
