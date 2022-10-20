import React from 'react';
import { Alert } from '@mui/material';
import type { AlertProps } from '@mui/material';
import { useWebAuth } from './WebAuthProvider';

export const WebAuthAlert = (props: AlertProps): JSX.Element => {
  const { alert } = useWebAuth();

  if (!alert) {
    // eslint-disable-next-line unicorn/no-null
    return null;
  }

  return (
    <Alert severity={alert.severity} {...props}>
      {alert.message}
    </Alert>
  );
};
