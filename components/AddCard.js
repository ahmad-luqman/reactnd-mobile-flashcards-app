import React, { Component } from 'react'
import { Text, TextInput, TouchableOpacity, StyleSheet, View } from 'react-native'

class AddCard extends Component {
  render() {
    return (
      <View>
        <Text>Add Card View</Text>
        <Text>{JSON.stringify(this.props.navigation.state.params.deck)}</Text>
      </View>
    )
  }
}

export default AddCard