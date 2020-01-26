---
path: "/advanced/scheduling"
title: "Scheduling"
---

Gostalt aims to make scheduled jobs easier: instead of creating loads
of cron jobs on your environment, you can instead create one:

```sh
* * * * * ./gostalt schedule
```

Gostalt has a component called `schedule`, which you can use to
register commands. Commands should have two methods:
`Handle()` and `ShouldFire()`.

The `Handle()` method is responsible for running the actual job;
you can use the full power of the Container to inject the
database and any other requirements.

The `ShouldFire()` method determines if the job should be ran.
You can use Go's `time` package to create easy-to-understand conditions:

```go
func ShouldFire() bool {
	if time.Now().Minute() == 0 {
		return true
    }

	return false
}
```

But, because this function returns a boolean, you can more powerfully
determine if a job should execute or not: is the environment set to
`staging`? If so, don't run the job. Is there only 5 records in the database?
Don't run the job until there are 10. As long as the conditions
can be boiled down to a true or false value, they can be used
to determine if a job should fire.
