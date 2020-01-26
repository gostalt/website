---
path: "/advanced/commands"
title: "Commands"
---

When you're ready to run your app, run `gostalt serve`. You'll
be able to visit the address defined in `/config/app.go`.

`serve` is a [cobra] command. You are free to register additional
commands by creating a command and adding it to the `rootCmd`:

[cobra]: https://github.com/spf13/cobra

```go
// app/command/greet.go

package command

import (
"gostalt/app"

    "github.com/spf13/cobra"

)

var greet = &cobra.Command{
Use: "greet",
Short: "Greet the user",
Run: func(cmd \*cobra.Command, args []string) {
    // If you need to access config or resolve an item from
    // the DI Container, you can Make() the app here.
    a := app.Make()

    name := config.Get("app", "name")

    // Hello from Gostalt!
    fmt.Printf("Hello from %s!\n", name)
    },
}

func init() {
rootCmd.AddCommand(greet)
}
```

With Commands, you have the full power of the `spf13/cobra`
library combined with the Gostalt Container.
