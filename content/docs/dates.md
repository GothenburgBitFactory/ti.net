---
lang: en
title: 'Timewarrior - Date Syntax'
viewport: 'width=device-width, initial-scale=1'
---

## Syntax: Dates

Timewarrior supports the following date formats based on ISO-8601:

    <extended-date> [T <extended-time>]   Extended date, optional extended time
    <date> [T <time>]                     Date, optional time
    <extended-time>                       Extended time
    <time>                                Time

    extended-date:
      YYYY-MM-DD                          Year, month, day
      YYYY-MM                             Year, month, 1st
      YYYY-DDD                            Year, Julian day 001-366
      YYYY-WwwD                           Year, week number, day number
      YYYY-Www                            Year, week number, day 1

    extended-time:
      hh:mm[:ss]Z                         Hours, minutes, optional seconds, UTC
      hh:mm[:ss][+/-hh:mm]                Hours, minutes, optional seconds, TZ

    date:
      YYYYMMDD                            Year, month, day
      YYYYWww                             Year, week number, day number
      YYYYDDD                             Year, Julian day 001-366

    time:
      hhmm[ss]Z                           Hour, minutes, optional seconds, UTC
      hhmm[ss][+/-hh[mm]]                 Hour, minutes, optional seconds, TZ

Examples:

    2016-06-09T08:12:00Z
    2016-06T08:12:00+01:00
    2016-06T08:12Z
    2016-161
    2016-W244
    2016-W24
    20160609T081200Z
    2016W24
    8:12:00Z
    0812-0500

In addition to the standard date formats, the following are supported:

    now                                   Current date and time
    today                                 Current date at 0:00:00
    sod, eod                              Current date at 0:00:00 and 23:59:59
    yesterday                             Yesterday at 0:00:00
    tomorrow                              Tomorrow at 0:00:00 (midnight tonight)
    <day-of-week>                         Previous named day at 0:00:00
    <month-of-year>                       Previous 1st of the  month at 0:00:00
    hh:mm[:ss][am|a|pm|p]                 Short time format
    Nst, Nnd, Nrd, Nth                    Previous 1st, 2nd, 3rd ...
    <epoch>                               POSIX time
    later                                 2038-01-18T0:00:00 (Y2K38)
    someday                               2038-01-18T0:00:00 (Y2K38)
    soy, eoy                              Previous start/end of year
    socy, eocy                            Start/end of current year
    soq, eoq                              Previous start/end of quarter
    socq, eocq                            Start/end of current quarter
    som, eom                              Previous start/end of month
    socm, eocm                            Start/end of current month
    sow, eow                              Previous start/end of week
    socw, eocw                            Start/end of current week
    soww, eoww                            Start/end of current work week (mon - fri)
    easter                                Easter Sunday
    eastermonday                          Easter Monday
    ascension                             Ascension
    pentecost                             Pentecost
    goodfriday                            Good Friday
    midsommar                             midnight, 1st Saturday after 20th June
    midsommarafton                        midnight, 1st Friday after 19th June
    juhannus                              midnight, 1st Friday after 19th June

Examples:

    8am
    24th
    monday
    august
