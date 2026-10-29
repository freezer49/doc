---
title: Test unitaire
description: Vérifier qu'une petite partie du code fonctionne, isolée du reste.
sidebar:
  order: 1
---

Un **test unitaire** vérifie qu'une **petite partie du code fonctionne correctement**, le plus souvent une méthode, **isolée du reste**.

## Exemple

Le code à tester :

```java
public class Calculatrice {
    public int addition(int a, int b) {
        return a + b;
    }
}
```

Le test, avec JUnit 5 :

```java
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

class CalculatriceTest {

    @Test
    void testAddition() {
        Calculatrice calc = new Calculatrice();
        assertEquals(5, calc.addition(2, 3)); // (attendu, obtenu)
    }
}
```

Ici, on teste **une seule méthode**.

:::tip
Dans `assertEquals`, la valeur **attendue** vient en premier et la valeur **obtenue** en second. Si tu les inverses, le message d'erreur sera trompeur.
:::

## Le vrai problème : les dépendances

Dans la vraie vie, une classe ne vit pas seule :

```java
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User getUser(int id) {
        return userRepository.findById(id);
    }
}
```

- `UserService` dépend de `UserRepository`
- `UserRepository` parle souvent à une **base de données**

On ne veut **pas** tester la base de données, seulement `UserService`. C'est à ça que servent les [mocks](../mocks/).
