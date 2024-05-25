#!/usr/bin/env python3

from base64 import b64decode
import json
import re

DOC_CHANGES_PATH = "/tmp/venv/bin/changes.json"


def update_files():
    with open(DOC_CHANGES_PATH) as f:
        doc_changes = json.loads(f.read())

    pattern = re.compile(r'doc/man\d/(.*)')
    filenames = [pattern.sub(r'\1', name)
                 for name in doc_changes['changed_filenames']]

    for i in range(len(filenames)):
        with open(f'content/reference/{filenames[i]}', "w") as f:
            f.write(b64decode(doc_changes['encoded_file_contents'][i])
                    .decode('utf-8'))


if __name__ == "__main__":
    update_files()
