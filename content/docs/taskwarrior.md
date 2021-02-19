---
lang: en
title: 'Timewarrior - Taskwarrior'
viewport: 'width=device-width, initial-scale=1'
---

### Taskwarrior

Taskwarrior and Timewarrior are related, and work together using an `on-modify` hook script installed for Taskwarrior.

The hook script is installed with Timewarrior.
Simply copy it to the Taskwarrior hooks directory, and make it executable:

    $ cp ext/on-modify.timewarrior ~/.task/hooks/
    $ chmod +x ~/.task/hooks/on-modify.timewarrior

Once the hook is installed, run the Taskwarrior command:

    $ task diagnostics
    ...

This command will show whether the hook script is installed and recognized.
You should see something like this:

![](/images/hook1.png)

Whenever you `start` a task in Taskwarrior, the hook script will start time tracking in Timewarrior.
When the task is `stop`ped, or completed, the hook script will stop time tracking in Timewarrior.
