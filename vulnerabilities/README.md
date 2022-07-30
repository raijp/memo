# Cloud Metadata Potentially Exposed
Do not trust any user data in NGINX configs. In this case it is probably the use of the $host variable which is set from the 'Host' header and can be controlled by an attacker.
<br>See https://www.nginx.com/blog/trust-no-one-perils-of-trusting-user-input/
