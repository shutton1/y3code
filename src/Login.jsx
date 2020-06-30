import React from 'react';
import { Grid } from '@material-ui/core';

const Login = () => {
  return (
    <Grid item container>
      <Grid item xs={1} sm={2}></Grid>
        <Grid item xs={10} sm={8}>
          <h1>Login Page</h1>
        </Grid>
      <Grid item xs={1} sm={2} />
    </Grid>
  )
}

export default Login;