import React, { useReducer } from 'react';
import './style.css';
const reducer = (state, action) => {
  switch (action.type) {
    case 'Increment':
      return { count: state.count + 1, text: state.text };
    case 'ToggleShow':
      return { count: state.count + 1, text: state.text };
    default:
      return state;
  }
};
const App = () => {
  let [state, dispatch] = useReducer(reducer, { count: 0, text: true });

  return (
    <div>
      {state.count} <br />
      <button
        onClick={() => {
          dispatch({ type: 'ToggleShow' });
        }}
      >
        increment
      </button>
      {state.text && <p>text is empty</p>}
    </div>
  );
};

export default App;
