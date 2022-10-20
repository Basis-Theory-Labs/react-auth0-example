#!/bin/bash
set -euo pipefail

current_directory="$PWD"
cd $(dirname $0)/../universal-login

yarn install --frozen-lockfile
yarn build
cp dist/login.html ../infrastructure/pages/login.html

result=$?

cd "$current_directory"

exit $result