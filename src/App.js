import React from 'react';
import './App.css';
import { Grid } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from './Header.jsx';
import Home from './Home.jsx'
import Login from './Login.jsx'
import Upload from './Upload';
import Shop from './Shop';
import db from './firebase';


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

          <Switch> ينظر من خلال جميع أطفاله <Route>
          العناصر ويجعل أول واحد مساره
          يطابق عنوان URL الحالي. استخدم <Switch> في أي وقت
          لديك طرق متعددة ، ولكنك تريد واحدًا فقط
          منهم لتقديم في وقت واحد
        */}

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/sell">
            <Upload/>
          </Route>
          <Route path="/shop">
            <Shop/>
          </Route>
        </Switch>
      </Grid>
    </Router>

  );
}

export default App;
