---
lang: en
title: 'Timewarrior - timew-charts'
viewport: 'width=device-width, initial-scale=1'
---

## Charts

Timewarrior can show simple charts in your terminal that show how your day is being tracked.
These are neither high-resolution, nor precise, and are only intended to show a crude representation of the day.

As an example, let\'s do some gardening time tracking.
We will add an interval, then use the `day` report to represent that:

![](/images/day1.png)

A two-hour interval was tracked for this morning.
The `day` report shows that as a red interval superimposed on the hours of the day.
The tags are displayed within red rectangle.

At the left you see the day is Sunday the 19th, and the date and the current hour, 14, is highlighted.
Beneath the chart are some totals, showing that two hours are tracked, 22 hours remain open, for a total of 24 hours in the day.

Now we\'ll add another interval:

![](/images/day2.png)

The second interval is shown in blue, and these colors are extracted from a palette defined in the [theme](/docs/themes.html).
See how the totals are adjusted.
Finally we add an open interval:

![](/images/day3.png)

The open interval, shown in green, has a `+` symbol that indicates it is open and being actively tracked.
If you run this report periodically, you\'ll see the green interval grow to the right as time passes.

![](/images/day4.png)

Like the [`summary`](/docs/summary.html) report, the `:ids` hint is supported by the `day` report, for [making corrections](/docs/corrections.html).

![](/images/day5.png)

Various command-line overrides can be used to customize the `day`report.
Here is an example that makes the color bars taller.
For a complete set of all configuration settings, use the `man timew` command where the man page lists everything.

![](/images/day6.png)

This override changes how many hours are shown, from all of them, to a clipped range slightly wider than the tracked hours.

The `day` report is simply an interpretation of the same data shown by the `summary` report.
Use the `summary` report to show precise timings.

![](/images/day7.png)

If you have defined your [work week](/docs/workweek.html) then the `day` report will show the blocked-off time, here shown in gray.
Notice that this affects the totals.

![](/images/day8.png)

Now with both intervals and exclusions, the `gaps` command will tell you where the blocks of untracked time are.

![](/images/day9.png)

All reports support the `:blank` hint, which hides all data.
This is useful for checking that the excluded time is set up correctly.

![](/images/day10.png)

In addition to the `day` report, there is a `week` report, which shows multiple days in a more compact form, for the current week.

![](/images/day11.png)

There is also a `month` report.
These are defined just for convenience, but with a command line interval specified, the reports can show any date range:

![](/images/day12.png)

In place of specifying a date range, a hint may be used, such as: `:yesterday`, `:week`, `:month`, `:quarter`, `:year`, `:lastweek`, `:lastmonth`, `:lastquarter`, and `:lastyear`.

See also how the [holidays](/docs/holidays.html) are shown, in this case with 2016-05-30 being Memorial Day in the US.
The day is marked as an exclusion, and the date grayed out.

Many of the elements of the `day` report are customizable.
For a complete set of all configuration settings, use the `man timew` command for all supoprted overrides.
