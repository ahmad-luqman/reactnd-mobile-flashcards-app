import React from 'react';
import { StyleSheet } from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'
import AddDeck from './components/AddDeck';
import DeckListView from './components/DeckListView';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

const Tabs = createBottomTabNavigator({
  Decks: {
    screen: DeckListView
  },
  AddDeck: {
    screen: AddDeck
  },
})

let Navigation = createAppContainer(Tabs)

export default class App extends React.Component {
  render() {
    return(
      <Provider store={createStore(reducer, middleware)}>
        <Navigation />
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
