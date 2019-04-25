export const ADD_CARD = 'ADD_CARD'
export const ADD_DECK = 'ADD_DECK'

export function addCard (card) {
  return {
    type: ADD_CARD,
    card,
  }
}

export function addDeck (deck) {
  return {
    type: ADD_DECK,
    deck,
  }
}