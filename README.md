# React Auth0 Example

This example application shows how to build and deploy a React application as the Universal Login page within an Auth0 tenant.

## Getting Started in Auth0
1. Create a new Machine-to-Machine Application
2. Select the `Auth0 Management API`
3. Select permissions `read:branding`, `update:branding`, and `delete:branding`
4. Copy the following values as environment variables in your CI/CD pipeline:
   1. Domain - `AUTH0_DOMAIN`
   2. Client ID - `AUTH0_CLIENT_ID`
   3. Client Secret - `AUTH0_CLIENT_SECRET`
5. To customize the secret names, edit [`./scripts/deploy-auth0-config.sh`](./scripts/deploy-auth0-config.sh)

## Auth0

This repository defines global Auth0 resources for a tenant.
GitHub Actions uses the [auth0-deploy-cli](https://github.com/auth0/auth0-deploy-cli)
to import resources to Auth0. We are using the directory structure to customize Auth0 via the auth0-deploy-cli
(documentation can be found [here](https://github.com/auth0/auth0-deploy-cli/tree/master/examples/directory)).

## Universal Login
The directory [universal-login](/universal-login) contains a React project that builds the [Auth0 Classic Universal Login](https://auth0.com/docs/authenticate/login/auth0-universal-login/classic-experience).

To run the project locally, use `make start`.

To build the project, run `make build`.

## Deployment

Deployment is done by GitHub actions through the following steps:

1. Build the Universal Login project using Parcel into a single html file;
2. Copy bundled `/universal-login/dist/index.html` to `/infrastructure/pages/login.html`;
3. Deploy Auth0 configuration to the Tenant.
