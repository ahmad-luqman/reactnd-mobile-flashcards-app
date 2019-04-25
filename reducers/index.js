import { ADD_CARD, ADD_DECK } from '../actions'
import { combineReducers } from 'redux';
import { initialState } from '../utils/initialState'

function decks (state = initialState, action) {
  switch (action.type) {
    case ADD_CARD :
      return {
        ...state,
        [action.deck.title]: {
          title: state[action.deck.title].title,
          count: state[action.deck.title].count + 1,
          questions: [
            ...state[action.deck.title].questions,
            {
              question: action.deck.question,
              answer: action.deck.answer,
            },
          ],
        }
      }
    case ADD_DECK :
      console.log(action)
      return {
        ...state,
        [action.deck.title]: {
          title: action.deck.title,
          questions: []
        }
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