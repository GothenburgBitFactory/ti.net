---
lang: en
title: 'Timewarrior - Interval Syntax'
viewport: 'width=device-width, initial-scale=1'
hide_toc: true
---

# Syntax: Interval

An interval defines a block of time that is tracked.
The syntax for specifying an interval is flexible, and may be one of:

```console
[from] <date>
[from] <date> to/- <date>
[from] <date> for <duration>
<duration> before/after <date>
<duration> ago
[for] <duration>
```

Examples are:

```console
from 9:00
from 9am - 11am
from 9:00:00 to 11:00
from 9:00 for 2h
2h after 9am
2h before 11:00
2h ago
for 2h
```

An interval is said to be 'closed' if there is both a start and end, and 'open' if there is only a start.
