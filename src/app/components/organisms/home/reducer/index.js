import { START_EXAM, CHANGE_CURRENT_QUESTION, CHANGE_QUESTION_COUNT } from '../actions/types';

const initialState = {
    questionCount: 0,
    currentQuestion: 0,
    isExamStarted: false
}

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_EXAM:
            state = { ...state, isExamStarted: true, currentQuestion: 1  }
            return state;
        case CHANGE_CURRENT_QUESTION:
            state = { ...state, currentQuestion: action.payload }
            return state;
        case CHANGE_QUESTION_COUNT:
            state = { ...state, questionCount: action.payload }
            return state;
        default:
            return state;
    }
}

export default homeReducer;