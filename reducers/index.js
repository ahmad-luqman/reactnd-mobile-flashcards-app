import { ADD_CARD, ADD_DECK } from '../actions'
import { combineReducers } from 'redux';
import { initialState } from '../utils/initialState'

function decks (state = {}, action) {
  switch (action.type) {
    case ADD_CARD :
      return {
        ...state,
        [action.card.title]: {
          title: state[action.card.title].title,
          count: state[action.card.title].count + 1,
          questions: [
            ...state[action.card.title].questions,
            {
              question: action.card.question,
              answer: action.card.answer,
            },
          ],
        }
      }
    case ADD_DECK :
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