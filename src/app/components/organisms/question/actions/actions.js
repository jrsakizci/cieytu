import { ANSWER_QUESTION, UPDATE_CORRECT_ANSWERS } from './types';

export const answerQuestion = (payload) => (
    {
        type: ANSWER_QUESTION,
        payload: payload
    }
);

export const updateCorrectAnswers = (payload) => (
    {
        type: UPDATE_CORRECT_ANSWERS,
        payload: payload
    }
);