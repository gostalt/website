---
path: "/getting-started/installation"
title: "Installation"
---

To compile the Gostalt binary, the latest version of Go is recommended.

## Using the Gostalt CLI Tool

The easiest way to get started is to download the Gostalt CLI utility. To do so,
run `go get -u github.com/gostalt/cli`.

Once installed, the `gostalt new` command will create a new Gostalt project in the
directory you specify. For example, to create a new project called `blog`:

```shell
gostalt new blog
```

The utility will feed back on the progress of creating the new project. Once the
command has finished, navigate to the directory and run `./gostalt serve` to start
the project locally.

```shell
$ ./gostalt serve
Info: Server running at http://localhost:8080
```

By default, Gostalt is set to run on port `8080` locally. You can override this by
changing the `PORT` value in `.env` file in the root of the project.
