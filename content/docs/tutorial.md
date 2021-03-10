---
lang: en
title: 'Timewarrior - Tutorial'
viewport: 'width=device-width, initial-scale=1'
---

This tutorial assumes you have installed Timewarrior.
If not, follow these [download and build instructions](/docs/install).
This is a lengthy and detailed tutorial.
If you wish to learn about Timewarrior in depth, this is the place.
If you prefer your information in smaller pieces, use the [online docs](/docs).

## Setup

As a new Timewarrior user, there is no configuration needed.
Once you have installed the software, the first time you run it, a data/configuration directory is created for you if necessary, and if you allow this action.

![](/images/tutorial1.png)

You are told that there is no active time tracking, and that\'s right, because we\'ve done nothing yet.

![](/images/tutorial2.png)

By default a `.timewarrior` directory is created in your home directory, and contains a sub-directory for data, and another for extensions.
There is also an empty configuration file created.
Just like Taskwarrior, an empty configuration file means we are using all the default settings.
If you want to use an alternate location, you can either symlink it to `~/.timewarrior`, or use the `TIMEWARRIORDB` environment variable to specify any location.

## Stopwatch

The most basic tracking can be done by using the stopwatch features.
Just like a stopwatch, you start and stop a clock, and you can see the elapsed time.
Start the clock when you begin work, and stop it when you are done.
First let\'s see if the clock is running:

![](/images/tutorial3.png)

No it\'s not.
You can always run timewarrior with no arguments to see if the clock is running, and no data is modified.
Let\'s start the clock.

![](/images/tutorial4.png)

The clock is now running.
In reality there is no clock and all that happened was that the start time was recorded, so don\'t be concerned about using system resources, as none are being used.
Now when we check, we see a summary of the time recorded so far:

![](/images/tutorial5.png)

Once our work is complete, we stop the clock, and look at the summary.

![](/images/tutorial6.png)

The summary report shows time that was tracked today by default.

There is a `continue` command that re-starts the previous tracking, and is useful if you stopped the clock during lunch, or overnight.

![](/images/tutorial7.png)

See how every time the clock is started, there is a new line in the `summary` report?

It is important to note that it is possible, and quite likely, that you will start the clock and leave it running by mistake.
This is in fact one of the most annoying problems with any time tracking solution that relies on human interaction.
While some tools will detect inactivity and stop the clock for you, Timewarrior does not.
Instead it deals with this problem in two ways, first by making it easy to correct tracked time, and second by way of exclusions, which we will cover later.

## Tags

The examples so far did not use tags.
Tags are optional, but when you do make use of tags, you start tracking time spent on *different* activities.

![](/images/tutorial8.png)

This example is tracking time using two different tags.
The first is `Using Tags`, the second is `Software`.
The first tag is two words, and because of the space between them, the quotes are needed to keep those two words together in one tag.
The second tag is a single word and needs no quotes.

![](/images/tutorial9.png)

You can see that using tags is useful, but optional.
Once you are using tags, you can use them to filter reports, such as the `summary` report.

![](/images/tutorial10.png)

There is a `tags` command, which will show you all the tags you have used.

![](/images/tutorial11.png)

You may wonder how is that 'Description' column in the report used?
It is the first example of tag metadata, which you can configure.

![](/images/tutorial12.png)

This is not currently used, but does represent how Timewarrior will be extended to include tag metadata in future releases.

## Help

Although we have just begun, it is important to mention the built-in help system.
Let\'s look at the help for the `continue` command.

![](/images/tutorial13.png)

You can see that the help system contains examples, and introduces new commands and other help topics.
From the help text, we learn that the `continue` command will not only resume tracking but use the same set of tags.

In addition to the built-in help, there is a man page which contains the same information plus a lot more.

![](/images/tutorial14.png)

## Historical

We have seen how to use the stopwatch feature, and combine it with tags.
Additionally we can record time *ex post facto*.
So to track time I spent earlier in the day (but forgot to record), I use the `track` command.

![](/images/tutorial15.png)

When Timewarrior sees a time like `9:00` it always assumes it is in the past, because Timewarrior is a tool for recording what you have done or are doing, and is not a forward-looking planning tool.
This is the opposite of Taskwarrior, which always looks forward, because tasks are generally going to be completed in the future.

There are other ways to specify time in the past, for example:

![](/images/tutorial16.png)

And there are many more, which can be seen in the help system.

![](/images/tutorial17.png)

In addition to time, you can specify date and time, so one equivalent command would use an ISO datetime.

![](/images/tutorial18.png)

Again, you can see all the date formats listed using the help system.

![](/images/tutorial19.png)

Using date synonyms you can track time for a whole month.

![](/images/tutorial20.png)

But that command will track all 30 days, all 24 hours each in June, including weekends, holidays and lunch breaks.
Or does it?
This is discussed later.

## Hints

Many commands support hints, which are words that start with a `:` and are convenient representations to save time.
Here is the `:quiet` hint, being used to suppress all feedback:

![](/images/tutorial21.png)

