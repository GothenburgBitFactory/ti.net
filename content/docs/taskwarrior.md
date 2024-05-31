---
lang: en
title: 'Timewarrior - Taskwarrior'
viewport: 'width=device-width, initial-scale=1'
hide_toc: true
---

# Taskwarrior

Taskwarrior and Timewarrior are related, and work together using an `on-modify` hook script for Taskwarrior.

This script is part of the Timewarrior installation.
If you installed Timewarrior manually, it is usually located at `/usr/local/share/doc/timew/ext/on-modify.timewarrior`.
For packages, check the following table for examples.

{{< hook_location_table >}}

If your distribution is not listed above, you might try the following shell command to locate the hook script:

```
$ find / -name on-modify.timewarrior 2>/dev/null
```

Simply copy it to the Taskwarrior hooks directory and make it executable:

```
$ cp /path/to/on-modify.timewarrior ~/.task/hooks/
$ chmod +x ~/.task/hooks/on-modify.timewarrior
```

Then run the Taskwarrior command `task diagnostics` to check whether it was installed correctly.
It should mention `on-modify.timewarrior` in the Hooks > Active section:

```
Hooks
     System: Enabled
   Location: /home/user/.task/hooks
     Active: on-modify.timewarrior (executable)
```

Whenever you `start` a task in Taskwarrior, the hook script will start time tracking in Timewarrior.
The hook captures the description, project and tags of the task and passes them to Timewarrior as tags.
It triggers for any command that modifies the `start` property of a task.
It also picks up any modifications the aforementioned properties on the tracked task and updates the tracked task in Timewarrior accordingly.

When the task is `stop`ped, or completed, the hook script will stop time tracking in Timewarrior.

The hook script is open source, written in Python, so feel free to inspect and adjust it to your needs.

Below you can see a usage example: create a task, start it, complete it and automatically track it.

![](../../images/taskwarrior-on-modify-hook-example.png)
