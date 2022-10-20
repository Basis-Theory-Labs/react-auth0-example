import type { Auth0Error } from 'auth0-js';

const errorMessageDictionary = {
  /* eslint-disable camelcase */
  invalid_user_password: 'Wrong credentials',
  invalid_password: 'Password is too weak',
  invalid_signup: 'Invalid sign up. Please check the email address.', // Auth0 uses this code to improve security against a potential username enumeration attack.
  email: 'Please enter a valid Email.',
  password: 'Please enter a valid Password.',
  last_name: 'Please enter a valid Last Name.',
  first_name: 'Please enter a valid First Name.',
  genericError:
    'There was an error processing your request. Please try again later or contact us.',
  /* eslint-enable camelcase */
} as const;

type ErrorMessageKey = keyof typeof errorMessageDictionary;

/**
 * Checks if error is of anomaly type,
 * which happens when bot challenge fails
 * because of an invalid login state
 * @param err
 * @return {boolean}
 */
const isAnomalyError = (err: Auth0Error | ErrorMessageKey): boolean =>
  (typeof err !== 'string' &&
    err?.code === 'access_denied' &&
    err?.description === 'Invalid state' &&
    err?.name === 'AnomalyDetected') ??
  false;

/**
 * Gets dictionary message from error type or code. Fallsback
 * to error description and generic message
 * @param error
 */
const getErrorMessage = (error: Auth0Error | ErrorMessageKey): string => {
  if (error) {
    if (typeof error === 'string' && error in errorMessageDictionary) {
      return errorMessageDictionary[error];
    } else if (
      typeof (error as Auth0Error).code === 'string' &&
      (error as Auth0Error).code in errorMessageDictionary
    ) {
      return errorMessageDictionary[(error as Auth0Error).code];
    } else if (typeof (error as Auth0Error).description === 'string') {
      return (error as Auth0Error).description;
    }
  }

  return errorMessageDictionary['genericError'];
};

/**
 * Redirects back to referrer, to solve
 * anomaly state, if redirect_uri param is
 * available
 * @return {boolean}
 */
const redirectToReferrer = (): boolean => {
  try {
    const { redirect_uri: redirectUri } = Object.fromEntries(
      new URLSearchParams(window.location.search).entries()
    );

    if (redirectUri) {
      const url = new URL(redirectUri);

      window.location.href = url.origin;

      return true;
    }
  } catch {
    // parsing error, can't redirect
  }

  return false;
};

export { isAnomalyError, getErrorMessage, redirectToReferrer };
export type { ErrorMessageKey };
