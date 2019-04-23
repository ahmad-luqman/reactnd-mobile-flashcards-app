import { RECEIVE_DECKS, ADD_DECK } from '../actions'

function decks (state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS :
      return {
        ...state,
        ...action.decks,
      }
    case ADD_DECK :
      return {
        ...state,
        [action.deck.title]: {
          title: action.deck.input, 
          count: 0,
          questions: []
        }
      }
    default :
      return state
  }
}

export default decks