'use client';

import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import { ReactNode } from 'react';
import theme from './theme';

type Props = {
  children: ReactNode;
};
const ThemeProvider = ({ children }: Props) => {
  return (
    <MuiThemeProvider theme={theme}>
      {children}
    </MuiThemeProvider>
  );
}

export default ThemeProvider