---
path: "/getting-started/routing"
title: "Routing"
---

Gostalt uses an expressive syntax to make registering new routes
really easy. Two sets of route groups are set up for you with
a fresh install: `web` and `api`.

## Route Groups

Route groups allow you to separate different sections of your app.
You can apply prefixes and middleware to different route groups.

Route groups live in the `routes` folder of your Gostalt app. To
create a new route group, create a new file in this directory.
For example, `routes/admin.go`.

In this file, you should create a new variable of type `route.Collection`:

```go
package routes

import "github.com/gostalt/framework/route"

var Admin = route.Collection()
```

### Route Group Prefixes

The `Prefix` method can be chained onto a Collection to prefix
each route in the collection with a given string. For example,
to prefix all route URIs with "admin":

```go
// ...

var Admin = route.Collection(
    route.Get("users", handler) // would resolve to `admin/users`.
).Prefix("admin")
```

### Route Group Middleware

To add middleware to each of the routes in a Group, you can chain
the `Middleware` method onto a Collection. The middleware are
executed in the order they are defined:

```go
// ...

var API = route.Collection(
	route.Get("/status", handler),
).Prefix("api").Middleware(mw.AddJSONContentTypeHeader)
```

### Routes

Inside this `route.Collection` function call, you should add all
the routes you wish to belong to this collection:

```go
package routes

import (
	"gostalt/app/http/handler/admin"
	"net/http"

	"github.com/gostalt/framework/route"
)

var Admin = route.Collection(
	route.Get("admin/users", http.HandlerFunc(admin.GetUsers)),
	route.Get("admin/cards", http.HandlerFunc(admin.GetCards)),
)
```

See [handlers](/handlers) for information on how to create handlers.

You can use `route.Get`, `route.Post`, `route.Put`, `route.Patch`
and `route.Delete` to register routes. These will only allow requests
from their corresponding HTTP verbs.

The second parameter of a route definition is the handler. This can
be an `http.Handler` or an object that implements Go's native
`fmt.Stringer` interface (in other words, the struct has a `String`
method that returns a string).

> To use a function, you should cast it to an `http.HandlerFunc`
> as seen in the example above.

#### Route Parameters

You can use `{param}` notation to add parameters to a route:

```go
route.Get("greet/{name}", http.HandlerFunc(GreetingHandler))
```

These parameters will be available inside the request's `Form`
field inside the handler:

```go
func GreetingHandler(w http.ResponseWriter, r *http.Request) {
    name := r.Form.Get(":name")
    w.Write([]byte(fmt.Sprintf(`{"greeting": "Hello, %s! From Gostalt."}`, name)))
}
```

**Note:** route parameters are prefixed with `:` to prevent them
from overwriting existing values in the request.

> This functionality is handled by the `AddURIParametersToRequest`
> middleware. If you're interested in this functionality in your
> own route groups, ensure you add it to your route Collection.

#### Redirect Routes

Rather than create an entire Handler to manage redirecting from
one page to another, Gostalt includes a `Redirect` method to make
this process a cinch:

```go
route.Redirect("/old", "/new")
```
