---
path: "/getting-started/views-and-templates"
title: "Views and Templates"
---

By default, handlers exist inside the `app/http/handler` directory,

Gostalt uses the default `html/template` package provided by Go.
View files are `.html` files and should be stored in the
`resources/views` directory. You can nest files in this directory
as deeply as you'd like.

## Executing Views

You can execute a view inside of a handler by resolving the views
from the container and calling the `ExecuteTemplate` method on
the view:

```go
func Welcome(w http.ResponseWriter, r *http.Request) {
    views := di.Get(r, "views").(*template.Template)

    views.ExecuteTemplate(w, "welcome", nil)
}
```

> When accessing a view, you should omit the `.html` extension.

Nested views use dot notation rather than directory separators:

```go
// admin.users.index would load the view file from
// resources/views/admin/users/index.html
views.ExecuteTemplate(w, "admin.users.index", nil)
```

### Passing Data to the View Template

To pass data to a view, pass it as the third argument in the
`ExecuteTemplate` method. If you need to assemble a variety of
data, you should use an "anonymous struct" to define it:

```go
func ShowUserProfile(w http.ResponseWriter, r *http.Request) {
    views := di.Get(r, "views").(*template.Template)

    data := struct{
        Name string
        Age  int
        Plan string
    }{
        Name: "Tomy Smith",
        Age:  27,
        Plan: "Premium",
    }

	views.ExecuteTemplate(w, "user.account", data)
}
```
