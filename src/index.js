import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { featuresReducer } from "./reducers/featuresReducer";
import { combineReducers } from "redux"
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from 'react-router-dom';
import "bulma/css/bulma.css";
import "./styles.scss";
 
// *********** CAN'T GET THIS TO WORK YET - components are not receiving props *************

// (4) COMBINE ALL REDUCERS INTO A SINGLE MONSTER REDUCER: currently we have one reducer, but we may need to 
// add more in future. Create a 'monster' reducer to combine them.

/* const monsterReducer = combineReducers({
    featuresReducer: featuresReducer
})
 */
// (5) USE CREATESTORE TO CREATE A STORE: pass our reducer in to the redux createStore function. This should
// be our combined monsterReducer

const store = createStore(featuresReducer);

// (6) INJECT REDUX STORE INTO PROVIDER: import Provider and wrap our app in it, as we would when using just the
// context API with React. 

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  rootElement
);
