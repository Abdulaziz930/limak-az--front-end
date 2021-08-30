import React from "react";
import ReactDOM from "react-dom";
import Spinner from "./Spinner";

const SpinnerWrapper = () => {
  return ReactDOM.createPortal(<Spinner />, document.querySelector("#spinner"));
};

export default SpinnerWrapper;
