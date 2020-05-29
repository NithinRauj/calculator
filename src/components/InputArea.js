import React from 'react';
import { connect } from 'react-redux';

const InputArea = ({ currentState }) => {
  console.log(currentState);
  return <div className='input-area'>{currentState.operand1}</div>;
};

const mapStateToProps = (state) => ({
  currentState: state,
});

export default connect(mapStateToProps)(InputArea);
