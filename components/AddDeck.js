import React, { Component } from 'react'
import { Text, TextInput, TouchableOpacity, StyleSheet, View } from 'react-native'
import { black, white } from '../utils/colors'
import { addDeck } from '../actions'
import { saveDeckTitle } from '../utils/api'
import { connect } from 'react-redux'

class AddDeck extends Component {
  state = {
    title: ''
  }

  submit = () => {
    const { title } = this.state
    this.props.addDeck({title})
    saveDeckTitle(title)
    this.props.navigation.navigate('Decks')
  }

  render() {
    const { title } = this.state

    return (
      <View style={styles.container}>
        <Text style={{fontSize: 50, textAlign: "center"}}>What is the title of your new deck?</Text>
        <View style={styles.box}>
          <TextInput
            placeholder="Deck Title"
            value={title}
            onChangeText={(title) => this.setState({title})}/>
        </View>
        <TouchableOpacity 
          style={{backgroundColor: black, marginTop: 20, padding: 10 }}
          onPress={this.submit}
        >
          <Text style={{color: white, alignItems: "center"}}>Submit</Text>
        </TouchableOpacity>
        <Text>{JSON.stringify(title)}</Text>
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

export default connect(null,{addDeck})(AddDeck)
