---
path: "/getting-started/installation"
title: "Installation"
---

To compile the Gostalt binary, the latest version of Go is recommended.

## Downloading

To get started, you'll need to download a copy of the Gostalt repository
to your local filesystem. The easiest way to do this is using `git`:

```shell
git clone https://github.com/gostalt/gostalt
```

After you've downloaded the repo, navigate to it and run `go build`:

```shell
cd gostalt
go build
```

Use the created `gostalt` binary to serve the website. Before you
run it, you'll need to ensure you have environment variables set
for `HOST` and `PORT`. These can be set in your system's environment
or by copying the existing `.env.example` file to `.env`.

```shell
$ HOST=localhost PORT=8080 ./gostalt serve
  Info: Server running at localhost:8080

  # or

$ cp .env.example .env
$ ./gostalt serve
  Info: Server running at localhost:8080
```

That's it! You should see a message to let you know that your app
is running on the provided ports. Visit the address in your browser
and you'll see the Gostalt splash screen.
