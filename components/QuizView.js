import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { black, white } from '../utils/colors'
import { connect } from 'react-redux'


class QuizView extends Component {
  state = {
    showAnswer: false,
    currentQuizCount: 1,
  }

  showAnswer = () => {
    this.setState(() => ({ showAnswer: true }))
  }

  correctAnswer = () => {
    const { navigation } = this.props;
    const {deck} = navigation.state.params
    const totalQuizCount = deck.questions.length

    if (this.state.currentQuizCount === totalQuizCount)
      this.setState(() => ({ currentQuizCount: 1 }))
    else
      this.setState(() => ({ currentQuizCount: this.state.currentQuizCount + 1 }))
  }

  incorrectAnswer = () => {
    const { navigation } = this.props;
    const {deck} = navigation.state.params
    const totalQuizCount = deck.questions.length

    if (this.state.currentQuizCount === totalQuizCount)
      this.setState(() => ({ currentQuizCount: 1 }))
    else
      this.setState(() => ({ currentQuizCount: this.state.currentQuizCount + 1 }))
  }

  render() {
    const { navigation } = this.props;
    const {deck} = navigation.state.params
    const totalQuizCount = deck.questions.length
    const {showAnswer, currentQuizCount} = this.state

    return (
      <View style={styles.container}>
        {(totalQuizCount===0) ?
        <Text>
          Sorry, you cannot take a quiz because there are no cards in the deck.
        </Text>
        :
        <View>
          <Text style={{fontSize: 20, justifyContent: 'center'}}>
            {currentQuizCount} / {totalQuizCount}
          </Text>
          <Text style={{fontSize: 30, justifyContent: 'center'}}>
            {deck.title}
          </Text>
          <Text style={{fontSize: 20, justifyContent: 'center'}}>
            {deck.questions[currentQuizCount-1].question}
          </Text>
          {(showAnswer == true) ?
          <Text style={{fontSize: 20, justifyContent: 'center'}}>
            {deck.questions[currentQuizCount-1].answer}
          </Text>
          :
          <TouchableOpacity
            style={{backgroundColor: black, marginTop: 20, padding: 10 }}
            onPress={this.showAnswer}
          >
            <Text style={{color: white, alignItems: "center"}}>
              Show Answer
            </Text>
          </TouchableOpacity>
          }
          <TouchableOpacity
            style={{backgroundColor: black, marginTop: 20, padding: 10 }}
            onPress={this.correctAnswer}
          >
            <Text style={{color: white, alignItems: "center"}}>
              Correct
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{backgroundColor: black, marginTop: 20, padding: 10 }}
            onPress={this.incorrectAnswer}
          >
            <Text style={{color: white, alignItems: "center"}}>
              In correct
            </Text>
          </TouchableOpacity>
        </View>
        }
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

export default QuizView