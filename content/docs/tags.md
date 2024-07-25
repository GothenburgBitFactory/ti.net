---
lang: en
title: 'Timewarrior - timew-tags'
viewport: 'width=device-width, initial-scale=1'
hide_toc: true
---

# Tags

Using tags is optional, but when no tags are used, it is difficult to associate the recorded time with the activity.
Use tags to label the recorded time.

A tracked interval may have any number of associated tags.
A tag is either a single UTF-8 word, or a quoted UTF-8 string.
An example:

```console
$ timew start Presentation 'Prepare Slides'
Tracking "Prepare Slides" Presentation
  Started 2016-06-14T08:30:47
  Current                  47
  Total               0:00:00
```

Two tags were used, `Presentation` and `Prepare Slides`, where the latter was quoted because it contains a space.
Without the quotes, that second tag would have been interpreted as two separate tags, `Prepare` and `Slides`.

When stopping tracking, it is not necessary to list the tags:

```console
$ timew stop
Recorded "Prepare Slides" Presentation
  Started 2016-06-14T08:30:47
  Ended                 33:26
  Total               0:02:39
```

Note that the tags are always listed in association with the tracked time.
The summary also contains the tags:

```console
$ timew summary

Wk  Date       Day Tags                           Start     End    Time   Total
--- ---------- --- ---------------------------- ------- ------- ------- -------
W25 2016-06-14 Tue Prepare Slides, Presentation 8:30:47 8:33:26 0:02:39 0:02:39
                                                                        -------
                                                                        0:02:39
```

Now the summary shows the tagged interval, a total for the day, and an overall total.
These commands will be discussed in more detail in other documents.

There is a `tags` command that will list all the tags you have been using:

```console
$ timew tags

Tag            Description
-------------- -----------
Prepare Slides -
Presentation   -
```

Tag descriptions and other tag metadata is not yet supported.
