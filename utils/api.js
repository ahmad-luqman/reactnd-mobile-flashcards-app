import { AsyncStorage } from 'react-native'
export const DECKS_STORAGE_KEY = 'ReactNDFlashCards:decks'

export function fetchDecks () {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
}

export function submitDeck ({ deck, key }) {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [key]: deck
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

function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}
