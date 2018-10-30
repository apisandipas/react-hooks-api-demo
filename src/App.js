import React from 'react';
import { useUsers } from './hooks/useUsers'
import './App.css';

function App () {
  const [users, showLoader] = useUsers()

  return (
    <div className="App">
      {showLoader && <span>Loading...</span>}

      {users && users.map((user) => (
        <div key={user.id}>
          {user.name}
        </div>
      ))}
    </div>
  )

}

export default App
