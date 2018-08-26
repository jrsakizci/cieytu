import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { startExam } from './actions/actions';
import HomeContent from './home-content';


const mapStateToProps = (state, ownProps) => ({
    currentQuestion: state.homeReducer.currentQuestion,
    isExamStarted: state.homeReducer.isExamStarted
  });
  
  const mapDispatchToProps = (dispatch) => {
      return {
        onStartExam: (e) => {
          e.preventDefault(); 
          dispatch(startExam()) 
        }
      }
  };
  
  const HomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(withRouter(HomeContent));
  
export default HomeContainer;