import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import pink from '@material-ui/core/colors/pink';
import { ParallaxProvider } from 'react-scroll-parallax';


console.log(grey)

const theme = createMuiTheme({
  palette: {
    primary: {
      light: grey [50],
      main: grey[50],
      dark: grey[50],
      contrastText: grey [50],
    },
    secondary: {
      light: pink[300],
      main: pink[500],
      dark: pink[700],
      contrastText: grey[50],
    },
    }
})



ReactDOM.render(
  <MuiThemeProvider theme={theme}>
  <ParallaxProvider>
  <App />
  </ParallaxProvider>
  </MuiThemeProvider>,
   document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
