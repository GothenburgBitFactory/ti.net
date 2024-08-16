---
lang: en
title: 'Timewarrior - Corrections'
viewport: 'width=device-width, initial-scale=1'
---

# Corrections

One of the most problematic aspects of time tracking is the constant need for adjustments and corrections.
It is very common to forget to start or stop tracking at the right time or use the wrong tags.

Timewarrior has a set of commands that allow you to make these corrections.
First create a scenario that requires adjustment:

```console
$ timew start 1h ago Prepare Talk
Tracking Prepare Talk
  Started 2024-07-17T11:44:36
  Current            12:44:36
  Total               1:00:00
```

This creates an active interval, starting one hour ago, using the tags Prepare and Talk.
Everything about this interval is wrong.
The first step to correcting it is to get the ID, using the `summary` command with the `:ids` hint.

```console
^[[4mWk ^[[0m ^[[4mDate      ^[[0m ^[[4mDay^[[0m ^[[4mID^[[0m ^[[4mTags         ^[[0m ^[[4m   Start^[[0m ^[[4mEnd^[[0m ^[[4m   Time^[[0m ^[[4m  Total^[[0m
W29 2024-07-17 Wed ^[[38;5;232m@1^[[0m Prepare, Talk 11:44:36   - 1:01:22 1:01:22

                                                         1:01:22
```

The ID is 1, so we will use `@1` when referencing this interval.
Note that the most recent interval is always numbered `@1`, which makes the ID numbers independent of which report you run to see them.

With the ID known, we can make various adjustments to the interval using the following commands:

## Remove extra tags

```console
$ timew untag @1 Prepare Talk
```

## Add missing tag

```console
$ timew tag @1 'Prepare Talk'
```

## Add time to a closed interval

```console
$ timew lengthen @1 20mins
```

## Remove time from a closed interval

```console
$ timew shorten @1 PT5M30S
```

## Move any interval to a new start time

```console
$ timew move @1 8:30am
```

## Split an interval in two

```console
$ timew split @1
```

## Join two intervals together

```console
$ timew join @1 @2
```
