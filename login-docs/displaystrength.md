# Display Password Strength

### Sequence Diagram

```plantuml
box <<UI-Front>> #lightgreen
UserPasswordDialog -> UserPasswordDialog ++:onKeyUp(event)
participant zxcvbnr_JS_library #pink
UserPasswordDialog -> zxcvbnr_JS_library:zxcvbnr(password)
UserPasswordDialog <-- zxcvbnr_JS_library: result
note right
score (1-5)
fedback-warning             
feedback-suggestions
end note
end box

box <<SERVER-SIDE>> #lightblue
participant WebpageServiceImpl #orange
UserPasswordDialog -> WebpageServiceImpl:checkPasswordEligibility(pasword)
participant PasswordRuleHandler #orange
WebpageServiceImpl -> PasswordRuleHandler ++:checkRules(password)
PasswordRuleHandler -> PasswordRuleHandler:checkLowerCase(password)
PasswordRuleHandler -> PasswordRuleHandler:checkUpperCase(password)
PasswordRuleHandler -> PasswordRuleHandler:checkNumeric(password)
PasswordRuleHandler -> PasswordRuleHandler:checkLength(password)
WebpageServiceImpl <-- PasswordRuleHandler : HashMap
note right
password_length_met          : true
password_lowercase_met    : false
password_uppercase_met    : true
password_numeric_met       : true
end note
end box

UserPasswordDialog <-- WebpageServiceImpl : HashMap


UserPasswordDialog -> UserPasswordDialog:displayPasswordCompliance(result, HashMap)
```
