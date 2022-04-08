import React from 'react';

const Navbar = ({ user }) => {
  console.log(user)

  if (user) {
    return (
      <div className='navbar' >
        <div>
          <span className='username'>{user.username}</span>
          <button>Logout</button>
        </div>
      </div>
    )
  } else {
    return (
      <div className='navbar' >
        <div>
          Guest
        </div>
      </div>
    )
  }
}

export default Navbar;