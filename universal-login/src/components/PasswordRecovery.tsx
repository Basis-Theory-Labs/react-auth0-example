import React, { Dispatch } from 'react';
import { Box, Button, Link, TextField, Typography } from '@mui/material';
import { WebAuthAlert } from './WebAuthAlert';
import { useWebAuth } from './WebAuthProvider';

interface Props {
  email: string;
  setEmail: Dispatch<string>;
}

export const PasswordRecovery = ({ email, setEmail }: Props): JSX.Element => {
  const { setMode, changePassword, isBusy } = useWebAuth();

  return (
    <>
      <Typography variant="h5">{'Password Recovery'}</Typography>
      <Typography color="text.secondary" variant="body2">
        {
          'Enter the email address you signed up with below. An email will be sent containing a link to reset your password.'
        }
      </Typography>
      <WebAuthAlert sx={{ mt: 3 }} />
      <TextField
        fullWidth
        id="email"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        sx={{ mt: 3 }}
        type="email"
        value={email}
      />
      <Button
        color="primary"
        disabled={isBusy}
        fullWidth
        id="btn-reset-password"
        onClick={() => changePassword({ email })}
        size="large"
        sx={{ mt: 3 }}
        variant="contained"
      >
        {'Send instructions'}
      </Button>
      <Box alignItems="center" display="flex" justifyContent="center" mt={4}>
        <Typography color="text.secondary" variant="body1">
          {'Ready to Sign In?'}&nbsp;
        </Typography>
        <Link
          component="button"
          onClick={() => setMode('signIn')}
          sx={{ ml: 1 }}
          underline="hover"
        >
          <Typography variant="bodyBold1">{'Sign In'}</Typography>
        </Link>
      </Box>
    </>
  );
};
