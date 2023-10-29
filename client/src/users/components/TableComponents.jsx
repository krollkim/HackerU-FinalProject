import { Table, TableHead, TableRow, TableCell, TableBody, Box } from '@mui/material';
import React from 'react';

const TableComponents = ({ cards }) => {

  const filteredCards = cards || [];

  return (
    <Box sx={{border: 1, borderRadius: 5, padding: 3, marginTop: 5}}>
    <Table>
    <TableHead>
          <TableRow>
            <TableCell align="center">Title</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Created At</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredCards.map((card) => (
            <TableRow key={card?.id}>
              <TableCell align="center">{card?.title}</TableCell>
              <TableCell align="center">{card?.description}</TableCell>
              <TableCell align="center">{card?.createdAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
    </Table>
    </Box>
  );
};

export default TableComponents;