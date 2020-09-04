import React from 'react'

import { Typography, Box, Paper } from '@material-ui/core';

const Intro: React.FC = () => {
  return (
    <Paper elevation={2}>
      <Box padding={2} marginTop={2}>
        <Typography>Who am i?</Typography>
      </Box>        
    </Paper>
  );
}

export default Intro