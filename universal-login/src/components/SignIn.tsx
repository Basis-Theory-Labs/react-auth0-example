import React, { Dispatch, useState } from 'react';
import {
  Box,
  Button,
  Divider,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import { SocialSignIn } from './SocialSignIn';
import { WebAuthAlert } from './WebAuthAlert';
import { useWebAuth } from './WebAuthProvider';

interface Props {
  email: string;
  setEmail: Dispatch<string>;
}

export const SignIn = ({ email, setEmail }: Props): JSX.Element => {
  const [password, setPassword] = useState('');
  const { login, isBusy, setMode } = useWebAuth();

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === 'Enter') {
      login({
        username: email,
        password,
      });
    }
  };

  return (
    <>
      <Typography variant="h5">{'Sign In'}</Typography>
      <Typography color="text.secondary" variant="body2">
        {'Sign in with'}
      </Typography>
      <SocialSignIn />
      <Divider sx={{ mt: 3 }}>
        <Typography color="text.secondary" variant="body2">
          {'or sign in with'}
        </Typography>
      </Divider>
      <WebAuthAlert sx={{ mt: 3 }} />
      <TextField
        fullWidth
        id="email"
        onChange={(e) => setEmail(e.target.value)}
        onKeyDown={(e) => onKeyDown(e)}
        placeholder="Email"
        sx={{ mt: 3 }}
        type="email"
        value={email}
      />
      <TextField
        InputProps={{
          endAdornment: (
            <Link
              component="button"
              onClick={() => setMode('resetPassword')}
              underline="hover"
            >
              <Typography component="span" sx={{ ml: 2 }} variant="body2">
                {'Forgot?'}
              </Typography>
            </Link>
          ),
        }}
        fullWidth
        id="password"
        onChange={(e) => setPassword(e.target.value)}
        onKeyDown={(e) => onKeyDown(e)}
        placeholder="Password"
        sx={{ mt: 2 }}
        type="password"
        value={password}
      />
      <Button
        color="primary"
        disabled={isBusy}
        fullWidth
        id="btn-login"
        onClick={() =>
          login({
            username: email,
            password,
          })
        }
        size="large"
        sx={{ mt: 3 }}
        variant="contained"
      >
        {'Continue'}
      </Button>
      <Box alignItems="center" display="flex" justifyContent="center" mt={3}>
        <Typography color="text.secondary" variant="body1">
          {"Don't have an account?"}&nbsp;
        </Typography>
        <Link
          component="button"
          onClick={() => setMode('signUp')}
          sx={{ ml: 1 }}
          underline="hover"
        >
          <Typography variant="body1">{'Sign Up'}</Typography>
        </Link>
      </Box>
    </>
  );
};
