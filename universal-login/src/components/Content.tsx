import React, { useState } from 'react';
import { Card, Container } from '@mui/material';
import { SignIn } from './SignIn';
import { SignUp } from './SignUp';
import { PasswordRecovery } from './PasswordRecovery';
import { useWebAuth } from './WebAuthProvider';

export const Content = (): JSX.Element => {
  const { mode } = useWebAuth();
  const [email, setEmail] = useState('');

  return (
    <Container component="main" maxWidth="md">
      <Card
        variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
        {mode === 'signUp' ? (
          <SignUp email={email} setEmail={setEmail} />
        ) : (
          <>
            {mode === 'signIn' ? (
              <SignIn email={email} setEmail={setEmail} />
            ) : (
              <PasswordRecovery email={email} setEmail={setEmail} />
            )}
          </>
        )}
      </Card>
    </Container>
  );
};