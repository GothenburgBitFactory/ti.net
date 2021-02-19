---
lang: en
title: 'Timewarrior - Configuration'
viewport: 'width=device-width, initial-scale=1'
---

### Configuration

Allows setting and removing configuration values, as an alternative to directly editing your `~/.timewarrior/timewarrior.cfg` file.
For example:

    $ timew config verbose yes
    $ timew config verbose ''
    $ timew config verbose

The first command sets \'verbose\' to \'yes\'.
The second sets it to a blank value which overrides the default value.
The third example deletes the \'verbose\' setting.

When modifying configuration in this way, interactive confirmation will be sought.
To override this confirmation, use the \':yes\' hint:

    $ timew config verbose '' :yes

If no arguments are provided, all configuration settings are shown:

    $ timew config
    verbose = yes
    ...
