import React, { Component } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { black, white } from '../utils/colors';

export default class AddDeck extends Component {
  state = {
    input: ''
  }
  render() {
    const { input } = this.state
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>What is the title of your new deck?</Text>
        <View style={{padding: 10, borderColor: black, borderWidth: 2}}>
          <TextInput
          />
        </View>
        <TouchableOpacity style={{backgroundColor: black }}>
          <Text style={{color: white}}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
