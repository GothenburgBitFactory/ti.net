# Timewarrior Site Repository

This repository contains the content of [timewarrior.net](https://timewarrior.net), the website for the [Timewarrior](https://github.com/GothenburgBitFactory/timewarrior) project.

## Contributing

To clone this repository, run
```shell
git clone https://github.com/GothenburgBitFactory/ti.net
```

For minor changes, it is perfectly fine to simply change the relevant Markdown files and make a pull request.

To test complex changes, here is how you can run the site locally:
1. Install [Hugo](https://gohugo.io/installation/).
2. Run
   ```shell
   hugo server -D -w
   ```
   This defaults to running a web server on `http://localhost:1313`.
3. Open the site in your browser and verify the changes

## Tools page

Thanks to the community, there are many add-ons available for Timewarrior, listed on the [tools page](https://timewarrior.net/tools).
The content for this page is generated automatically by a GitHub action which runs once a day.
Read below how to get your project listed there.

### Your project is on GitHub?

The GitHub action queries the GitHub API for repositories with the keyword `timewarrior` as _topic_.

If you want your tool to be listed, just add the topic `timewarrior` to its GitHub repository.
The GitHub action should then pick it up on the next run.

### Your project is not on GitHub?

If your project is not on GitHub, you can either create a mirror repository on GitHub and add the topic `timewarrior` to it, or open a [pull request](https://github.com/GothenburgBitFactory/ti.net/pulls) with the necessary details, so it can be added manually.
Note that status information about your project is not kept up-to-date automatically in the latter case!

We are working on including other hosts than GitHub into the automatic crawl.
If you want to help out here, take a look at [this issue](https://github.com/GothenburgBitFactory/ti.net/issues/55).
