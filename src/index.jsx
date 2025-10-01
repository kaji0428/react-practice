import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import MyComponent from "./Mycomponent.jsx";
import MyCalc from "./MyCalc.jsx";
import EventBasic from "./EventBasic.jsx";
import StateBasic from "./StateBasic.jsx";
import reportWebVitals from "./reportWebVitals.js";
import StateEffect from "./StateEffect.jsx";
import StateParent from "./stateParent.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <MyComponent Myname="kaji" />
    <MyComponent Myname="jojo" />
    <MyCalc num1={1} num2={2} />
    <EventBasic />
    <StateBasic init={0} />
    <StateBasic init={0} />
    <StateEffect init={10} />
    <StateParent />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
