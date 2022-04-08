import React, { useState } from 'react';

const ListForm = (props) => {
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

    const body = { list: { title, description, user_id: props.user.id } }
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }

    const listResponse = await fetch('http://localhost:8080/lists', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body)
    })

    const list = await listResponse.json()

    props.addNewList(list)

    setTitle('')    
    setDescription('')    
  }

  return (
    <div>
      ListForm
      <form onSubmit={handleSubmit} >
        <label>Title</label>
        <input type='text' value={title} onChange={handleTitle} />

        <label>Description</label>
        <input type='text' value={description} onChange={handleDescription} />

        <button>Create List</button>
      </form>
    </div>
  )
}

export default ListForm;