import React, { Component } from 'react'
import { Text, TextInput, TouchableOpacity, StyleSheet, View } from 'react-native'
import { black, white } from '../utils/colors'
import { addDeck } from '../reducers'

export default class AddDeck extends Component {
  state = {
    input: ''
  }
  render() {
    const { input } = this.state
    submit = () => {
      this.props.dispatch(addDeck({
        input
      }))
    }
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 50, textAlign: "center"}}>What is the title of your new deck?</Text>
        <View style={styles.box}>
          <TextInput placeholder="Deck Title" value={input}/>
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
