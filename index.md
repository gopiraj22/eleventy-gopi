# SmartPage Design Doc

## Login Enhancement Use Case
### PlantUML
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
<pre>
...work in progress


</pre>


## How did this work?
### Check here  [Eleventy 11ty Installation](./install11t)