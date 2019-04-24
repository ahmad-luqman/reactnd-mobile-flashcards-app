import React, { Component } from 'react'
import { Text, View, TouchableOpacity, FlatList, StyleSheet } from 'react-native'
//import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux'

class DeckListView extends Component {
  navigateToDockView = (deck) => {
    this.props.navigation.navigate('DeckView', { deck: deck })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>{JSON.stringify(this.props)}</Text>
        <Text>{JSON.stringify(this.props.decks)}</Text>
        <Text>{JSON.stringify(this.props.decks.decksList)}</Text>

        <FlatList
          data={this.props.decks.decksList}
          renderItem={({item})=> 
            <View key={item.title} style={styles.item}>
              <TouchableOpacity onPress={()=>{this.props.navigation.navigate('DeckView', { deck: item })}}>
                <Text style={{fontSize: 30}}>{item.title}</Text>
                <Text style={{fontSize: 15, justifyContent: 'center'}}>{item.count} cards</Text>
              </TouchableOpacity>
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

function mapStateToProps ({decks}) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(DeckListView)
