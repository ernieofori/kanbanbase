import React,{ useState, useEffect} from 'react'
import List from '../List/List.component'
import '../../styles.css'

const ListContainer = ({lists, addList}) => {
  console.log('lists in list container', lists)
  return (
    <div className="list-container">
      {lists.map(list => <List list={list}/>)}
      <button onClick={addList}>Add List</button>
    </div>
  )
}

export default ListContainer