---
path: "/packages/validate/built-in"
title: "Validate: Built-in Validators"
---

Validate offers a number of built-in validators:

### Alpha

Fails if the parameter contains any characters that aren't in the
alphabet.

### Alphanumeric

Fails if the parameter contains any characters that are not an
alphabet letter or a number.

### Boolean

Fails if the parameter is not a boolean. Because request params
do not have a type, this validator fails if the value of the
param is not equal to `"true"`, `"false"`, `"1"` or `"0"`.

### Date

Fails if the parameter is not a date. This validator uses the
built-in Go date formats to check if the passed value is a date.
You can also pass a slice of strings as a `formats` key in the
Options struct.

Because this CheckFunc compares the given value against each of
Go's built-in date formats, it can be computationally expensive.
If you **know** the format that the date will be in, you should
use the `DateFormat` CheckFunc.

### DateFormat

Fails if the parameter does not matched the `format` key's value
passed in the Options struct.

### Email

Fails if the parameter is not an email address.

### MXEmail

Fails if the parameter is not an email address. This validator
firstly uses the `Email` validator to determine if the email
address matches a pattern, but then also looks up the MX records
of the email domain to more accurately determine if an email
address exists.

### Integer

Fails if the parameter is not an integer. Uses the regex `^[0-9]+`
to determine a pass.

### MaxLength

Fails if the length of the parameter (number of characters) is
greater than the `length` value passed to the Options struct.

### MinLength

Fails if the length of the parameter (number of characters) is
less than the `length` value passed to the Options struct.

### NotRegex

Fails if the parameter is satisfied by the regex `pattern` passed
to the Options struct.

### Regex

Fails if the parameter does not satisfy the regex `pattern` passed
to the Options struct.

### Required

Fails if the parameter does not exist in the request.

### RFC3339

Fails if the value passed does not match the date pattern defined
by RFC3339.
