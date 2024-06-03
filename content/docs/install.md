---
lang: en
title: 'How To Install Timewarrior'
viewport: 'width=device-width, initial-scale=1'
---

{{< lead >}}You can install Timewarrior either via packages or manually by building the release tarball.{{< /lead >}}

If you are a developer, you might be interested in [how to install the development snapshot](../install-dev/).

## Distributions

The Gothenburg Bit Factory does not maintain any packages, but thanks to the community there are binary packages available:

{{< distribution_table >}}

Note that packages are the responsibility of the respective maintainers.
Please contact them in case of outdated or missing packages.

## Manual installation
If there is no package available for your distribution, you can build and install Timewarrior easily yourself.

### Prerequisites

To build Timewarrior from the tarball you will need these tools:

* [CMake](https://cmake.org)
* Make
* C++ compiler with full C++17 support, currently GCC 8 or Clang 5
* Python 3 (optional, only required for running the test suite)
* Asciidoctor (optional, only required for re-building man pages)

### Download

The release tarballs are [hosted on GitHub](https://github.com/GothenburgBitFactory/timewarrior/releases).
You can download the tarball with `curl`, as an example of just one of many ways to download the tarball.

```
$ curl -L -O {{< current_release url >}}
```

### Build & Install

Expand the tarball, build Timewarrior, and install it.
This copies files into the right place, and installs man pages.

```
$ tar xzf {{< current_release tarball >}}
$ cd {{< current_release name >}}
$ cmake -DCMAKE_BUILD_TYPE=Release .
...
$ make
...
$ sudo make install
```

Timewarrior is now ready to use.
For your first steps your might want to read the [tutorial](../tutorial/) or try the [`help`](../../reference/timew-help.1/) command.
