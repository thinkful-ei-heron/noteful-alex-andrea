import React from 'react';

const UserContext = React.createContext({
  notes: [],
  foldes: [],
  handleDelete: () => []
})

export default UserContext