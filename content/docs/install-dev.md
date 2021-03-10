---
lang: en
title: 'How to Install the Development Snapshot'
viewport: 'width=device-width, initial-scale=1'
---

{{< lead >}}This is for those who want to submit pull requests or simply use the latest snapshot release.{{< /lead >}}

Normal users might be interested in [how to install a stable Timewarrior release](/docs/install).

## Prerequisites

To build Timewarrior you will need these tools:

* [git](https://git-scm.com)
* [cmake](https://cmake.org)
* make
* C++ compiler with full C++11 support, currently gcc 4.7+ or clang 3.3+ 
* Python 3 (for tests)

## Cloning the Repository

The repository is [hosted on github](https://github.com/GothenburgBitFactory/timewarrior).
You can clone the repository with

```
$ git clone --recurse-submodules https://github.com/GothenburgBitFactory/timewarrior
$ cd timewarrior
```

This clones the repository including the [libshared](https://github.com/GothenburgBitFactory/libshared) submodule.
By default, the `dev` branch is checked out.

### Branch `dev`

The dev branch is where the development takes place.
All pull requests must be based on the dev branch!

### Branch `master`

The master branch always points to the last released version.
Older releases are marked by tags.
Release checkouts should only be used for analysis and not for development!

## Build & Install

Build with type `Debug` if you want symbols in the binary for debugging.
```
$ cmake -DCMAKE_BUILD_TYPE=Debug .
...
$ make
...
$ sudo make install
```

Add the optional parameter `-DCMAKE_INSTALL_PREFIX=/path/to/your/install/location` to the `cmake` command if you want to install Timewarrior at a location other than`/usr/local`.
The `make install` command may not require `sudo` depending on your choice of install location.

## Running the Test Suite

There are C++, Python and Bash tests, build and run them:
```
$ make test
```
Alternatively you can switch to the `test` directory and build and run the tests there:
```
$ cd test
$ make VERBOSE=1     # Shows details
...
$ ./run_all          # Runs all tests silently &gt; all.log
$ ./problems         # Find errors in all.log
```

The `problems` script shows a report of the full test run.
You can also run each test individually, e.g.:

```
$ ./start.t
```

## Submitting a Pull Request

Before submitting a pull request it is best to talk to us first - make sure you are working on something that is wanted.
[Open a feature request on github](https://github.com/GothenburgBitFactory/timewarrior/issues) and explain your idea.
We will discuss it and provide feedback.

Pull requests will not be applied simply because you did the work, or because it was easy, or because you want it.
Instead, the change has to be considered right for the project.

Please consult the [`CONTRIBUTING.md`](https://github.com/GothenburgBitFactory/timewarrior/blob/dev/CONTRIBUTING.md) in the repository for further details on code contributions.

