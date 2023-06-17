import { combineReducers } from 'redux'
import listReducer from './list-reducer'
import cardReducer from './card-reducer'

export default combineReducers({
  lists: listReducer,
  cards: cardReducer
})