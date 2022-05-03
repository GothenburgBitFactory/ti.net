---
lang: en
title: 'Timewarrior - timew-track'
viewport: 'width=device-width, initial-scale=1'
hide_toc: true
---

# Track

The track command is used to add tracked time in the past.
Perhaps you
forgot to record time, or are just filling in old entries.
For example:

    $ timew track :yesterday 'Training Course'
    $ timew track 9am - 11am 'Staff Meeting'

Note that the track command expects a closed interval (start and end
time), when recording.
If a closed interval is not provided, the
\'track\' command behaves the same as the \'start\' command.
