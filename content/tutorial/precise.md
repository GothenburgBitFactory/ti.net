---
lang: en
title: 'Timewarrior - Precise Time Tracking'
viewport: 'width=device-width, initial-scale=1'
hide_toc: true
---

# Precise Time Tracking

{{< lead >}}Track time more precisely by specifying the start and end time.{{< /lead >}}

In the [previous section](../metadata/), you added metadata to your tracked intervals.

Looking at the summary report then, you discovered a gap between the intervals with ID `@3` and `@4`, where you forgot to track time:

```console
{{< tutorial_example "precise-summary-before" >}}
```

In situations like this you can use the `track` command to add the missing interval.

The `track` command allows you to record complete intervals.
It accepts tags like the `start` and `stop` commands, but also requires a range of time:

```console
{{< tutorial_example "precise-track" >}}
```

Here the range is given as '`10:00 - 10:48`'.
Timewarrior accepts a variety of formats for specifying time ranges, which will be covered in a later section of the tutorial.

You can now see the new interval with ID `@4` in the summary report:

```console
{{< tutorial_example "precise-summary-track" >}}
```

Specific date and time values can also be used with the `start` and `stop` commands.
So you do not have to start and stop tracking exactly at the beginning and end of an activity.

Assume you start doing some sports after your work.
After you have started you get the idea to also track that, so you start a new time tracking with the past start time:

```console
{{< tutorial_example "precise-start" >}}
```

You see the familiar output of the `start` command again, but of course adapted to the passed start time.

When you are done with your exercise, you can also define the end time when stopping the tracking:

```console
{{< tutorial_example "precise-stop" >}}
```

With that new knowledge at hand, you now start your next activity:

```console
{{< tutorial_example "precise-erroneous" >}}
```

But wait, that was not the correct time, you entered `13:00` instead of `12:00`.
How can this be undone?

In the [next section](../undo/) you will see how you can take one or more steps back to fix such mistakes.

Or you return to the [Tutorial](..) section and pick another topic of interest.
