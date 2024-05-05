---
lang: en
title: 'Timewarrior - timew-summary'
viewport: 'width=device-width, initial-scale=1'
---

# Summary

There is a `summary` report which shows all the tracked intervals for the day, with totals of the time tracked.
Here is an example:

![](../../images/summary1.png)

This report shows that there are two intervals today.
The first is tagged Breakfast meeting with client ABC and was recorded as a one-hour meeting.
The second interval, tagged Prepare Presentation for DEF began at 9am and is open, with no end time.

The \'Total\' column has sub-totals for the day, and a grand total for the time shown, which in this case is just a single day, and is the same as the sub-total.

Because of the open interval, re-running the `summary` command will yield a different total each time, after all, the clock is still running.

## Date Ranges

The default date range shown is for today only.
This can be overridden on the command line by specifying the date range.
All these commands are therefore the same:

```
$ timew summary
$ timew summary today
$ timew summary today - tomorrow
$ timew summary today to tomorrow
$ timew summary 2016-06-18T00:00
$ timew summary 2016-06-18T00:00 - 2016-06-19T00:00:00
$ timew summary 18th
$ timew summary saturday
```

Timewarrior is very flexible about specifying intervals.
See the [interval syntax](../interval) page for full details.

In addition there are hints that correspond to preset data ranges for added convenience.
Here are some of them used in this context, but not matching the \'today\' example above:

```
$ timew summary :yesterday
$ timew summary :week
$ timew summary :lastweek
$ timew summary :month
$ timew summary :quarter
$ timew summary :year
```

See the [hints](../hints) page for full details.

## IDs

The `summary` report has an important feature.
When the `:ids` hint is used, Some `@id` numbers are shown:

![](../../images/summary2.png)

These are the `@id` numbers you use when making [corrections](../corrections).

Note that the most recent interval is always numbered `@1`, which makes the ID numbers independent of which report you run to see them.
