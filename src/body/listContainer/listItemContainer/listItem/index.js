import React from 'react';

const ListItem = (props) => {
  return (
    <div onClick={props.handleSelectList(props.list.id)} className='list-item'>
      List
      <div>Title: {props.list.title}</div>
      <div>Description: {props.list.description}</div>
    </div>
  )
}

export default ListItem;