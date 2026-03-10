import React, { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const url = 'https://jsonplaceholder.typicode.com/users';

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []); // Empty dependency array means this runs once on mount


return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
