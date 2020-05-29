import { SET_NUMBER } from './types';

const initialState = {
  opernad1: 0,
  operand2: 0,
  operation: null,
  hasFirstOperand: false,
  result: null,
  history: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_NUMBER:
      console.log('Set number called', action.payload, state.opernad1);
      debugger;
      return {
        ...state,
        operand1: state.opernad1 * 10 + action.payload,
      };
    default:
      return state;
  }
};
