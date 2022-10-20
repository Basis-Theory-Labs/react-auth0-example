import { WebAuth } from 'auth0-js';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    auth0Config: any;
  }
}

const createAuthClient = (): WebAuth => {
  if (!window.auth0Config?.auth0Tenant) {
    throw new Error('Invalid Auth0 config.');
  }

  const leeway = window.auth0Config.internalOptions.leeway;

  if (leeway) {
    const convertedLeeway = Number.parseInt(leeway);

    if (!Number.isNaN(convertedLeeway)) {
      window.auth0Config.internalOptions.leeway = convertedLeeway;
    }
  }

  const params = {
    overrides: {
      __tenant: window.auth0Config.auth0Tenant,
      // eslint-disable-next-line camelcase
      __token_issuer: window.auth0Config.authorizationServer.issuer,
    },
    domain: window.auth0Config.auth0Domain,
    clientID: window.auth0Config.clientID,
    redirectUri: window.auth0Config.callbackURL,
    responseType: 'code',
    ...window.auth0Config.internalOptions,
  };

  return new WebAuth(params);
};

export { createAuthClient };
