import { configure } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
//yes this is taken from stack overflow. 


// Define initial state
const initialState = {
  count: 0
};

// Define reducer function
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

// Create store using reducer
const store = createStore(reducer);

// Define component that will use the Redux store
const Counter = ({ count, increment, decrement }) => (
  <div>
    <h2>Count: {count}</h2>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
  </div>
);

// Define mapStateToProps function to map state to props
const mapStateToProps = (state) => ({
  count: state.count
});

// Define mapDispatchToProps function to map dispatch to props
const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({ type: 'INCREMENT' }),
  decrement: () => dispatch({ type: 'DECREMENT' })
});

// Connect component to Redux store
const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

// Wrap app with Redux provider
const AppStore = () => (
  <Provider store={store}>
    <ConnectedCounter />
  </Provider>
);

export default AppStore;