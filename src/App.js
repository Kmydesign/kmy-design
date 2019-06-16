import React, { Component } from 'react';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Login from './Components/Login';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Icon from '@material-ui/core/Icon';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import logo from './k_logo.png';
import './App.css';


const styles = theme => ({
  container: {
    backgroundColor: 'white',
    color: 'white',
    width: '75%',
    height: 5 * theme.spacing.unit
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

class App extends Component {
  render() {
    return (

      <div className="App">
        <header className="App-header">
        <div>
        <NavBar />
       </div>
          <img src={logo} className="App-logo" alt="logo" />
          <br />
          <br />
        </header>
        <div>
        <Footer />
        </div>
      </div>
    );
  }
}

export default App;
