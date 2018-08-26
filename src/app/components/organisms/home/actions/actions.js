import { START_EXAM, CHANGE_CURRENT_QUESTION, CHANGE_QUESTION_COUNT } from './types';

export const startExam = () => (
    {
        type: START_EXAM
    }
);
export const changeCurrentQuestion = (payload) => (
    {
        type: CHANGE_CURRENT_QUESTION,
        payload: payload
    }
);
export const changeQuestionCount = (payload) => (
    {
        type: CHANGE_QUESTION_COUNT,
        payload: payload
    }
);