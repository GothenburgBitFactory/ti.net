---
lang: en
title: 'Timewarrior - Corrections'
viewport: 'width=device-width, initial-scale=1'
---

## Corrections

One of the most problematic aspects of time tracking is the constant need for adjustments and corrections.
It is very common to forget to start or stop tracking at the right time or use the wrong tags.

Timewarrior has a set of commands that allow you to make these corrections.
First create a scenario that requires adjustment:

![](/images/correction1.png)

This creates an active interval, starting one hour ago, using the tags Prepare and Talk.
Everything about this interval is wrong.
The first step to correcting it is to get the ID, using the `summary` command with the `:ids` hint.

![](/images/correction2.png)

The ID is 1, so we will use `@1` when referencing this interval.
Note that the most recent interval is always numbered `@1`, which makes the ID numbers independent of which report you run to see them.

With the ID known, we can make various adjustments to the interval using the following commands:

### Remove extra tags

    $ timew untag @1 Prepare Talk

### Add missing tag

    $ timew tag @1 'Prepare Talk'

### Add time to a closed interval

    $ timew lengthen @1 20mins

### Remove time from a closed interval

    $ timew shorten @1 PT5M30S

### Move any interval to a new start time

    $ timew move @1 8:30am

### Split an interval in two

    $ timew split @1

### Join two intervals together

    $ timew join @1 @2
