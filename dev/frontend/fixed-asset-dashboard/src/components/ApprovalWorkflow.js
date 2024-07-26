import React from 'react';
import { Container, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material';

const ApprovalWorkflow = () => {
  return (
    <Container>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Asset</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Computer</TableCell>
              <TableCell>Pending</TableCell>
              <TableCell>
                <Button>Approve</Button>
                <Button>Reject</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
};

export default ApprovalWorkflow;
