---
lang: en
title: 'Timewarrior - Hints'
viewport: 'width=device-width, initial-scale=1'
hide_toc: true
---

# Hints

Timewarrior supports hints, which are single-word command line features that start with a colon like this:

```console
:week
```

Hints serve several purposes.
This example is a shortcut for the date range that defines the current week.
Other hints, such as:

```console
:quiet
```

are ways to control the behavior of Timewarrior, in this case eliminating all forms of feedback, for purposes of automation.
The supported hints are:

```console
:quiet         Turns off all feedback. For automation

:debug         Runs in debug mode, shows many runtime details
:yes           Overrides confirmation by answering 'yes' to the questions

:color         Force color on, even if not connected to a TTY
:nocolor       Force color off, even if connected to a TTY
:blank         Leaves tracked time out of a report
:fill          Expand time to fill surrounding available gap
:adjust        Automatically correct overlaps
:ids           Displays interval ID numbers in the summary report
```

Range hints provide convenient shortcuts to date ranges:

```console
:yesterday     The 24 hours of the previous day
:day           The 24 hours of the current day
:week          This week
:month         This month
:quarter       This quarter
:year          This year
:lastweek      Last week
:lastmonth     Last month
:lastquarter   Last quarter
:lastyear      Last year
```
