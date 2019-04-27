import { AsyncStorage } from 'react-native'
export const DECKS_STORAGE_KEY = 'ReactNDFlashCards:decks'

export function getDecks () {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
          .then( (results) => {
            return JSON.parse(results)
          })
}

export function getDeck (id) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
          .then( (results) => {
            const data = JSON.parse(results);
            return data[id]
          })
}

export function saveDeckTitle (title) {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
            [title]: { title: title, questions: [] }
          }))
}

export function saveDeck ({ title, deck }) {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
            [title]: deck
          }))
}

export function removeDeck (key) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
          .then((results) => {
            const data = JSON.parse(results)
            data[key] = undefined
            delete data[key]
            AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data))
          })
}

export function addCardToDeck(title, card) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
  .then((results) => {
      const data = JSON.parse(results)
      if(data[title] !== undefined) {
          data[title].questions.push(card);
          AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data))
      }
  })
}

function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}
