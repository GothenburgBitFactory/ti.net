---
lang: en
title: 'Timewarrior - Syntax'
viewport: 'width=device-width, initial-scale=1'
---

### Command Syntax

You can see the full command syntax with the `help` command:

    $ timew help

    Usage: timew [--version]
           timew cancel
           timew config [<name> [<value | '']]
           timew continue
           timew day [<interval>] [<tag> ...]
           timew diagnostics
           timew export [<interval>] [<tag> ...]
           timew extensions
           timew gaps [<interval>] [<tag> ...]
           timew help [<command> | interval | hints | date | duration]
           timew lengthen @<id> [@<id> ...] <duration>
           timew month [<interval>] [<tag> ...]
           timew move @<id> <date>
           timew [report] <report> [<interval>] [<tag> ...]
           timew shorten @<id> [@<id> ...] <duration>
           timew show
           timew split @<id> [@<id> ...]
           timew start [<date>] [<tag> ...]
           timew stop [<tag> ...]
           timew summary [<interval>] [<tag> ...]
           timew tag @<id> [@<id> ...] <tag> [<tag> ...]
           timew tags
           timew track <interval> [<tag> ...]
           timew untag @<id> [@<id> ...] <tag> [<tag> ...]
           timew week [<interval>] [<tag> ...]

    Additional help:
           timew help <command>
           timew help interval
           timew help hints
           timew help date
           timew help duration

    Interval:
           [from] <date>
           [from] <date> to/- <date>
           [from] <date> for <duration>
           <duration> before/after <date>
           <duration> ago
           [for] <duration>

    Tag:
           Word
           'Single Quoted Words'
           "Double Quoted Words"
           Escaped\ Spaces

    Configuration overrides:
           rc.<name>=<value>
