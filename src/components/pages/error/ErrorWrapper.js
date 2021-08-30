import React from "react";
import ReactDOM from "react-dom";
import Error from "./Error";

const ErrorWrapper = () => {
  return ReactDOM.createPortal(<Error />, document.querySelector("#error"));
};

export default ErrorWrapper;
