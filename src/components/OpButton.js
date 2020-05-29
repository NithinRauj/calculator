import React from 'react';
import { connect } from 'react-redux';
import {
  SET_OPERATION,
  ADD_NUMBERS,
  SUBTRACT_NUMBERS,
  MULTIPLY_NUMBERS,
  DIVIDE_NUMBERS,
  CLEAR_DATA,
  TOGGLE_HISTORY,
} from '../types';

const OpButton = ({ currentState, dispatch, operation }) => {
  const onClick = () => {
    if (operation !== 'C' && operation !== 'H' && operation !== '=') {
      dispatch({ type: SET_OPERATION, payload: operation });
    } else if (currentState.operation && operation === '=') {
      if (currentState.operation === '+') {
        dispatch({ type: ADD_NUMBERS });
      }
      if (currentState.operation === '-') {
        dispatch({ type: SUBTRACT_NUMBERS });
      }
      if (currentState.operation === '*') {
        dispatch({ type: MULTIPLY_NUMBERS });
      }
      if (currentState.operation === '/') {
        dispatch({ type: DIVIDE_NUMBERS });
      }
    } else if (operation === 'C') {
      dispatch({ type: CLEAR_DATA });
    } else if (operation === 'H') {
      dispatch({ type: TOGGLE_HISTORY });
    }
  };
  return (
    <div className='button' onClick={onClick}>
      <h2>{operation}</h2>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentState: state,
});

export default connect(mapStateToProps)(OpButton);
