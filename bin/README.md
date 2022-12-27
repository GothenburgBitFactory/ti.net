# Timewarrior Site Repository Tools

The binary in this directory serves to update the site's [tools page](https://timewarrior.net/tools/) (`static/tools-data.json`).

## Manually Updating the Tools Page

On first usage, generate an API token and store it safely for later:

* [GitHub](https://github.com/settings/tokens): requires no special scopes

Then create the `update-tools` script by copying the [sample file](update-tools.sample), and setting the API key there.
This file **must not be committed**!

Now that everything is set up, the `tools-data.json` can be updated by running `update-tools`:

```bash
$ bin/update-tools [OUTPUT]
```

The script will create a Python virtual environment on the first run and install all the necessary components there.

On execution, the script will run `bin/upgrade.py` which scrapes GitHub for repositories containing the keyword `timewarrior` in their name, description, or as topic.
Additionally, tools can be added via `bin/include.json`, or filtered out via `bin/blacklist.json`.
Any modifications to those files can be committed.
The output is stored in `static/tools-data.json` if no `OUTPUT` argument is given.
