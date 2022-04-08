import React, { useState, useEffect } from 'react';

import List from './list';
import ListItemContainer from './listItemContainer';
import ListForm from './listItemContainer/listForm';

const ListContainer = (props) => {
  const [showForm, setShowForm] = useState(false);
  const [lists, setLists] = useState([])
  const [list, setList] = useState(null)

  const handleShowForm = (bool) => {
    setShowForm(bool)
  }

  const handleSelectList = (id) => {
    const selectedList = lists.find(list => list.id === id)
    setList(selectedList)
  }

  const fetchLists = async () => {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }

    const listIndexResponse = await fetch(`http://localhost:8080/users/${props.user.id}/lists`, {
      method: 'GET',
      headers: headers,
    })

    const listIndex = await listIndexResponse.json()
    setList(listIndex.first)
    setLists(listIndex)
  }

  useEffect(() => {
    fetchLists()
  }, [])

  const addNewList = (list) => {
    setShowForm(false)
    setLists([...lists, list])
  }

  console.log('LISTS: ', lists)
  console.log('LIST: ', list)
  console.log('list condition', !!lists.length)
  return (
    <div className='list-container'>
      <h2>ListContainer</h2>
      <ListItemContainer handleSelectList={handleSelectList} handleShowForm={handleShowForm} user={props.user} lists={lists} />
      { showForm ? <ListForm user={props.user} addNewList={addNewList} /> : (
        list ?
          <List list={list} user={props.user} />
          : <div>No list</div>
      ) }
    </div>
  )
}

export default ListContainer;