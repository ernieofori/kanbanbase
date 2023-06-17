import React, {useState, useEffect} from 'react'
import ListContainer from '../ListContainer/ListContainer.component'
import { connect } from 'react-redux'


const App = (props) => {
  const {lists} = props
  const [listTitles, setListTitles] = useState([])
  console.log('lists', lists)
  console.log('list titles', listTitles)

  useEffect(() => {
    setListTitles(lists)
  }, [])

  const addList = (event, text='New List') => {
    event.preventDefault()

    setListTitles([...listTitles, {title: text, cards: []}])
    console.log('clicked')
  }
  
  return(
    <div className="App">
      <h1>Hello World</h1> 
      <ListContainer addList={addList} lists={listTitles}/>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    lists: state.lists
  }
}

export default connect(mapStateToProps)(App)