import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux"; // CREATING STORE
import allReducers from "./reducers";
import { Provider } from "react-redux";

const myStore = createStore(
	allReducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// ACTION -> DESCRIBES WHAT YOU WANT TO DO
// An action is a function that returns an object
// 1. Create an action
// const increment = () => {
// 	return {
// 		type: "INCREMENT", // Type of action
// 	};
// };
// const decrement = () => {
// 	return {
// 		type: "DECREMENT",
// 	};
// };

// REDUCER -> HOW YOUR ACTIONS TRANSFORM STATE
// Reducers take care of our actions
// 2. Create a reducer
// const counter = (state = 0, action) => {
// 	switch (action.type) {
// 		case "INCREMENT":
// 			return state + 1;
// 		case "DECREMENT":
// 			return state - 1;
// 	}
// };

// STORE -> GLOBALIZED STATE
// let store = createStore(counter);

// Display in the console
// store.subscribe(() => {
// 	console.log(store.getState());
// });

// DISPATCH -> EXECUTES ACTION
// store.dispatch(increment());
// store.dispatch(decrement());
// store.dispatch(decrement());

ReactDOM.render(
	<Provider store={myStore}>
		<App />
	</Provider>,
	document.querySelector("#root")
);
