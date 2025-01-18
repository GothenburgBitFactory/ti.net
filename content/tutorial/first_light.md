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

Answer `yes` or (simply `y`) to this dialog and you are ready to go:

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

From then on when you call the `timew` command without any arguments, it will give you a short report of the current status of your time tracking:

```console
$ timew
There is no active time tracking.
$ ▒
```

As you have not done any tracking yet, this is expected.
Move on to the [next section](../simple/) now and start some simple time tracking.

If you are interested where your data is stored, you can read [File Layout](../../docs/files/) for more information.

Or you return to the [Tutorial](..) section and pick another topic of interest.
