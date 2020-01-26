---
path: "/getting-started/handlers"
title: "Handlers"
---

Gostalt uses Go's default `net/http` Handlers, meaning there is
nothing new to learn to start creating handlers for your app.

By default, handlers exist inside the `app/http/handler` directory,
but you're free to create them wherever you want. You can run the
`gostalt make handler` command to quickly create a stub handler.

## Accessing the Container

You can access items from the container inside your handlers. To do
so, use the `di.Get` method to retrieve an item form the handler's
`http.Request` parameter. You can see this in use in the
`web.Welcome` handler:

```go
func Welcome(w http.ResponseWriter, r *http.Request) {
	views := di.Get(r, "views").(*template.Template)

	views.ExecuteTemplate(w, "welcome", nil)
}
```

> Behind the scenes, Gostalt uses the `sarulabs/di/v2` package. This
> package adds items inside the container to the request context,
> allowing you to resolve items from inside it.

## Accessing URI Parameters

You can use `{param}` notation to add parameters to a route:

```go
route.Get("greet/{name}", http.HandlerFunc(GreetingHandler))
```

These parameters will be available inside the request's `Form`
field inside the handler. Gostalt will automatically call
`r.ParseForm()`, meaning you don't need to do this inside
each handler.

```go
func GreetingHandler(w http.ResponseWriter, r *http.Request) {
    name := r.Form.Get(":name")
    w.Write([]byte(fmt.Sprintf(`{"greeting": "Hello, %s! From Gostalt."}`, name)))
}
```

> **Note:** route parameters are prefixed with `:` to prevent them
> from overwriting existing values in the request. This functionality
> is handled by the `AddURIParametersToRequest` [middleware]. If
> you're interested in adding this feature to your own route groups,
> ensure you add it to your route group definition's middleware.

[middleware]: https://github.com/gostalt/framework/blob/master/route/middleware/AddURIParametersToRequest.go

## Writing a Response

Because Gostalt uses Go's net/http package, writing responses is
exactly the same as you'd expect. You can write additional headers
to the response by using the Header method on the ResponseWriter:

```go
func HeaderExample(w http.ResponseWriter, r *http.Request) {
    // Add a Header key and value
    w.Header().Set("Content-Type", "application/json")

    // Set an HTTP Status Code
    w.WriteHeader(http.StatusTeapot)

	views.ExecuteTemplate(w, "welcome", nil)
}
```

Because of the way the ResponseWriter works, you can write to it at
any point in the middleware stack. This is used in the api routes to
automatically add a JSON header to all API responses:

```go
// routes/api.go
var API = route.Collection(
	route.Get("welcome", http.Handler(http.HandlerFunc(api.Hello))),
).Prefix("api").Middleware(mw.AddJSONContentTypeHeader)

// AddJSONContentTypeHeader.go
func AddJSONContentTypeHeader(next http.Handler) http.Handler {
	return http.HandlerFunc(
		func(w http.ResponseWriter, r *http.Request) {
			w.Header().Set("Content-Type", "application/json")
			next.ServeHTTP(w, r)
		},
	)
}
```
