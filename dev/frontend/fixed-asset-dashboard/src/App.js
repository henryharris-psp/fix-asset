import React from 'react';
import AssetForm from './components/AssetForm';
import AssetTable from './components/AssetTable';
import DepreciationCalculator from './components/DepreciationCalculator';
import ApprovalWorkflow from './components/ApprovalWorkflow';
import Reports from './components/Reports';
import { Container, AppBar, Toolbar, Typography } from '@mui/material';

const App = () => {
  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Fixed Asset Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <AssetForm />
      <AssetTable />
      <DepreciationCalculator />
      <ApprovalWorkflow />
      <Reports />
    </Container>
  );
};

export default App;
