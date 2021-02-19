---
lang: en
title: 'Timewarrior - What is it?'
viewport: 'width=device-width, initial-scale=1'
---

## What does Timewarrior do?

Timewarrior tracks and reports time.

Timewarrior is a command line time tracking application, which allows you to record time spent on activities.
You may be tracking your time for curiosity, or because your work requires it.
At its simplest, you tell it to start and stop tracking time:

    $ timew start
    ...
    $ timew stop

That\'s the simple stopwatch capability.

## Why do I need Timewarrior?

We\'re not trying to convince you to track your time.
But if you already do, or want to begin, then Timewarrior aims to be your preferred choice.
You will be able to track your time intelligently, then generate useful visual or tabular reports of that time.
An extension API lets you do anything you want with your data.

Suppose you start the clock at noon on a Friday, then you stop the clock at noon on Tuesday.
Did you really just spend 96 hours on a task?
More likely you only spent 16 hours, or perhaps 8 hours if Monday was a national holiday.

This is why you need Timewarrior.

## How does Timewarrior work?

Timewarrior records time, and associates blocks of time with tags.
The recorded data can be exposed as JSON for any app to consume.

Built-in reports, as well as a set of extension reports will give you plenty of options, in addition to customizing your time reporting using any programming language.
There will be a collection of reports and extensions to download and use.

A Taskwarrior hook script provides integration with the matching `start` and `stop` commands, thereby enabling proper time tracking for Taskwarrior users.
