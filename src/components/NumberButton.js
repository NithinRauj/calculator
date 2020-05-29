import React from 'react';
import { SET_NUMBER } from '../types';
import { connect } from 'react-redux';

const ButtonItem = ({ dispatch, number, currentState }) => {
  debugger;
  const onClick = () => {
    debugger;
    dispatch({
      type: SET_NUMBER,
      payload: number,
    });
  };

  return (
    <div className='button' onClick={onClick}>
      <h2>{number}</h2>
    </div>
  );
};
const mapStateToProps = (state) => ({
  currentState: state,
});

export default connect(mapStateToProps)(ButtonItem);
