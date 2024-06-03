---
lang: en
title: 'How to Install the Development Snapshot'
viewport: 'width=device-width, initial-scale=1'
---

{{< lead >}}This is for those who want to submit pull requests or simply use the latest snapshot release.{{< /lead >}}

Normal users might be interested in [how to install a stable Timewarrior release](../install/).

## Prerequisites

To build Timewarrior you will need these tools:

* [Git](https://git-scm.com)
* [CMake](https://cmake.org)
* Make
* C++ compiler with full C++17 support, currently GCC 8 or Clang 5
* Python 3 (for running the test suite)
* Asciidoctor (for building man pages)

## Cloning the Repository

The repository is [hosted on GitHub](https://github.com/GothenburgBitFactory/timewarrior).
You can clone the repository with

```
$ git clone --recurse-submodules https://github.com/GothenburgBitFactory/timewarrior
```

This clones the repository including the [libshared](https://github.com/GothenburgBitFactory/libshared) submodule.
By default, the `develop` branch is checked out.

### Branch `develop`

The `develop` branch is where the development takes place.
All pull requests must be based on the `develop` branch!

### Branch `stable`

The `stable` branch always points to the last released version.
Older releases are marked by tags.
Release checkouts should only be used for analysis and not for development!

## Build & Install

Build with type `Debug` if you want symbols in the binary for debugging, otherwise choose `Release`.
```
$ cmake -DCMAKE_BUILD_TYPE=Debug .
...
$ make
...
$ sudo make install
```
The `make install` command may not require `sudo` depending on your choice of install location.

### CMake configuration parameters

Add the optional parameter `-DCMAKE_INSTALL_PREFIX=/path/to/your/install/location` to the `cmake` command if you want to install Timewarrior at a location other than `/usr/local`.

Five more variables can be used to customize the installation process:

| Variable        | Default Value     |
|-----------------|-------------------|
| `TIMEW_BINDIR`  | `bin`             |
| `TIMEW_DOCDIR`  | `share/doc/timew` |
| `TIMEW_MANDIR`  | `share/man`       |
| `TIMEW_MAN1DIR` | `share/man/man1`  |
| `TIMEW_MAN7DIR` | `share/man/man7`  |

Those paths are prefixed with the value of `CMAKE_INSTALL_PREFIX`, resulting in the final path.
On FreeBSD or DragonFly BSD systems, the `share/` directory is omitted for the `TIMEW_MAN*DIR` variables.

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
$ ./run_all          # Runs all tests silently > all.log
$ ./problems         # Find errors in all.log
```

The `problems` script shows a report of the full test run.
You can also run each test individually, e.g.:

```
$ ./start.t
```

## Submitting a Pull Request

Before submitting a pull request it is best to talk to us first - make sure you are working on something that is wanted.
[Open a feature request on GitHub](https://github.com/GothenburgBitFactory/timewarrior/issues) and explain your idea.
We will discuss it and provide feedback.

Pull requests will not be applied simply because you did the work, or because it was easy, or because you want it.
Instead, the change has to be considered right for the project.

Please consult the [`CONTRIBUTING.md`](https://github.com/GothenburgBitFactory/timewarrior/blob/develop/CONTRIBUTING.md) in the repository for further details on code contributions.

