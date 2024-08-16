---
lang: en
title: 'Timewarrior - timew-diagnostics'
viewport: 'width=device-width, initial-scale=1'
hide_toc: true
---

# Diagnostics

Timewarrior has a `diagnostics` command that can be used to help determine problems.
The output is:

```console
$ timew diagnostics

timew 1.4.3
Platform: Linux

Compiler:
  Version: 11.2.0
  Caps: +stdc +stdc_hosted +LP64 +c8 +i32 +l64 +vp64 +time_t64
  Compliance: C++11

Build Features
  Built: Oct 27 2021 18:11:54
  CMake: 3.21.3
  Build type: None

Configuration
  TIMEWARRIORDB: -
  Cfg: /home/gardner/.timewarrior/timewarrior.cfg (-rw- 733 bytes)
  Database: /home/gardner/.timewarrior (drwx 4096 bytes)
  $EDITOR: wordperfect
  Color theme: Built-in default
               ^[[37;41m00^[[0m ^[[37;44m01^[[0m ^[[30;42m02^[[0m ^[[30;45m03^[[0m ^[[30;46m04^[[0m ^[[30;43m05^[[0m ^[[30;47m06^[[0m ^[[37;101m07^[[0m ^[[37;104m08^[[0m ^[[30;102m09^[[0m ^[[30;105m10^[[0m ^[[30;106m11^[[0m ^[[30;103m12^[[0m

Extensions
  Location: /home/gardner/.timewarrior/extensions (drwx 4096 bytes)
```

If there are detectable problems, the `diagnostics` command tries to identify the cause.
This command will likely grow more sophisticated over time, reporting more problems.

If you are [reporting a bug](https://github.com/GothenburgBitFactory/timewarrior/issues), we would like to see this output.
This saves us asking you a dozen questions about your platform and setup.

If you are experiencing a problem with a command, using the `:debug` hint to run the command in debug mode will include runtime output that can also be used to determine what happened.
