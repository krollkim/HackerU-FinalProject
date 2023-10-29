import { Table, TableHead, TableRow, TableCell, TableBody, Box } from '@mui/material';
import React from 'react';

const UsersTable = ({ users, setUsers }) => {

    const filteredUsers = users || [];

  return (
    <Box sx={{border: 1, borderRadius: 5, padding: 3, marginTop: 5}}>
    <Table>
    <TableHead>
          <TableRow>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Phone</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredUsers.map((user) => (
            <TableRow key={user?.id}>
              <TableCell align="center">{user?.name.first} {user?.name.last}</TableCell>
              <TableCell align="center">{user?.phone}</TableCell>
              <TableCell align="center">{user?.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
    </Table>
    </Box>
  );
};

export default UsersTable;