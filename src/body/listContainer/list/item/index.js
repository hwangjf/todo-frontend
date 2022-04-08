import React from 'react';

const Item = (props) => {
  console.log("ITEM", props)

  const handleClick = async () => {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }

    const itemPatchResponse = await fetch(`http://localhost:8080/items/${props.item.id}`, {
      method: 'PATCH',
      headers: headers,
      body: JSON.stringify({item: {status: 'Complete'}})
    })
    
    const patchedItem = await itemPatchResponse.json()
    props.handleComplete(patchedItem.id)
  }

  return (
    <li className='item'>
      <div>Title: {props.item.title}</div>
      <div>Description: {props.item.description}</div>
      
      {/* <div>Priority</div>
      <div>{props.item.priority}</div> */}
      {
        props.item.status === 'Complete' 
          ? (
            <div>
              <span>Status: </span>
              <span>{props.item.status}</span>
            </div>
            )
          : <button onClick={handleClick}>Complete Task</button>
      }
    </li>
  )
}

export default Item;