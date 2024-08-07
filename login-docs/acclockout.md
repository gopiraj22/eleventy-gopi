# Account Lockout Flow

<br><br>

## Location

<b>LockoutUtils. allowAttempt()</b>

<br><br>

## Enhancement

### Activity Diagram

<br><br><br>

```plantuml
skinparam activityFontSize 12
skinparam activityDiamondFontSize 13
skinparam activityArrowFontSize 13

(*)
if (is-acc-hard-locked?) then (yes         )
  #pink/white: Response.setError: 
  "Please contact the admin...";
  stop;

else (      no)
if (is-acc-soft-locked?) then (   yes)
:user-waited = (current-time - lockout-wait-starttime)
total-wait-time-req = login-lockout-delay * soft-lock-count ;
if(    Is User to Wait more?
(user-waited < total-wait-time-req)) then (yes     )
#pink/white: Response.setError:
"Please wait for another << (total-wait-time-req -- user-waited)>> secs...;
stop
else (    no)
:Reset all user login specific configs.
successive-login-failures = 0
is-acc-soft-locked = N
is-acc-hard-locked = N
lockout-wait-starttime = 0

    (except soft-lock-count);

endif
#orange/white:
call credentials-check>

else (                            no)
#orange/white:
call credentials-check>

endif
endif
:Continue with the Login process...;
stop

partition #orange/white credentials-check {
if( Correct Credentials?) then (  yes      )  
:Reset all user login specific configs.
successive-login-failures = 0
is-acc-soft-locked = N
is-acc-hard-locked = N
lockout-wait-starttime = 0
soft-lock-count = 0;
else (  no)
:successive-login-failures++;
if (                Softlock Threshold met?
(successive-login-failures >= login-successive-fail-threshold)) then (yes  )
:soft-lock-count++
is-acc-soft-locked = true;
 if(                Hardlock Threshold met?
 (soft-lock-count >=  login-successive-softlock-threshold)) then (  yes)
 : Set Hardlock
 (is-acc-hard-locked = true);
 else(  no)
 endif;
else (     no)
endif
#pink/white: Response.setError:
"Please try again...";

endif

}

```

<br><br>

