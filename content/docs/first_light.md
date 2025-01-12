---
lang: en
title: 'Timewarrior - First Light!'
viewport: 'width=device-width, initial-scale=1'
hide_toc: true
---

# Running Timewarrior for the very first time

{{< lead >}}There is no initial setup required to use Timewarrior, you simply start using it.{{< /lead >}}

When run for the very first time, Timewarrior will ask you where to store its data:

```console
$ timew
Create new config in ~/.config/timewarrior?
Create new database in ~/.local/share/timewarrior? (yes/no) ▒
```
Timewarrior adheres to the XDG Base Directory Specification.
This means by default it stores its data in `${XDG_DATA_HOME}/timewarrior` and its configuration in `${XDG_CONFIG_HOME}/timewarrior`.
See [File Layout](../files/) for more information.

Answer `yes` or simply `y` to this dialog and you are ready to go:

```console
$ timew 
Create new config in ~/.config/timewarrior?
Create new database in ~/.local/share/timewarrior? (yes/no) yes

Welcome to Timewarrior.

There is built-in help:
    timew help
    timew help <command>
    (and more)

There is a fully-detailed man page:
    man timew
$ ▒
```

Take a look at the [Tutorial](../tutorial/) to get started on how to track your time with Timewarrior.
