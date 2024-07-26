import React from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';

const AssetForm = () => {
  return (
    <Container>
      <Typography variant="h4">Add New Asset</Typography>
      <form>
        <TextField label="Asset Name" fullWidth margin="normal" />
        <TextField label="Asset Value" fullWidth margin="normal" />
        <Button type="submit" variant="contained" color="primary">Add Asset</Button>
      </form>
    </Container>
  );
};

export default AssetForm;
