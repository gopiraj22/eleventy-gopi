# SmartPage Design Documentation

<br></br>

## Login Enhancements

## Use Case Diagram

```plantuml
actor NativeUser #Red/Yellow
(Login) as (loginuc) 
(Account Lockout) as (lockoutuc) #orange
(Display Password Strength) as (strengthuc) #yellow
(App Configuration) as (configuc) #orange

NativeUser --> (loginuc)

(loginuc) .>(lockoutuc) <<include>>
(loginuc) .>(strengthuc) <<include>>

(lockoutuc) .> (configuc)
```

<br></br>

## Password Strength

[Password Strength](./login-docs/displaystrength)

<br></br>

## App Configuration

[App Configuration Design](./login-docs/appconfig)

<br></br>

## Account Lockout

[Account Lockout](./login-docs/acclockout)
<br></br>

