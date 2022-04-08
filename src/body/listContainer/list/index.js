import React, { useEffect, useState } from 'react';
import Item from './item';
import ItemForm from './itemForm';

const List = (props) => {
  const [items, setItems] = useState([])
  const [showItemForm, setShowItemForm] = useState(false)
  console.log('list', props.list)
  console.log('list user', props.user)

  const fetchItems = async () => {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }

    const itemIndexResponse = await fetch(`http://localhost:8080/items?list_id=${props.list.id}`, {
      method: 'GET',
      headers: headers,
    })
    
    const itemIndex = await itemIndexResponse.json()

    console.log('itemIndex', itemIndex)
    setItems(itemIndex)
  }

  useEffect(() => {
    fetchItems()
  }, [])

  const handleShowItemForm = () => {
    setShowItemForm(true)
  }

  const addNewItem = (item) => {
    setShowItemForm(false)
    setItems([...items, item])
  }

  const handleComplete = (id) => {
    const updatedItems = [...items].map(item => {
      if (item.id === id) {
        item.status = 'Complete'
      }
      return item
    })
    setItems(updatedItems)
  }

  if (props.list) {
    return (
      <div class='list'>
        <h2>List</h2>
        <div>
          <span>Title:</span>
          <span>{props.list.title}</span>
        </div>
        <div>
          <span>Description:</span>
          <span>{props.list.description}</span>
        </div>
        
        <button onClick={handleShowItemForm} >Create New Item</button>

        {
          showItemForm && <ItemForm addNewItem={addNewItem} list={props.list} />
        }

        <div>
          <ul>
            {
              items.map(item => <Item item={item} list={props.list} handleComplete={handleComplete} />)
            }
          </ul>
        </div>
      </div>
    )
  } else {
    <div>
      Create a list
    </div>
  }
}

export default List;