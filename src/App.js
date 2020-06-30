import React from 'react';
import './App.css';
import { Grid } from '@material-ui/core';
import Header from './Header.jsx';
import Carousel from './Carousel.jsx';

function App() {
  return (
    <Grid container direction="column">
      <Grid item>
        <Header></Header>
      </Grid>
      <Grid item container>
        <Grid item xs={1} sm={2}></Grid>
        <Grid item xs={10} sm={8}>
          <Carousel></Carousel>
        </Grid>
        <Grid item xs={1} sm={2} />
      </Grid>
    </Grid>
  );
}

export default App;
