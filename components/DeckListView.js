import React, { Component } from 'react'
import { Text, View, TouchableOpacity, FlatList, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

class DeckListView extends Component {
  navigateToDockView = (deck) => {
    this.props.navigation.navigate('DeckView', { deck: deck })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>{JSON.stringify(this.props.decks)}</Text>

        <FlatList
          data={this.props.decks}
          keyExtractor={item => item.title}
          renderItem={({item})=> 
            <View key={item.title} style={styles.item}>
              <TouchableOpacity onPress={()=>{this.props.navigation.navigate('DeckView', { deck: item })}}>
                <Text style={{fontSize: 30}}>{item.title}</Text>
                <Text style={{fontSize: 15, justifyContent: 'center'}}>{item.questions.length} cards</Text>
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
    decks: Object.keys(decks).map(key => ({
      title: decks[key].title,
      questions: decks[key].questions,
    }))
  }
}

export default connect(mapStateToProps)(DeckListView)
