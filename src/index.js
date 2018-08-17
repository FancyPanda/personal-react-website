import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'typeface-karla';
import {
  MuiThemeProvider, createMuiTheme
}
from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#13293d',
      contrastText: '#fff',
    },
    secondary: {
      main: '#006494',

      contrastText: '#fff',
    },
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '"Karla"',
    ].join(','),
  },
});

ReactDOM.render( < MuiThemeProvider theme = {
      theme
    } > < App / > < /MuiThemeProvider>, document.getElementById('root'));
