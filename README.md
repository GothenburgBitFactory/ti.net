# Timewarrior Site Repository

This repository contains the content of the [timewarrior.net](https://timewarrior.net) site.


## To Clone this Repository:

   git clone https://github.com/GothenburgBitFactory/ti.net


## Manually Updating `static/tools-data.json`

On first usage, generate an API token and store it safely for later:

* [GitHub](https://github.com/settings/tokens): requires no special scopes

Then create the `update_tools` script by copying the sample file, and setting the API key there.
This file **must not be committed**!

Now that everything is set up, the `tools-data.json` can be updated by running `update_tools`:

```bash
$ ./update-tools [OUTPUT]
```

The script will create a Python virtual environment on the first run and install all the necessary components there.

On execution, the script will run `bin/upgrade.py` which scrapes Github for repositories containing the keyword `timewarrior` in their name, description, or as topic.
Additionally, tools can be added via `bin/include.json` or filtered out via `bin/blacklist.json`.
Any modifications to those files can be committed.
The output is stored in `static/tools-data.json` if no `OUTPUT` argument is given.
