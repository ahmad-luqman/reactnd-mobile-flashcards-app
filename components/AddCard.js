import React, { Component } from 'react'
import { Text, TextInput, TouchableOpacity, StyleSheet, View } from 'react-native'
import { black, white } from '../utils/colors'

class AddCard extends Component {
  state = {
    question: '',
    answer: ''
  }
  render() {
    const { question, answer } = this.state
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 50, textAlign: "center"}}>Add Card View</Text>
        <Text>{JSON.stringify(this.props.navigation.state.params.deck)}</Text>
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

export default AddCard