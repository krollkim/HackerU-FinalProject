import React, { useState, useEffect } from "react";
import useUsers from "../hooks/useUsers";
import { useUser } from "../providers/UserProvider";
// import Cards from '../../cards/components/Cards';

const AdminPage = (setCards, cards) => {
    const { user } = useUser();
    const { users } = useUsers();

   
  if (!users || users.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Users</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
    

export default AdminPage