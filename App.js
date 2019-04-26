import React from 'react';
import { StyleSheet } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'
import AddDeck from './components/AddDeck'
import AddCard from './components/AddCard'
import DeckListView from './components/DeckListView'
import DeckView from './components/DeckView'
import QuizView from './components/QuizView'
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
    AddCard: {
      screen: AddCard,
    },
    QuizView: {
      screen: QuizView,
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
