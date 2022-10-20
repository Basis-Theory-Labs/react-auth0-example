#!/bin/bash
set -euo pipefail

current_directory="$PWD"

cd $(dirname $0)/../universal-login

yarn install --frozen-lockfile
yarn start

result=$?

cd "$current_directory"

exit $result