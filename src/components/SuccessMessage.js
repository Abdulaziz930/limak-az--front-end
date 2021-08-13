import React from "react";
import TimerCountDown from "./TimerCountDown";

const SuccessMessage = ({ email, firstSide, secondSide, description }) => {
  const hoursMinSecs = { minutes: 5, seconds: 60 };
  return (
    <div className='success-message-wrapper'>
      <div className='success-message-content'>
        <h4>
          {firstSide} <span className="email-text">{email}</span>
          <span dangerouslySetInnerHTML={{ __html: secondSide }}></span>
        </h4>
        <div className='timer-wrapper'>
          <p className='timer-text'>{description}</p>
          <TimerCountDown hoursMinSecs={hoursMinSecs} />
        </div>
      </div>
    </div>
  );
};

export default SuccessMessage;
