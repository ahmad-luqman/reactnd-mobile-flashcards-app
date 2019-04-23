import React from 'react';
import { StyleSheet } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'
import AddDeck from './components/AddDeck'
import DeckListView from './components/DeckListView'
import DeckView from './components/DeckView'
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation'

const Tabs = createBottomTabNavigator({
  Decks: {
    screen: DeckListView
  },
  AddDeck: {
    screen: AddDeck
  },
})

let TabsNavigation = createAppContainer(Tabs)

const Stacks = createStackNavigator(
  {
    DeckView : {
      screen: DeckView,
      // navigationOptions: ({ navigation }) => ({
      //   title: navigation.state.params.deck.title
      // })
    },
    Main: {
      screen: TabsNavigation
    }
  },
  {
    initialRouteName: "Main",
  }
)

let Navigation = createAppContainer(Stacks)


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
