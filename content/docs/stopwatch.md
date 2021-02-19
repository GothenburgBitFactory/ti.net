---
lang: en
title: 'Timewarrior - Stopwatch'
viewport: 'width=device-width, initial-scale=1'
---

### Simple Stopwatch

The simplest use of Timewarrior is as a stopwatch, to record an
activity.
As you begin the activity, you start the clock:

    $ timew start
    Tracking 
      Started 2016-06-14T08:18:23
      Current                  23
      Total               0:00:00

The word \'Tracking\' is used to indicate active tracking.
You are shown
the start date/time, the current time compared to the start time, and
the total elapsed time, which is currently none.
As the clock is
running, you can see the current elapsed time by simply running
Timewarrior with no arguments:

    $ timew
    Tracking 
      Started 2016-06-14T08:18:23
      Current               20:20
      Total               0:01:57

Later when the activity ends, you stop the clock:

    $ timew stop
    Recorded 
      Started 2016-06-14T08:18:23
      Ended                 20:49
      Total               0:02:26

The word \'Recorded\' is used to indicate that an activity has ended,
and the time recorded.
Now if you run Timewarrior with no arguments, it
will not report any tracking:

    $ timew
    There is no active time tracking.

When you want to seamlessly switch to another activity, you can invoke
the `start` command while there still is an activity being tracked:

    $ timew
    Tracking "Write documentation"
      Started 2016-07-03T22:12:28
      Current               42:48
      Total               0:30:20

    $ timew start "Proofread documentation"
    Recorded "Write documentation"
      Started 2016-07-03T22:12:28
      Ended                 44:26
      Total               0:31:58
    Tracking "Proofread documentation"
      Started 2016-07-03T22:44:26
      Current                  26
      Total               0:00:00

As you can see, the previously running activity has ended at the current
time/date, while the new activity has started with an open interval at
the same time.

To see a summary of today\'s recorded time, use the `summary` command:

    $ timew summary

    Wk  Date       Day Tags   Start     End    Time   Total
    --- ---------- --- ---- ------- ------- ------- -------
    W25 2016-06-14 Tue      8:18:23 8:20:49 0:02:26 0:02:26
                                                    -------
                                                    0:02:26

By default, the `summary` command shows only today\'s tracked time.
You
can learn more about the `ѕummary` command in other documents.
