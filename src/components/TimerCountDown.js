import React from "react";
import { useEffect, useState } from "react";

const TimerCountDown = ({ hoursMinSecs }) => {
  const { minutes = 0, seconds = 60 } = hoursMinSecs;
  const [[mins, secs], setTime] = useState([minutes, seconds]);

  const tick = () => {
    if (secs === 0 && mins !== 0) {
      setTime([mins - 1, 59]);
    } else if (secs !== 0) {
      setTime([mins, secs - 1]);
    }
  };

  useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  });
  return (
    <div className='timer-wrapper'>
      <p>{`${mins.toString().padStart(2, "0")}:${secs
        .toString()
        .padStart(2, "0")}`}</p>
    </div>
  );
};

export default TimerCountDown;
