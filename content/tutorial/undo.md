---
lang: en
title: 'Timewarrior - Undoing what has been done'
viewport: 'width=device-width, initial-scale=1'
hide_toc: true
---

# Undoing what has been done

{{< lead >}}Sometimes you need to take a step back...{{< /lead >}}

In the [previous section](../precise/), you used time information to track your activities more precisely.
However, your last command to start a new time tracking was erroneous:

```console
{{< tutorial_example "undo-summary-before" >}}
```

You intended to start tracking at `12:00` but mistakenly entered `13:00`.
How can you correct this?

Let's have a look at three commands (`cancel`, `undo`, and `delete`), how they can be applied to fix this situation, and where they differ.

## Cancel current time tracking

One way to remove your erroneous interval is to abort the current time tracking.
For this, you can use the `cancel` command:

```console
{{< tutorial_example "undo-cancel" >}}
```

The `cancel` command removes the current open interval from the Timewarrior database.
It therefore only works when there is active time tracking.

A successive call of the `cancel` command will then only inform you that there is nothing more to cancel:

```console
{{< tutorial_example "undo-cancel-again" >}}
```

## Undo recent changes

Another way to correct recent mistakes is the `undo` command.
As the name implies, it undoes the last command you entered.

```console
{{< tutorial_example "undo-undo" >}}
```

Timewarrior keeps a journal of the database changes, which the `undo` command uses to revert them.
With each call of `undo` you go one step back in the history of those database changes.

Be aware that Timewarrior also erases the journal entry for each change it reverts.
If you want to redo it, you will have to re-enter the command that caused it (you might have to rely on your shell history for this).

In your case, calling the `undo` command reverts the creation of the open interval from previous `start` command – just like the `cancel` command would have done.

## Delete previous time tracking

A third option to remove the erroneous interval from the database is the `delete` command, which allows you to delete one or more intervals by their IDs.

To delete the latest interval, you call it with the interval ID `@1` (which always points to the latest interval):

```console
{{< tutorial_example "undo-delete" >}}
```
In contrast to commands `cancel` which only removes active time tracking, and `undo` which reverses the last command, the `delete` command can be used to remove any interval from the database by specifying its ID.

## Wrapping up...

Whatever option you have chosen, looking at our current time tracking again, you see that the erroneous time tracking is gone:

```console
{{< tutorial_example "undo-summary-after" >}}
```

However, you notice that for some intervals the start and end times are not correct.

Do you now have to undo/delete all those commands and re-enter them correctly?
No! Luckily, Timewarrior offers some more commands to modify your recorded intervals.

In the [next section](../corrections/), you will learn how to modify the datetime properties of your recorded intervals.

Or you return to the [Tutorial](..) section and pick another topic of interest.
