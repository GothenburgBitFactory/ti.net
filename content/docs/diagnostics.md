---
lang: en
title: 'Timewarrior - timew-diagnostics'
viewport: 'width=device-width, initial-scale=1'
---

### Diagnostics

Timewarrior has a `diagnostics` command that can be used to help
determine problems. The output is:

![](/images/diag1.png)

If there are detectable problems, the `diagnostics` command tries to
identify the cause. This command will likely grow more sophisticated
over time, reporting more problems.

If you are [reporting a
bug](https://github.com/GothenburgBitFactory/timewarrior/issues), we
would like to see this output. This saves us asking you a dozen
questions about your platform and setup.

If you are experiencing a problem with a command, using the `:debug`
hint to run the command in debug mode will include runtime output that
can also be used to determine what happened.
