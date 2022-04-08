import React, { useState } from 'react';

const ItemForm = (props) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleTitle = e => {
    setTitle(e.target.value)
  }

  const handleDescription = e => {
    setDescription(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const body = { item: { title, description, status: 'Incomplete', list_id: props.list.id } }
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }

    const itemResponse = await fetch('http://localhost:8080/items', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body)
    })

    const item = await itemResponse.json()
    console.log(item)
    props.addNewItem(item)
    return item
  }

  return (
    <div>
      ItemForm
      <form onSubmit={handleSubmit} >
        <label>Title</label>
        <input type='text' value={title} onChange={handleTitle} />

        <label>Description</label>
        <input type='text' value={description} onChange={handleDescription} />

        <button>Create Item</button>
      </form>
    </div>
  )
}

export default ItemForm;