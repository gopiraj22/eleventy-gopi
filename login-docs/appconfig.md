# Configurable Items

## System wide
<span style="font-size:1.5em;">Table: <b>app_configuration</b></span>

<pre style="font-size: 15px">
  login-successive-fail-threshold         (eg. 5 failures before a softlock occurs)
  login-successive-softlock-threshold     (eg. 3 softlocks before a hardlock occurs)
  login-lockout-delay                     (eg. 300s before the next login attempt)
  login-lockout-delay-multiplier          (eg. 2 increases further login delays by twice i.e, 600s)
</pre>
<br><br><br>

## User Specific
<span style="font-size:1.5em;">Table: <b>usertable</b></span>

<pre style="font-size: 15px">
  successive-login-failures               (eg. 2   )
  is-acc-soft-locked                      (eg  N,Y )
  soft-lock-count                         (eg. 0,3 )
  is-acc-hard-locked                      (eg. N,Y )
  lockout-wait-starttime                  (eg. current timestamp)
</pre>