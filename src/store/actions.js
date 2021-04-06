import { SET_NEXT_QUESTION, GET_RESULT, SET_ACTIVE_OPTION } from './constants';

export const setNextQuestion = (answer) => ({
  type: SET_NEXT_QUESTION,
  answer
});

export const getResult = (answer) => ({
  type: GET_RESULT,
  answer
});

export const setActiveOption = (option) => ({
  type: SET_ACTIVE_OPTION,
  option
});
