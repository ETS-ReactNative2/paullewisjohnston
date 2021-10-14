import React from 'react'
import { render } from 'react-dom'
import App from './App'
import { ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import { Theme } from './Theme';

const theme = responsiveFontSizes(Theme);

render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
  ,document.getElementById('root'))
