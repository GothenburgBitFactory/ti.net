---
lang: en
title: 'Timewarrior - Interval Behavior'
viewport: 'width=device-width, initial-scale=1'
hide_toc: true
---

# Interval Behavior

Timewarrior stores intervals, most of which are closed, and only one
which may be open.
These intervals (inclusions) interact with exclusions
(holidays etc) and the result is complex.

As an example, support that Saturday and Sunday are defined as
exclusions, and an open interval is created tracking work on a Friday
afternoon.

Until that interval is closed (`$ timew stop`), it remains open.
On the
following Monday there is still one open interval stored, but if a
report is run, that real interval is now represented by two separate
intervals: Friday afternoon and Monday morning.
This is because of the
weekend exclusions.
These two intervals are called synthetic intervals,
and are related to the original real interval.
Synthetic intervals are
never written to the data file.

Here are the rules that Timewarrior follows when handling intervals:

1.  Ids reference intervals and are assigned after exclusions but before
    filters are applied.
Ids are 1-based array indexes from the end of
    the list of real + synthetic intervals.
2.  Intervals can be open or closed.
3.  There is only one or none open interval.
4.  There are real and synthetic intervals.
Synthetic intervals will
    always have the lowest id\[s\].
5.  The database only contains real closed intervals, and zero or one
    open interval.
An open interval is always the last line in the file.
6.  Synthetic intervals only exist if an open interval spans over
    exclusions.
7.  Exclusions are not applied to closed intervals.
Closed intervals may
    only be modified using a command: move, split, join, modify,
    shorten, etc.
Changing configuration has no effect on closed
    intervals.
8.  Synthetic intervals are converted to real intervals if an open
    interval is closed.
9.  Cancelling active time tracking removes the open interval, thus
    removing all synthetic intervals (if any).
