import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import App from './App';
import displayReducer from './redux/display/displayReducer';
import gameStateReducer from './redux/gameState/gameStateReducer';
import questionHistoryReducer from './redux/questionHistory/questionHistoryReducer';

const reducer = combineReducers({
  display: displayReducer,
  questionHistory: questionHistoryReducer,
  gameState: gameStateReducer,
});

export type RootState = ReturnType<typeof reducer>;

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>

    <App />

  </Provider>,
  document.getElementById('root'),
);
