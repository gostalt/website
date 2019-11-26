---
path: "/deploy/ssl"
title: "SSL"
---

When deploying your app to production, Gostalt will automatically
provision a Let's Encrypt certificate. To enable this feature,
simply change the environment variable `APP_ENV` to `production`.
Ensure that ports `443` and `80` can be accessed.
