import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from "./App";
import reducer from './redux/reducer';
import { createStore } from "redux";
import { devToolsEnhancer } from 'redux-devtools-extension';
import initialState from "./initialState";

const store = createStore(
    reducer,
    initialState,
    devToolsEnhancer({})
)

ReactDOM.render(<App store={store} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
