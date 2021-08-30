import React from "react";
import ReactDOM from "react-dom";
import RuleModal from "./RuleModal";

const RuleModalWrapper = ({ isChecked, onClose, modalTitle, children }) => {
  return ReactDOM.createPortal(
    <RuleModal isShowed={isChecked} onClose={onClose} modalTitle={modalTitle}>
      {children}
    </RuleModal>,
    document.querySelector("#rule-modal")
  );
};

export default RuleModalWrapper;
