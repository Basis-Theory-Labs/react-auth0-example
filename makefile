MAKEFLAGS += --silent

deploy-auth0-config:
	./scripts/deploy-auth0-config.sh

build:
	./scripts/build.sh

start:
	./scripts/start.sh