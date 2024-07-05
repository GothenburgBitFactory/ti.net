#!/usr/bin/env python3

import re
import os

DOCS_PATH = '../content/reference'


def main():
    for file_name in os.listdir(DOCS_PATH):
        file_path = os.path.join(DOCS_PATH, file_name)
        with open(file_path, 'r') as fi, open(f'{file_path}_new', 'w') as fo:
            for line in fi:
                line = re.sub(r'(.*)\*\*(timew-.*)\*\*\((\d)\)(.*)',
                              r'\1link:../../reference/\2.\3[**\2**(\3)]\4',
                              line)
                fo.write(line)

        os.remove(file_path)
        os.rename(f'{file_path}_new', file_path)


if __name__ == "__main__":
    main()
