---
lang: en
title: 'Timewarrior - Enhanced Time Tracking'
viewport: 'width=device-width, initial-scale=1'
hide_toc: true
---

# Using Tags

{{< lead >}}Enhance your time tracking with tags.{{< /lead >}}

In the [previous section](../summary/), you recorded simple intervals and displayed them.
That is a good start, but what if you want to track time spent on different activities?
How would you be able to tell those intervals apart?

Here is where tags come in.
Tags allow you to categorize your time tracking.
Think of them as labels for your recorded intervals.

Let's again track some time, but this time we add a tag to the interval.
A tag is simply an extra string after the `start` command.
For example, when you want to track time spent on a client project, you can use the tag `CLIENT`:

```console
{{< tutorial_example "enhanced-start-tag" >}}
```

Timewarrior now reports that it is tracking `CLIENT`.
You are also notified that `CLIENT` is a new tag.

Previously, you saw that when using the `start` command repeatedly, Timewarrior would only report on the current tracking.

This is the same when using tags, but only when you use the same tag set.
When you call `start` with a different tag set, Timewarrior will stop the current tracking and start a new one.

Let's assume you have a phone call in the context of `CLIENT` and you want to track this as well.
Instead of explicitly stopping the first recording and then starting the next, just call `start` with the new tag set:

```console
{{< tutorial_example "enhanced-start-different-tag-set" >}}
```

Timewarrior reports that it has recorded an interval with tag `CLIENT` and that it is now tracking `PHONE` and `CLIENT`.
Because `PHONE` is a new tag you are notified about this, but not for `CLIENT` as it is already known.

When you are done with the phone call, you could switch your time tracking back to working on `CLIENT` by calling `start` with only `CLIENT` as the tag set.
However, you can also just call `stop` with the tags you no longer want to track, i.e. in our case `PHONE`:

```console
{{< tutorial_example "enhanced-stop-tag" >}}
```

You see that Timewarrior reports on the tracked interval with the tags `PHONE` and `CLIENT`, and that it is now tracking only `CLIENT` again.

When you call the `stop` command without any tags, Timewarrior will stop all tracking:

```console
{{< tutorial_example "enhanced-stop-all" >}}
```

Using the `summary` command, you can have a look on your recorded intervals again:

```console
{{< tutorial_example "enhanced-summary" >}}
```

You see that now with tags you have a better idea of what you have been doing during those intervals.

But what about the previous intervals (`@4`, `@5`, and `@6`) that you tracked without tags?
Do they have to stay like this?
No, you can add tags to them as well.

In the [next section](../metadata/), you will learn how to add, remove, and change tags of your recorded intervals.

Or you return to the [Tutorial](..) section and pick another topic of interest.
