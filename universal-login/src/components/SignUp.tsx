import React, { Dispatch, useState } from 'react';
import {
  Box,
  Button,
  Divider,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import { htmlEncode } from "js-htmlencode";
import { SocialSignIn } from './SocialSignIn';
import { WebAuthAlert } from './WebAuthAlert';
import { useWebAuth } from './WebAuthProvider';

interface Props {
  email: string;
  setEmail: Dispatch<string>;
}

export const SignUp = ({ email, setEmail }: Props): JSX.Element => {
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const { signUp, isBusy, setMode } = useWebAuth();

  return (
    <>
      <Typography variant="h5">{'Sign Up'}</Typography>
      <Typography color="text.secondary" variant="body2">
        {'Sign up with'}
      </Typography>
      <SocialSignIn />
      <Divider sx={{ mt: 3 }}>
        <Typography color="text.secondary" variant="body3">
          {'or sign up with'}
        </Typography>
      </Divider>
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
      <TextField
        fullWidth
        id="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        sx={{ mt: 2 }}
        type="password"
        value={password}
      />
      <Box display="flex" mt={2}>
        <TextField
          fullWidth
          id="first-name"
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
          sx={{ mr: 1 }}
          value={firstName}
        />
        <TextField
          fullWidth
          id="last-name"
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
          sx={{
            ml: 1,
          }}
          value={lastName}
        />
      </Box>
      <Button
        color="primary"
        disabled={isBusy}
        fullWidth
        id="btn-sign-up-submit"
        onClick={() =>
          signUp({
            email,
            password,
            givenName: htmlEncode(firstName),
            familyName: htmlEncode(lastName),
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
          {'Already have an account?'}&nbsp;
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
