import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
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

export default App = createAppContainer(Tabs)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
