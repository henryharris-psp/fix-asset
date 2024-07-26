import React from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';

const DepreciationCalculator = () => {
  return (
    <Container>
      <Typography variant="h4">Depreciation Calculator</Typography>
      <form>
        <TextField label="Asset Value" fullWidth margin="normal" />
        <TextField label="Useful Life (years)" fullWidth margin="normal" />
        <Button type="submit" variant="contained" color="primary">Calculate</Button>
      </form>
    </Container>
  );
};

export default DepreciationCalculator;
