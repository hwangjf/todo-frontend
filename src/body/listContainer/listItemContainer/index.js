import React from 'react';
import ListItem from './listItem'

const ListItemContainer = (props) => {

  console.log('LISTITEMCONTAINER: ', props)
  return (
    <div className='list-item-container' >
      <h2>ListItemContainer</h2>
      <button onClick={() => props.handleShowForm(true)} >Create New List</button>
      {
        props.lists.map(list => {
          return (
            <ListItem list={list} handleSelectList={props.handleSelectList} />
          )
        })
      }
    </div>
  )
}

export default ListItemContainer;