The `:quiet` hint is the same as disabling verbosity, but is easier to specify, and temporary.
Another hint is `:yes`, which is used to override confirmation, by automatically answering 'yes' to the question.

Some hints are shortcuts specifiers for date ranges.
For example, the `:yesterday` hint is a date range representing all day yesterday.
Similarly, `:lastweek` is also a date range.
That makes the following two commands identical (assuming that today is the 6th):

![](/images/tutorial22.png)

The help system lists all the supported hints.

![](/images/tutorial23.png)

## Charts

Timewarrior has a built-in chart that can show blocks of time by day.
This is a text-based chart so it is not high resolution and has no drill-down capabilities.
(Incidentally such a chart would be possible using the extension API, but by default, Timewarrior just has simple charting).

There are three charts, which are really just three variations of the same chart, all controlled by configuration.
We\'ll take a look at these charts, but first we need some sample data to look at.
Let us first track a couple of days of data, to illustrate how the charts work.

![](/images/tutorial24.png)

We have tracked six separate intervals, and the summary report shows just that.

![](/images/tutorial25.png)

The summary report gives accurate time values, so this should be the preferred report for this reason.
Let\'s look at the first chart, the `day` report.

![](/images/tutorial26.png)

Like the `summary` report, the `day` report shows data for today by default.
You can make it show multiple days like this:

![](/images/tutorial27.png)

A better option is to use the `week` report.

![](/images/tutorial28.png)

There is also a `month` report that looks the same, but is longer.

Again, the only difference between these reports is configuration, and you can override any of this to customize these charts.
See `man timew` for full configuration details.

## Reports

We have seen the `summary` and `tags` reports, but there is another useful report that shows the untracked time in the day.

![](/images/tutorial29.png)

The `gaps` report is useful for finding time in the day where you were not tracking time.
In the example the gaps correspond well to time that was not spent working, so there is no need for adjustments.

All reports in Timewarrior can be filtered by time interval and tags, but all have a default time interval.

## Themes

Timewarrior has color themes that are mostly used by the charts to color the different parts of the display.
To use a color theme, add this line to your `~/.timewarrior/timewarrior.cfg` file with a text editor:

    import /path/to/themes/dark_green.theme

Note that the path `/path/to/themes` is a placeholder.
Your installation will likely use a path more like this, but it should be noted that this path varies depending on platform and the wishes of the packager.

    import /usr/local/share/doc/timew/doc/themes/dark_green.theme

There are a few simple themes available initially, but this collection will grow and improve.
Timewarrior is also likely to make greater use of themes in future releases.

## Holidays

Timewarrior can also make use of Holiday files.
In the same way that a color theme was imported into the configuration file, a holiday file can also be used:

    import /usr/local/share/doc/timew/doc/holidays/holidays.en-US

Again, that path is platform-dependent, so use the appropriate path for your system.

When a holiday file is used, Timewarrior knows that there are some days in the year that are not work days.
While this changes nothing about your ability to track time, it does affect some automatic tracking features, which we will cover next.

There is a `README` document and a `refresh` script provided with the holiday file, which explains how to update the holiday data, and how to obtain holiday files for other locales.
Note that only the `en-US` locale is included by default.

## Exclusions

Exclusions are a very powerful Timewarrior feature, and make automatic time tracking possible.
An exclusion - much like a holiday - represents a block of time where you do not expect to work.

The simplest exclusion is a day off work.
Suppose you took a day off, on August 4th.
You can define this day as an exclusion.

![](/images/tutorial30.png)

The date must be formatted in this precise way.
Note the use of the `:yes` hint to override confirmation.
Now we see on the `week` report that the day is marked as non-working.

![](/images/tutorial31.png)

Similarly, if you worked on a holiday, you can define that day as a work day, and therefore available for automatic tracking.

![](/images/tutorial32.png)

Here we have (re)defined January 1st as a working day, which was previously defined as a holiday in the `en-US` locale.

In addition to whole days working or not working, you can define exclusions for each day of the week to represent your work schedule.
Suppose you work a regular weekly schedule, that starts at 8:30am, Monday to Friday, with weekends off.
You take a 45-minute lunch break each day, and leave work at 5:30pm.
On Fridays you leave early.

![](/images/tutorial33.png)

You can view this in the `week` report, and here we will use the `:blank` hint to remove all the tracked data from the report, leaving only the exclusions.

![](/images/tutorial34.png)

Your whole work week is defined.
While you are not at all constrained by this defined schedule, it does control automatic time tracking.

## Automatic Tracking

Once you have defined exclusions for your workweek, the tracked time will conform to the set boundaries.
Suppose this is our work week:

![](/images/tutorial35.png)

There is no tracked time, but there are 40:15:00 hours available to be tracked.
If we worked the whole week on our `Research` project, we can track all that time with one command:

![](/images/tutorial36.png)

We see that the exclusions are automatically subtracted from the time, and fill the whole week, leaving no available time.

Note that this example tracks up until 'now', and as this tutorial is being written on a weekend, you can see that the tracking stops on Friday, and does not continue into the weekend.
If this was being done on the Friday, at 16:23, then the `week` report would stop precisely at 16:23, because it is an open interval.

