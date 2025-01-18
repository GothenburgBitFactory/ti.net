---
lang: en
title: 'Timewarrior - Adding metadata information'
viewport: 'width=device-width, initial-scale=1'
hide_toc: true
---

# Adding metadata information

{{< lead >}}Adding extra information to your tracked time.{{< /lead >}}

In the [previous section](../enhanced/) you added enhanced your time tracking with tags to categorize your intervals.

However, you already have tracked some time before without tags (those with IDs `@4`, `@5`, and `@6`):

```console
{{< tutorial_example "metadata-summary-before" >}}
```

How can you add tags to those intervals?

To add tags to those intervals, you can use the `tag` command, which accepts one or more tags and one or more interval IDs:

```console
{{< tutorial_example "metadata-tag" >}}
```

Now you have added tags `PREPARATION` and `HOME` and your tracked time looks like this:

```console
{{< tutorial_example "metadata-summary-tag" >}}
```

But wait, `PREPARATION` should go only to `@5`, and `HOME` should go only to `@4`, and `@6` should have a completely different tag set.
How can you correct this?

You can remove tags from intervals with the `untag` command.
Similar to the `tag` command, it accepts one or more tags and one or more interval IDs.
So, let's remove the unwanted tags from intervals `@4` and `@5`:

```console
{{< tutorial_example "metadata-untag" >}}
```

With that your tracked time looks like this:

```console
{{< tutorial_example "metadata-summary-untag" >}}
```

We could now use the `untag` command to remove the tags from interval `@6` and then add the correct ones, but there is a more efficient way with the `retag` command.

While `tag` and `untag` only add or remove the given tags, `retag` replaces the complete tag set of an interval with the given ones.

```console
{{< tutorial_example "metadata-retag" >}}
```

When you now review your tracked time, all intervals have tags:

```console
{{< tutorial_example "metadata-summary-after" >}}
```

Now that your tracked time has more information, you now notice that there is a gap between the intervals with ID `@3` and `@4`, where you forgot to track time.
Is there a way to correct this?

In the [next section](../precise/), you will see how you can use time information to fix this – and how use them for more precise time tracking.

Or you return to the [Tutorial](..) section and pick another topic of interest.
