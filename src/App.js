import React from 'react';
import './App.css';
import { Grid } from '@material-ui/core';
import Header from './Header.jsx';
import Home from './Home.jsx'
import Login from './Login.jsx'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Grid container direction="column">
        <Grid item>
          <Header></Header>
        </Grid>
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Grid>
    </Router>
  );
}

export default App;
