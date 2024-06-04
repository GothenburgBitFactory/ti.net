#!/usr/bin/env python3

from base64 import b64decode
import json
import re

DOCS_PATH = "/tmp/venv/bin/changes.json"


def update_files():
    with open(DOCS_PATH) as f:
        docs = json.loads(f.read())

    pattern = re.compile(r'doc/man\d/(.*)')
    filenames = [pattern.sub(r'\1', n) for n in docs['doc_filenames']]

    for i in range(len(filenames)):
        with open(f'content/reference/{filenames[i]}', "w") as f:
            file_contents = docs['encoded_file_contents'][i]
            f.write(b64decode(file_contents).decode('utf-8'))


if __name__ == "__main__":
    update_files()
