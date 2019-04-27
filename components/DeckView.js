import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { black, white } from '../utils/colors'
import { deleteDeck } from '../utils/api'
import { removeDeck  } from '../actions'

class DeckView extends Component {
  render() {
    const {deck} = this.props.navigation.state.params
    return (
      <View style={styles.container}>
        <View>
          <Text style={{fontSize: 50}}>{deck.title}</Text>
          <Text style={{fontSize: 30, justifyContent: 'center'}}>{deck.questions.length} cards</Text>
        </View>

        <TouchableOpacity 
          style={{backgroundColor: black, marginTop: 20, padding: 10 }}
          onPress={()=>{this.props.navigation.navigate('AddCard', { deck: deck })}}
        >
          <Text style={{color: white, alignItems: "center"}}>Add Card</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={{backgroundColor: black, marginTop: 20, padding: 10 }}
          onPress={()=>{this.props.navigation.navigate('QuizView', { deck: deck })}}
        >
          <Text style={{color: white, alignItems: "center"}}>Start Quiz</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={{backgroundColor: black, marginTop: 20, padding: 10 }}
          onPress={()=>{
            this.props.removeDeck(deck)
            deleteDeck(deck.title)
            this.props.navigation.navigate('Decks')
          }}
        >
          <Text style={{color: white, alignItems: "center"}}>Delete Deck</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  item: {
    borderWidth: 1
  },
})

export default connect(null, {removeDeck})(DeckView)