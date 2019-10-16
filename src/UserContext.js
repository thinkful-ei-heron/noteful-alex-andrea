import React from 'react';

const UserContext = React.createContext({
  notes: [],
  foldes: [],
  deleteRequest: () => {},
})

export default UserContext