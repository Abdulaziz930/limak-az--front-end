import React from "react";

const RuleModal = ({ isShowed, onClose, modalTitle, children }) => {
  if (!isShowed) return null;

  return (
    <>
      <div className='overlay' onClick={onClose} />
      <div className='rule-modal-wrapper'>
        <div className='rule-modal-header'>
          <h4>{modalTitle}</h4>
          <span className='icon-box' onClick={onClose}>
            <i className='fas fa-times'></i>
          </span>
        </div>
        <div className='rule-modal-content'>
          <div className='rule-modal-body'>{children}</div>
          <div className='rule-modal-footer'>
            <button className='btn btn-cancle' onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RuleModal;
