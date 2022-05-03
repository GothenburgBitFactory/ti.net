---
lang: en
title: 'Timewarrior - File Layout'
viewport: 'width=device-width, initial-scale=1'
---

# File Layout

Make sure you have Timewarrior installed.
Check that it can be found using this command:

    $ timew --version
    {{< current_release version >}}

The version is displayed, all is well.

## Setup

There is no setup with Timewarrior, you simply start using it, and the data directory is automatically created for you.
By default this structure is created in your home directory:

    ~/.timewarrior
    ├── data
    │   ├── 2016-08.data
    │   └── undo.data
    ├── extensions
    └── timewarrior.cfg

You can see that the data is stored in monthly data files (`2016-08.data`), which tend to remain quite small.
Each monthly file is self-contained, and data does not span multiple files.
This means you can archive or delete old data simply by moving/removing older data files. There should never be a situation where you need to manually edit these files.

The `undo.data` file stores transactions for the `undo` command.
Although shown here, it will only exist once you start making changes to the data files.
This file grows indefinitely, and deleting it periodically only affects your ability to `undo` changes.

The extensions directory is where you place either extension scripts, or symlinks to extension scripts.
Initially there are none.

Finally the `timewarrior.cfg` file is where all the configuration settings are stored.
You\'ll access this indirectly using the `config` command, or directly with a text editor.
However, you don\'t need to make any changes now.
