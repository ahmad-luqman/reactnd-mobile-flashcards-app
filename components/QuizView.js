import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { black, white } from '../utils/colors'

class QuizView extends Component {
  state = {
    showAnswer: false,
    currentQuizCount: 1,
    correctAnswers: 0,
    quizCompleted: false
  }

  restartQuiz = () => {
    this.setState(() => ({
      showAnswer: false,
      currentQuizCount: 1,
      correctAnswers: 0,
      quizCompleted: false
    }))
  }

  showAnswer = () => {
    this.setState(() => ({ showAnswer: true }))
  }

  correctAnswer = () => {
    const { navigation } = this.props;
    const {deck} = navigation.state.params
    const totalQuizCount = deck.questions.length
    if (this.state.currentQuizCount === totalQuizCount)
      this.setState(() => ({
        correctAnswers: this.state.correctAnswers + 1,
        quizCompleted: true,
      }))
    else
      this.setState(() => ({
        correctAnswers: this.state.correctAnswers + 1,
        currentQuizCount: this.state.currentQuizCount + 1,
        showAnswer: false
      }))
  }

  incorrectAnswer = () => {
    const { navigation } = this.props;
    const {deck} = navigation.state.params
    const totalQuizCount = deck.questions.length

    if (this.state.currentQuizCount === totalQuizCount)
      this.setState(() => ({ quizCompleted: true }))
    else
      this.setState(() => ({ currentQuizCount: this.state.currentQuizCount + 1, showAnswer: false }))
  }

  render() {
    const { navigation } = this.props;
    const {deck} = navigation.state.params
    const totalQuizCount = deck.questions.length
    const {showAnswer, currentQuizCount, correctAnswers, quizCompleted} = this.state

    return (
      <View style={styles.container}>
        {(totalQuizCount===0) ?
        <Text>
          Sorry, you cannot take a quiz because there are no cards in the deck.
        </Text>
        :
        ((quizCompleted) ?
        <View>
          <Text style={{fontSize: 20, justifyContent: 'center'}}>
            QUIZ Completed!
          </Text>
          <Text style={{fontSize: 30, justifyContent: 'center'}}>
            {deck.title}
          </Text>
          <Text style={{fontSize: 30, justifyContent: 'center'}}>
            Correct Answers: {correctAnswers}
          </Text>
          <Text style={{fontSize: 30, justifyContent: 'center'}}>
            Total Questions: {totalQuizCount}
          </Text>

          <TouchableOpacity
            style={{backgroundColor: black, marginTop: 20, padding: 10, width: 200 }}
            onPress={this.restartQuiz}
          >
            <Text style={{color: white, alignItems: "center", textAlign: "center"}}>
              Restart Quiz
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{backgroundColor: black, marginTop: 20, padding: 10, width: 200 }}
            onPress={()=>{this.props.navigation.navigate('DeckView', { deck: deck })}}
          >
            <Text style={{color: white, alignItems: "center", textAlign: "center"}}>
              Back to Deck
            </Text>
          </TouchableOpacity>
        </View>
        :
        (
        <View>
          <Text style={{fontSize: 20, justifyContent: 'center'}}>
            {currentQuizCount} / {totalQuizCount}
          </Text>
          <Text style={{fontSize: 30, justifyContent: 'center'}}>
            {deck.title}
          </Text>
          <Text style={[styles.fixedWidth, {fontSize: 20, justifyContent: 'center'}]}>
            {deck.questions[currentQuizCount-1].question}
          </Text>
          {(showAnswer == true) ?
          <Text style={[styles.fixedWidth, {fontSize: 20, justifyContent: 'center'}]}>
            {deck.questions[currentQuizCount-1].answer}
          </Text>
          :
          <TouchableOpacity
            style={{backgroundColor: black, marginTop: 20, padding: 10, width: 200 }}
            onPress={this.showAnswer}
          >
            <Text style={{color: white, alignItems: "center", textAlign: "center"}}>
              Show Answer
            </Text>
          </TouchableOpacity>
          }
          <TouchableOpacity
            style={{backgroundColor: black, marginTop: 20, padding: 10, width: 200 }}
            onPress={this.correctAnswer}
          >
            <Text style={{color: white, alignItems: "center", textAlign: "center"}}>
              Correct
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{backgroundColor: black, marginTop: 20, padding: 10, width: 200 }}
            onPress={this.incorrectAnswer}
          >
            <Text style={{color: white, alignItems: "center", textAlign: "center"}}>
              In correct
            </Text>
          </TouchableOpacity>
        </View>))
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
  },
  fixedWidth: {
    height: 100,
    width: 250,
  }
})

export default QuizView