---
path: "/getting-started/installation"
title: "Installation"
---

## Cloning the Repository

To get started quickly, clone the `fresh` repository to your local machine:

```shell
git clone https://github.com/gostalt/fresh.git blog
```

Once the repo has been cloned successfully, you should copy the example .env
file:

```shell
cd blog
cp .env.example .env
```

To start the project locally, just run:

```shell
./gostalt serve
```

By default, Gostalt is set to run on port `8080` locally. You can override this by
changing the `PORT` value in `.env` file in the root of the project.

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
