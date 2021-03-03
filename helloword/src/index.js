/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import Hello from './Component/HelloComponent';
import Login from "./login";


ReactDOM.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "register-service-worker";

const HelloComponent = () => {
  return HelloComponent;
};
class StateFullComponent extends React.Component {
  render() {
    return <p>StateFullComponent</p>;
  }
}
ReactDOM.render(<StateFullComponent />, document.getElementById("root"));

serviceWorker.unregister();*/


import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import * as serviceWorker from './serviceWorker';

import BlogPost from "./container/BlogPost/BlogPost";

ReactDOM.render(<BlogPost />, document.getElementById('content'));

serviceWorker.unregister();