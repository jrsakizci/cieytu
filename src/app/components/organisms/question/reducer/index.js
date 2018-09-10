import { QUESTIONS_NOT_RECEIVED, QUESTIONS_RECEIVED, QUESTIONS_RECEIVING, ANSWER_QUESTION, UPDATE_CORRECT_ANSWERS } from '../actions/types';

const initialState = {
    questions: [],
    isLoading: true,
    error: false,
    correctAnswers: 0,
}

const questionReducer = (state = initialState, action) => {

    switch (action.type) {
        case QUESTIONS_RECEIVING:
            state = { ...state, isLoading: true, correctAnswers:0 }
            return state;
        case QUESTIONS_RECEIVED:
            state = { ...state, questions: action.payload, isLoading: false, error: false };
            return state;
        case QUESTIONS_NOT_RECEIVED:
            state = { ...state, isLoading: false, error: true }
            return state;
        case ANSWER_QUESTION:
            const newState = { ...state };
            newState.questions[action.payload.id].answer = action.payload.data;
            return state = newState;
        case UPDATE_CORRECT_ANSWERS: 
            state = { ...state, correctAnswers: action.payload }
            return state;
        default:
            return state;
    }

}

export default questionReducer;