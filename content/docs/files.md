---
lang: en
title: 'Timewarrior - File Layout'
viewport: 'width=device-width, initial-scale=1'
hide_toc: true
---

# File Layout

Since version `1.5.0` Timewarrior adheres to the [XDG Base Directory Specification](https://specifications.freedesktop.org/basedir-spec/basedir-spec-latest.html).
This means it stores its data in `${XDG_DATA_HOME}/timewarrior` and its configuration `${XDG_CONFIG_HOME}/timewarrior`.
Usually, these environment variables default to `~/.local/share` and `~/.config`, respectively.

So by default, you will find your Timewarrior data like this in your home directory:

```console
~
├── .config/timewarrior
│   ├── extensions
│   │   └── ...
│   └── timewarrior.cfg
└── .local/share/timewarrior/data
    ├── ...
    ├── {{< date fmt=2006-01 dm=-2 >}}.data
    ├── {{< date fmt=2006-01 dm=-1 >}}.data
    ├── {{< date fmt=2006-01 >}}.data
    ├── tags.data
    └── undo.data
```

You can see that the data is stored in monthly data files (e.g. `{{< date fmt=2006-01 >}}.data`), which tend to remain quite small.
There can be several of them (indicated by the ellipsis), but only for months when you have tracked time.
Each monthly file is self-contained, and data does not span multiple files.
This means you can archive or delete old data simply by moving/removing older data files.
There should never be a situation where you need to manually edit these files.

The `tags.data` file stores information about tags you have used.
When deleted, it will be recreated from the data files.

The `undo.data` file stores transactions for the `undo` command.
It will only exist as soon as you start making changes to the data files.
This file may grow indefinitely, depending on your configuration.
Deleting it only affects your ability to `undo` changes.

The `extensions` directory is where you place either extension scripts, or symlinks to extension scripts.
Initially there are none.

Finally, the `timewarrior.cfg` file is where all the configuration settings are stored.
You access this file indirectly using the `config` command, or directly with a text editor.

## Legacy File Layout

If you have upgraded from a pre `1.5.0` version, Timewarrior will still use the old `~/.timewarrior` directory.
Here you find all the elements from above in a single directory:

```console
~/.timewarrior
├── data
│   ├── ...
│   ├── {{< date fmt=2006_01 dm=-2 >}}.data
│   ├── {{< date fmt=2006_01 dm=-1 >}}.data
│   ├── {{< date fmt=2006_01 >}}.data
│   └── undo.data
├── extensions
│   └── ...
└── timewarrior.cfg
```

You can also enforce this layout by setting the environment variable `TIMEWARRIORDB` to `~/.timewarrior` or any other directory.
