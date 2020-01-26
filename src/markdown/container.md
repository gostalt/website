---
path: "/advanced/container"
title: "Container"
---

The container makes it easy to handle dependencies and utilise
dependency injection on custom types, rather than hard-coding
the dependencies into the type.

### Binding to the Container

Gostalt uses `sarulabs/di` as a service container. To bind a new
service, add a new `di.Def{}` to the `services` slice in
`app/services/app.go`:

```go
var services = []di.Def{
    Name: "UserRepository",
    Build: func(c di.Container) (interface{}, error) {
        db := c.Get("database").(*sql.DB)
        return &repository.User{
            DB: db,
        }, nil
    }
}
```

As you can see, a new service needs a `Name` and `Build` field.
The build field's value should be a function that accepts the
container as a parameter and returns an interface and an error.
In this example, we are resolving the "database" item out of the
container and using it as a value in the initialisation of a new
`respository.User` struct. This means that, should our database
details change, we don't need to change them in every area of our
codebase.

> Note that, to retrieve an item from the container, you should
> use the `Get` method to pass in the name of an item. Because
> this returns an `interface{}`, it needs to be cast to the
> appropriate type—in the example above, we use `*sql.DB`.

For more complex services, it makes sense to create a dedicated
Service Provider, for example the `LoggingServiceProvider` or
the `TLSServiceProvider`. Service providers have two methods,
`Register` and `Boot`. The Register method is called on each
provider to create the container, and then the boot method is
called on each service provider.

You can create a service provider by declaring a new type:

```go
type ExampleServiceProvider struct {
    BaseServiceProvider
}
```

As you can see above, the new service provider has a promoted
`BaseServiceProvider` field. This implements stub methods for
`Register` and `Boot`, meaning that we can omit them from our
Provider whilst still implementing the `Provider` interface.
Of course, you can override the `Register` and `Boot` methods
of the `BaseServiceProvider` by defining them on your new provider.

> The naming is obvious, but you should only _Register_ items
> into the container in the `Register` method. If you attempt
> anything else in the Register method, the service may not
> yet have been created.
