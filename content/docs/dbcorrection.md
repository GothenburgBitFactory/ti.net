---
lang: en
title: 'Timewarrior - DB Correction'
viewport: 'width=device-width, initial-scale=1'
---

# Timewarrior Database Correction Script

This is the correction script for the interval flattening bug (TI-102).
The script exports all intervals stored, purges the database, and re-enters the intervals.

Timewarrior 1.1.1 or higher correctly enters intervals.

Use this script when you have used

-   Timewarrior earlier than version 1.1.1
-   Exclusions

If none of the above applies, you probably do not need to run this script.

This script will export your stored intervals, purge your database and re-enter your data such that exclusions will be applied and properly written to the database.

***!!! YOU ARE STRONGLY ADVISED TO BACKUP YOUR TIMEWARRIOR DATABASE BEFORE PROCEEDING !!!***

## Running the Correction Script

After making a backup copy of your Timewarrior data by making a copy of all the files in `~/.timewarrior/data`, run this:

```
$ curl -O https://taskwarrior.org/download/timew-dbcorrection.py
$ python timew-dbcorrection.py
...
```

The script may run for a few minutes, depending on your machine and your database complexity.
It shows a progress bar.
Do not kill the script or you will need to restore from your backup.
