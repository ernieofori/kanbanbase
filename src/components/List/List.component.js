import React, {useState, useEffect} from 'react'
import TrelloCard from '../Card/Card.component.js'
// import {cards} from '../../assets/cards/cards'

const List = ({list}) => {
  const [cardList, setCards] = useState([])
  console.log('card list',cardList)
  useEffect(() => {
    setCards(list.cards)
  }, [])

  const addCard = (e, card) => {
    e.preventDefault()
    setCards([...cardList, {text: 'New Card'}])
  }

  return (
    <div style={styles.container}>
      <h4>{list.title}</h4>
      {cardList.map(card=> {
        return <TrelloCard cards={card}/>
      })}
      <button onClick={addCard}>Add Card</button>
    </div>
  )
}

const styles = {
  container: {
    backgroundColor: '#ccc',
    borderRadius: 3,
    minWidth: 300,
    maxWidth: 300,
    height: 'inherit',
    margin: '0 10px'
  }
}

export default List