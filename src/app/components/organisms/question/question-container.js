import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import QuestionContent from './question-content';
import { answerQuestion, updateCorrectAnswers } from './actions/actions';
import { changeCurrentQuestion } from '@Organisms/home/actions/actions';

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
  
  const QuestionContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(withRouter(QuestionContent));
  
export default QuestionContainer;