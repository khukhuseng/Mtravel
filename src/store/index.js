/* @flow */
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import reducers from "../reducers/index";

const reducer = combineReducers(reducers);

export const configureStore = () => {
  const store = createStore(reducer, applyMiddleware(thunk));

  return store;
};
