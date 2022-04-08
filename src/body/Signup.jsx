import React, { useState } from 'react';

const Signup = ({ handleSetUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSetUsername = e => {
    setUsername(e.target.value)
  }

  const handleSetPassword = e => {
    setPassword(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const body = { user: { username, password } }
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }

    const signupResponse = await fetch('http://localhost:8080/users', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body)
    })

    const user = await signupResponse.json()
    handleSetUser(user)

    setUsername('')    
    setPassword('')    
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit} >
        Signup Form
        <br/>
        <label>Username:</label>
        <input type='text' value={username} onChange={handleSetUsername} />
        <br/>
        <label>Password:</label>
        <input type='text' value={password} onChange={handleSetPassword} />
        <br/>
        <button>Sign up</button>
      </form>
    </div>
  )
}

export default Signup;