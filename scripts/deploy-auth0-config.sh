#!/bin/bash
set -euo pipefail

current_directory="$PWD"

cd $(dirname $0)/../infrastructure

if [[ -z "${AUTH0_DOMAIN}" ]]; then
    echo "AUTH0_DOMAIN environment variable is not set"
    exit 1
fi

if [[ -z "${AUTH0_CLIENT_ID}" ]]; then
    echo "AUTH0_CLIENT_ID environment variable is not set"
    exit 1
fi

if [[ -z "${AUTH0_CLIENT_SECRET}" ]]; then
    echo "AUTH0_CLIENT_SECRET environment variable is not set"
    exit 1
fi

a0deploy import --config_file "./config/${ENVIRONMENT}.json" --input_file .

result=$?

cd "$current_directory"

exit $result