import React from 'react';
import { Grid } from '@material-ui/core';
import Banner from './Banner.jsx';

const Home = () => {
  return (
    <Grid item container>
      <Grid item xs={1} sm={2}></Grid>
        <Grid item xs={10} sm={8}>
          <Banner />
        </Grid>
      <Grid item xs={1} sm={2} />
    </Grid>
  )
}

export default Home;