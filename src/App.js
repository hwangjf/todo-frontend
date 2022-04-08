import React, { useState } from 'react';

import './App.css';

import Navbar from './navbar';
import Body from './body';

function App() {
  const [user, setUser] = useState(null);

  const handleSetUser = (userData) => {
    console.log(userData)
    setUser(userData)
  }

  const handleLogout = () => {
    setUser(null)
  }

  return (
    <div className="App">
      <Navbar user={user} />
      <Body user={user} handleSetUser={handleSetUser} />
    </div>
  );
}

export default App;
