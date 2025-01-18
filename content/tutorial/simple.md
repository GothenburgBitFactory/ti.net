---
lang: en
title: 'Timewarrior - Simple Time Tracking'
viewport: 'width=device-width, initial-scale=1'
hide_toc: true
---

# Simple Time Tracking

{{< lead >}}Let's do some simple time tracking with Timewarrior.{{< /lead >}}

In the [previous section](../first_light/) you have started to use Timewarrior, but not done any tracking yet.
Let's change that now.

The simplest use of Timewarrior is as a stopwatch to record an activity.
As you begin the activity, you start the clock with the `start` command:

```console
{{< tutorial_example "simple-start-first" >}}
```

You can see the `start` command responds with a small report on the current tracking.
Let's break it down:

 * The word '`Tracking`' indicates active time tracking.
 * Next to '`Started`' you are shown the start date/time.
 * '`Current`' shows the current time compared to the start time, but only the digits where it differs from the start time (the seconds at least).
 * Finally, '`Total`' shows the total elapsed time, which is currently none.

Note that after the executing the `start` command, there is no Timewarrior process running in the background, so no system resources are being used.

You can check on the current time tracking status by simply running Timewarrior with no arguments:

```console
{{< tutorial_example "simple-check" >}}
```

The output is similar to the `start` command, but you can see that the values for '`Current`' and '`Total`' have been updated.

Note that when there is active time tracking, executing the `start` command again has no effect.
Timewarrior will just report on the current active time tracking then:

```console
{{< tutorial_example "simple-start-again" >}}
```

Later when the activity ends, you stop the clock with the `stop` command:

```console
{{< tutorial_example "simple-stop-first" >}}
```

Like `start`, the `stop` command also reports on the tracking.
Again, let's break it down:

 * The word '`Recorded`' is used to indicate that an interval has been recorded.
 * Instead of '`Current`', '`Ended`' is shown with the end time, but also only the digits where it differs from the start time.
 * As before '`Total`' shows the total elapsed time.

Also, without active time tracking, executing the `stop` command again has no effect.
Timewarrior will then just report that there is no active time tracking:

```console
{{< tutorial_example "simple-stop-again" >}}
```

Note that Timewarrior does not monitor your activity.
Therefore, it does not provide automatic start or stop of time tracking.

Congratulations, you have just tracked your first activity with Timewarrior!

But what did you actually record, and where did the data go?

Move on to the [next section](../summary/) to see how you can display the data.

Or you return to the [Tutorial](..) section and pick another topic of interest.
