---
lang: en
title: 'Timewarrior - Holidays'
viewport: 'width=device-width, initial-scale=1'
---

### Holidays

Timewarrior references holiday files and uses them when automatically
filling in tracked time.
Holiday files are optional, but can improve
your experience.

To use holiday files, you need a line added to your
`~/.timewarrior/timewarrior.cfg` file, like this:

    import /usr/local/share/doc/timew/holidays/holidays.en-US

That path is platform-dependent, so yours may differ.

#### Updates

A script is provided, named `refresh` with the holiday files.
Its
purpose is to update your holiday files.
It should be run like this to
update your files:

    $ cd /usr/local/shared/doc/timew/holidays
    $ ./refresh
    ...

That command will refresh the data in all the holiday files in that
directory.
This is done by downloading a JSON file from
<https://holidata.net> and formatting it for Timewarrior.

Holidata.net has data for [many locales](https://holidata.net/map.html),
and is still growing.
Please request any missing locales that you need.

To add a new holiday file, simply run the `refresh` script for a
specific locale:

    $ cd /usr/local/shared/doc/timew/holidays
    $ ./refresh --locale fr-FR
    ...
