# SmartPage Design Doc

## Login Enhancement Use Case

```plantuml
(Login) as (loginuc)
(Account Lockout) as (lockoutuc)
(Display Password Strength) as (strengthuc)
(App Configuration) as (configuc)

SPUserNative --> (loginuc)

(loginuc) .>(lockoutuc) <<include>>
(loginuc) .>(strengthuc) <<include>>

(lockoutuc) .> (configuc)
```

## How does this work?
[Eleventy Installation](./install11t)