## Corrections

With or without the use of [exclusions](#exclusions), there is always the need to make corrections to the tracked time.
As mentioned earlier, it is quite likely that the clock would be left running by mistake, or that the tracking was started or stopped at the wrong time.
We will create some incorrect time tracking, and then correct it.

![](/images/tutorial37.png)

I actually started work at 8:30am, but forgot to start the clock at the beginning.
I also did not take a break at 10am, I again forgot to start the clock.
Then I was working on `projectC` since about 11am, but didn\'t record it properly.

These are typical mistakes, and are easy to fix, as there are several commands for making adjustments like this.

To make an adjustment to an interval, we need first to identify that interval.
The `summary`, `day`, `week` and `month` reports all support the `:ids` hint for this purpose.
If we take a look at the `summary` report with the hint:

![](/images/tutorial38.png)

Notice how the intervals now have IDs: `@3` for the oldest interval.
Let\'s make some corrections:

![](/images/tutorial39.png)

There is still a problem, interval `@2` needs to occupy the slot between 10am and 11am.
There is a `:fill` hint that does this for us.

![](/images/tutorial40.png)

The `@1` ID always represents the newest interval.
Note that if my corrections have changes the order, then the IDs would be different, and you would need to run `timew summary :ids` again to see the new IDs.

Finally, I actually stopped for lunch at 12:30 for 45 minutes:

![](/images/tutorial41.png)

Let\'s keep going, even though this example has already exceeded credibility, to demonstrate more.
I need to change that `projectB` interval to use `projectB1` and `projectB2` tags, and divide the time between the two.
We will split the interval, the re-tag it.

![](/images/tutorial42.png)

Notice how the `split` command just divided `@3` into two even-sized intervals.
But we\'re still not done - I brought lunch to work and ate at my desk while working so let\'s eliminate that lunch break.

![](/images/tutorial43.png)

Now whether this report now accurately represents your day, or whether it is a fiction you need to report (no judgement here), Timewarrior supports it, but let\'s stop - the example can\'t take much more.

We saw the `stop` command with a specific end time, the `move`, the `lengthen`, `split`, `join`, `tag` and `untag` commands and the `:fill` hint being used.
There are also the `shorten`, `cancel`, and `delete` commands.
See `man timew` for full details.

## Extensions

Timewarrior reports are not sophisticated, they are minimally functional and focus on simply displaying the data.
What if you need a report broken down by tags, with weekly subtotals?

Timewarrior supports extension reports, via the [extension API](/docs/api).
This is mechanism that allows you to write a report using any language you choose.
Don\'t like the way the summary report shows the data?
Write your own.
Better yet, share the result, and we\'ll build a list of 3rd party reports.

We\'ve included one extension report with Timewarrior, and will add more.
The one provided is:

![](/images/tutorial44.png)

Again, that path is platform-dependent, so use the appropriate path for your system.
Note that this is a Python script, and to use this you\'ll need to have Python installed.

To install and use this extension, or any other, simply copy it to your `~/.timewarrior/extensions` directory and make sure it is executable.

![](/images/tutorial45.png)

## Caution

**Extensions are dangerous things**.
As with any downloaded program, be careful - you are giving execute permission to software that may harm you.

Fortunately this is the world of open source, and while that does not mean the software is safe, it does mean you have the necessary access to audit the code and prove it is safe.
If you find the code safe, use it.
If you are unsure, don\'t.

Once the extension is in the `extensions` directory, and executable, it should be visible to the `extensions` command.

![](/images/tutorial46.png)

Additionally, the `diagnostics` command will report the presence and status of this extension.

Once an extension is ready to use, it is used in the same way that the `summary` report is used, with date range and/or tag filtering.
The command you use is compared to the name of the script, and if unique, is a match.
All of these commands are equivalent:

![](/images/tutorial47.png)

Here is the report run with no filter, and therefore against all recorded data, which is not much in this example.

![](/images/tutorial48.png)

Extensions are not restricted to emitting text, they could for example output, DOT, PDF, PNG, JPEG \...

## Integration

Timewarrior integrates with Taskwarrior by means of a Taskwarrior `on-modify` hook script.
Once installed, this means that whenever a task is active, Timewarrior is used to track the time.

Find instructions on how to install & use it on its [dedicated page](/docs/taskwarrior).

## End

You\'ve made it to the end of the tutorial.
You now know more about Timewarrior than most users.
If you have feedback, we are interested in hearing it, because open source is a collaborative effort, and you are part of that.

- [Setup](#setup)
- [Stopwatch](#stopwatch)
- [Tags](#tags)
- [Help](#help)
- [Historical](#historical)
- [Hints](#hints)
- [Charts](#charts)
- [Reports](#reports)
- [Themes](#themes)
- [Holidays](#holidays)
- [Exclusions](#exclusions)
- [Automatic Tracking](#automatic)
- [Corrections](#corrections)
- [Extensions](#extensions)
- [Integration](#integration)
