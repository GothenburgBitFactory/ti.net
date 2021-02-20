---
lang: en
title: 'Timewarrior - Work Week'
viewport: 'width=device-width, initial-scale=1'
---

## Work Week

Timewarrior can do more for you if it knows your work patterns.
Currently this means your daily work schedule.
An example will make this clear.

Suppose it is Monday at \~3pm.
You begin working on a new task, and start tracking time:

    $ timew start 'Outline Talk' Conference
    Tracking Conference "Outline Talk"
      Started 2016-06-20T15:01:24
      Current                  24
      Total               0:00:00

You work for a while, then at 5pm you leave your office.
On Tuesday morning you complete the outline, and stop tracking time:

    Recorded Conference "Outline Talk"
      Started 2016-06-20T15:01:24
      Ended           21T09:28:14
      Total              18:26:50

Oh no, 18 and a half hours have elapsed! That\'s not right, because you really only spent about two and a half hours working.
But you left the clock running all night.
This is a very common problem with time tracking; we are simply not good at remembering to start and stop the clock.

But if you leave work at 5pm every day, and start at 9am, you can capture this in Timewarrior configuration, and it will automatically do the right thing.
Suppose you also don\'t work on weekends, and you take lunch on weekdays for 30 minutes at 12:30pm.
Add the following to your `~/.timewarrior/timewarrior.cfg` configuration file, using a text editor:

    define exclusions:
      monday    = <9:00 12:30-13:00 >17:00
      tuesday   = <9:00 12:30-13:00 >17:00
      wednesday = <9:00 12:30-13:00 >17:00
      thursday  = <9:00 12:30-13:00 >17:00
      friday    = <9:00 12:30-13:00 >17:00
      saturday  = >0:00
      sunday    = >0:00

The indentation in the configuration file is important, so be sure to match the indentation of the example.
Also be sure to leave a blank line before and after the settings shown.
This construct is one of the first \'rules\' supported by Timewarrior.
So far it is really just configuration settings, but you\'ll notice more rules, and more sophisticated rules appear as more releases are made.

With your work week defined, as above, the example would be recorded as only `2:26:50`, which is not only correct, but you did not have to remember to stop and restart the clock.
