import React from "react";
import ReactDOM from "react-dom";
import RootContainer from './containers/RootContainer';
/** store */
import configureStore from "./redux/store"
const store = configureStore();

const app = document.getElementById("app");
ReactDOM.render(<RootContainer store={store}/>, app);