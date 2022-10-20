import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Content } from './components/Content';
import { WebAuthProvider } from './components/WebAuthProvider';

import theme from './styles/theme';

const App = (): JSX.Element => (
  <WebAuthProvider>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Content />
    </ThemeProvider>
  </WebAuthProvider>
);

export default App;
