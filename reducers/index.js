import { RECEIVE_DECKS, ADD_DECK } from '../actions'
import { combineReducers } from 'redux';

const initialState = {
  decksList: []
}

function decks (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_DECKS :
      return {
        ...state,
        ...action.decks,
      }
    case ADD_DECK :
      return {
        ...state,
        decksList: [...state.decksList, {
          title: action.deck.input, 
          count: 0,
          questions: []
        }]
        
      }
    default :
      return state
  }
}

// export default decks
export default combineReducers({
  decks,
  //quiz
});