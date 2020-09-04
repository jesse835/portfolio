import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Box from '@material-ui/core/Box'

import Container from '@material-ui/core/Container'

export default function MainBar({ children }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <Typography variant="h6">Title here</Typography>
        </Toolbar>        
      </AppBar>

      <Toolbar />

      <Container>
        { children }
      </Container>
    </React.Fragment>
  );
}