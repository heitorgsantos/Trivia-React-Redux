import QUESTION_ACTIONS from '../actions/questionActions';

const INITIAL_STATE = {
  questionsArray: [],
  isFetching: false,
  error: '',
};

const questionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case QUESTION_ACTIONS.REQUEST_API:
    return { ...state, isFetching: true };
  case QUESTION_ACTIONS.FAILED_REQUEST:
    return { ...state, isFetching: false, error: action.payload };
  case QUESTION_ACTIONS.SET_QUESTIONS:
    return { ...state, isFetching: false, questionsArray: action.payload };
  default:
    return state;
  }
};

export default questionsReducer;