---
lang: en
title: 'Timewarrior - Corrections'
viewport: 'width=device-width, initial-scale=1'
hide_toc: true
---

## Corrections

{{< lead >}}Correcting past mistakes...{{< /lead >}}

In the [previous section](../undo/), you learned how commands `cancel`, `undo`, and `delete` help you to undo previous database changes.

But sometimes you only want to change a specific interval, without having to re-enter it.
This is where the commands `move`, `lengthen`, `shorten`, `resize`, and `modify` come in handy. Let's apply them to your tracked time:

```console
{{< tutorial_example "corrections-summary-before" >}}
```

## Move

You see that you started your first task (`@8`) not at `08:05`, but actually at `08:00`.
So let's move the interval to the correct start time with the `move` command:

```console
{{< tutorial_example "corrections-move" >}}
```

The `move` command moves the interval to the specified start time without changing the interval length, so the end time is adjusted accordingly:

```console
{{< tutorial_example "corrections-summary-move" >}}
```

## Lengthen/Shorten

Now the interval starts at the correct time, but still you finished `SPORT` at `08:22`, meaning the interval is now too short.

You can lengthen it with the `lengthen` command:

```console
{{< tutorial_example "corrections-lengthen" >}}
```

Of course, there is also a `shorten` command.
Let's apply it to interval `@6` which only took 30 minutes, i.e. is 88 seconds too long:

```console
{{< tutorial_example "corrections-shorten" >}}
```

Now the summary looks like this:
```console
{{< tutorial_example "corrections-summary-lengthen-shorten" >}}
```

## Resize

When you know how much time you spent on a task, you can avoid the math to calculate how much you have to lengthen or shorten it by using the `resize` command.

Let's use this to correct the duration of interval `@8` to 20 minutes

```console
{{< tutorial_example "corrections-resize" >}}
```

The `resize` changes the duration of an interval to the given value, leaving the start time unchanged.

```console
{{< tutorial_example "corrections-summary-resize" >}}
```

## Modify

While the commands before either move the whole interval or change its length, the `modify` command can be used to change the start and end times of an interval independently:

To make interval `@6` start at `09:21` and end at `09:51`, you can use the `modify` command like follows:

```console
{{< tutorial_example "corrections-modify-start-end" >}}
```

Let's have a look at the summary again:

```console
{{< tutorial_example "corrections-summary-after" >}}
```

Now all your intervals have the correct start and end times.

## Congratulations!

Congratulation, you have reached the end of the Beginner's Guide.
You should now have a basic understanding of how to track time with Timewarrior.

Move on to the [documentation](../../docs/) to see what else you can discover about Timewarrior.
