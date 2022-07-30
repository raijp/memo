# Cloud Metadata Potentially Exposed
The Cloud Metadata Attack attempts to abuse a misconfigured NGINX server in order to access the instance metadata maintained by cloud service providers such as AWS, GCP and Azure.
<br>All of these providers provide metadata via an internal unroutable IP address '169.254.169.254' - this can be exposed by incorrectly configured NGINX servers and accessed by using this IP address in the Host header field.
<br>See https://www.nginx.com/blog/trust-no-one-perils-of-trusting-user-input/
