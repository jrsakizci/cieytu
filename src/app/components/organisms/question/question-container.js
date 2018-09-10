import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { answerQuestion, updateCorrectAnswers } from './actions/actions';
import { changeCurrentQuestion } from '@Organisms/home/actions/actions';

import QuestionContent from './question-content';

class QuestionContainer extends Component {
    constructor(props) {
      super(props);

      this.answer = this.answer.bind(this);
    }
    answer(answer) {
      const { answerQuestion, currentQuestion, questions, updateAnswers, correctAnswers } = this.props;
      let payload = {
          id: currentQuestion - 1,
          data: answer
      };
      answerQuestion(payload);
      if (questions[payload.id].correct_answer == answer) {
          updateAnswers(correctAnswers + 1);
      }
      this.nextQuestion();
  }
  nextQuestion() {
      const { changeCurrentQuestion, currentQuestion, questionCount, } = this.props;
      if (currentQuestion !== questionCount) {
          changeCurrentQuestion(currentQuestion + 1);
      } else if (currentQuestion === questionCount) {
          this.goPage('/results');
      } else {
          return;
      }
  }
  goPage(page) {
      const { history } = this.props;
      history.push(page);
  }

  render() {
    const { currentQuestion, questions, isLoading, error, isExamStarted } = this.props;
    return (
      <QuestionContent 
        answer={this.answer} nextQuestion={this.nextQuestion} 
        goPage={this.goPage} currentQuestion={currentQuestion}
        questions={questions} isLoading={isLoading}
        error={error} isExamStarted={isExamStarted} />
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
    currentQuestion: state.homeReducer.currentQuestion,
    questions: state.questionReducer.questions,
    isLoading: state.questionReducer.isLoading,
    error: state.questionReducer.error,
    questionCount: state.homeReducer.questionCount,
    isExamStarted: state.homeReducer.isExamStarted,
    correctAnswers: state.questionReducer.correctAnswers
  });
  
  const mapDispatchToProps = (dispatch) => {
      return {
        answerQuestion: (payload) => {
          dispatch(answerQuestion(payload)) 
        },
        changeCurrentQuestion: (payload) => {
            dispatch(changeCurrentQuestion(payload))
        },
        updateAnswers: (payload) => {
            dispatch(updateCorrectAnswers(payload))
        }
      }
  };
  

  
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(QuestionContainer));;