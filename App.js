import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddDeck from './components/AddDeck';
import DeckListView from './components/DeckListView';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Text>Open up App.js to start working on your app!</Text> */}
        {/* <AddDeck /> */}
        <DeckListView />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
