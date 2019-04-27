import React, { Component } from 'react'
import { Text, TextInput, TouchableOpacity, StyleSheet, View } from 'react-native'
import { black, white } from '../utils/colors'
import { addCard } from '../actions'
import { connect } from 'react-redux'
import { addCardToDeck } from '../utils/api'

class AddCard extends Component {
  state = {
    title: '',
    question: '',
    answer: ''
  }
  submit = () => {
    const card = {
      title: this.props.navigation.state.params.deck.title,
      question: this.state.question,
      answer: this.state.answer,
    }
    this.props.addCard(card)
    addCardToDeck(card.title, card)
    this.props.navigation.navigate('DeckView', { deck: this.props.navigation.state.params.deck })
  }
  render() {
    const { question, answer } = this.state
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 50, textAlign: "center"}}>Add Card View</Text>
        <View style={styles.box}>
          <TextInput
            placeholder="Enter in the question"
            value={question}
            onChangeText={(question) => this.setState({question})}/>
        </View>
        <View style={styles.box}>
          <TextInput
            placeholder="Enter in the answer"
            value={answer}
            onChangeText={(answer) => this.setState({answer})}/>
        </View>
        <TouchableOpacity 
          style={{backgroundColor: black, marginTop: 20, padding: 10 }}
          onPress={this.submit}
        >
          <Text style={{color: white, alignItems: "center"}}>Submit</Text>
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
  box: {
    height: 35,
    width: 250,
    borderColor: black,
    borderWidth: 2,
  }
})

export default connect(null,{addCard})(AddCard)