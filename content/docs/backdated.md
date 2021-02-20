---
lang: en
title: 'Timewarrior - Backdating'
viewport: 'width=device-width, initial-scale=1'
---

## Backdating `start`\/`stop`

You can backdate the start time when tracking an interval.
This happens a lot, because it is very common to forget to start tracking time.
Here are some different ways to do that:

    $ timew 
    There is no active time tracking.

    $ timew start 3pm 'Read chapter 12'
    Tracking 
      Started 2016-06-15T15:00:00
      Current            17:37:22
      Total               2:37:22

    $ timew cancel
    Canceled active time tracking.

    $ timew start 90mins ago 'Read chapter 12'
    Tracking 
      Started 2016-06-15T16:07:33
      Current            17:37:33
      Total               1:30:00
    $

This works the same way for the `stop` command.
Again, it is very common to forget to also stop the clock.
This is what makes time tracking difficult - everything needs to be mutable.

    $ timew
    Tracking 
      Started 2016-06-15T16:14:27
      Current            17:44:32
      Total               1:30:05

    $ timew stop 10mins ago
    Recorded 
      Started 2016-06-15T16:14:27
      Ended              17:34:39
      Total               1:20:12
    $

If you forgot to change your current activity in the past, you can use the `start` command with a date:

    $ timew
    Tracking bar
      Started 2016-07-03T11:00:00
      Current            21:17:44
      Total              10:17:44

    $ timew start 3hours ago foo
    Recorded bar
      Started 2016-07-03T11:00:00
      Ended              18:18:33
      Total               7:18:33
    Tracking foo
      Started 2016-07-03T18:18:33
      Current            21:18:33
      Total               3:00:00

This command stops the currently tracked interval at the date/time given to the `start` command and starts the new interval at the same time, thus sparing you one `stop` command.

Note that unlike Taskwarrior, `3pm` refers to the most recent 3pm in the past, not in the future.
This is because Timewarrior focuses on accurately recording time already spent, whereas Taskwarrior looks forward to work that is not yet done.
