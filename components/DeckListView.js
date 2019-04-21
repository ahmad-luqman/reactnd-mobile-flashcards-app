import React, { Component } from 'react'
import { Text, View, FlatList, StyleSheet } from 'react-native'

export default class DeckListView extends Component {
  decks = [
    {key: '1', name: 'udacicards', count: 3},
    {key: '2', name: 'new deck', count: 0},
    {key: '3', name: 'New deck 2', count: 0},
    {key: '4', name: 'New deck 2', count: 0},
    {key: '5', name: 'New deck 2', count: 0},
    {key: '6', name: 'udacicards', count: 3},
    {key: '7', name: 'new deck', count: 0},
    {key: '8', name: 'New deck 2', count: 0},
    {key: '9', name: 'New deck 2', count: 0},
    {key: '10', name: 'New deck 2', count: 0},
    {key: '11', name: 'udacicards', count: 3},
    {key: '12', name: 'new deck', count: 0},
    {key: '13', name: 'New deck 2', count: 0},
    {key: '14', name: 'New deck 2', count: 0},
    {key: '15', name: 'New deck 2', count: 0},
  ]
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.decks}
          renderItem={({item})=> 
            <View key={item.key} style={styles.item}>
              <Text style={{fontSize: 30}}>{item.name}</Text>
              <Text style={{fontSize: 15, justifyContent: 'center'}}>{item.count} cards</Text>
            </View>
        }/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: "center",
   alignItems: "stretch",
   paddingTop: 22
  },
  item: {
    borderWidth: 1
  },
})
