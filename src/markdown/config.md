---
path: "/getting-started/config"
title: "Config"
---

During the app's startup, the contents of the `.env` file in the root of
the project is read, and is passed to config, which defines many different
domains and values. You can view these in the `config` folder in the root
of the project.

You can use `config.Get` to retrieve the value of any set key at any
point in your application:

```go
name := config.Get("app", "name") // Gostalt
```

You're free to create your own config files to use in your app. You
should pass in the env variable if you wish to load the config
from the .env file, as shown below:

```go
// config/config.go
cfg = map[string]map[string]string{
"logging": logging(env),
// your config here...
}
```
