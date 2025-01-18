---
lang: en
title: 'Timewarrior - Show me the Data!'
viewport: 'width=device-width, initial-scale=1'
hide_toc: true
---

# Show me the Data!

{{< lead >}}Display what data Timewarrior has collected.{{< /lead >}}

In the [previous section](../simple/), you did some simple time tracking.
But how can you see what you have tracked?

Let's assume you have already started and stopped tracking a few times over the course of the day.
Now you want to see what Timewarrior has recorded.

The `summary` command gives you a summary of your tracked time:

```console
{{< tutorial_example "summary-display" >}}
```

For each interval, you can see a column with the start and end time (columns '`Start`' and '`End`'), and its duration (column '`Time`').
Also, for each day, the overall total time is displayed in the '`Total`' column.

When called without any further arguments, the `summary` output table will always show you the data for the current day.
Therefore, the number at the very bottom of the '`Total`' is identical to the total time of the day.

Timewarrior also assigns a unique ID to each interval, as you can see in the `ID` column.
The ID column shows up when the `summary` command is called with the `:ids` hint as an argument.
This ID is useful when you want to refer to a specific interval in other commands.

Timewarrior assigns the ID always in the order of the intervals, starting at the latest interval (which therefore always has the ID `@1`).
This also means that the ID of an interval can change when you add new intervals.

So now with the `summary` command you can see that you have tracked some data, but the output is not very helpful.
What kind of activity did you actually track?

Here is where tags come in handy.
With tags, you can categorize your tracked time.
You see there already is a column '`Tags`' in the `summary` output table, but it is currently empty.

In the [next section](../enhanced/) you will fill this column by using tags when tracking time.

Or you return to the [Tutorial](..) section and pick another topic of interest.
