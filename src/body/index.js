import React from 'react';
import ListContainer from './listContainer';
import Signup from './Signup';

const Body = ({ handleSetUser, user }) => {
  if (user) {
    return (
      <div className='body' >
        <h1>
          Todo List
        </h1>
        <ListContainer user={user} />
      </div>
    )
  } else {
    return (
      <div className='body' >
        {!user && <Signup handleSetUser={handleSetUser} />}
      </div>
    )
  }
}

export default Body;