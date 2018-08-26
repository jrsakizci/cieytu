import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import ResultContent from './result-content';
import { startExam } from '../home/actions/actions';


const mapStateToProps = (state, ownProps) => ({
    questions: state.questionReducer.questions,
    questionCount: state.homeReducer.questionCount,
    correctAnswers: state.questionReducer.correctAnswers
  });
  
  const mapDispatchToProps = (dispatch) => {
      return {
        startExam: () => {
          dispatch(startExam()) 
        },
      }
  };
  
  const ResultContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(withRouter(ResultContent));
  
export default ResultContainer;