import React from 'react';

function Square(props) {
    return (
      //onClick makes it interactive and uses arrow functions to avoid
      // confusing behaviour of `this`
      <button
        className="square"
        onClick={props.onClick}
      >
        {props.value}
      </button>
    );
  }

export default Square;