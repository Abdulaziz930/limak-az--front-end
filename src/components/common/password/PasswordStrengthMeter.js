import React from "react";
import indicator from "zxcvbn";
import language from "../../../translation/language.json";
import { useSelector } from "react-redux";

const PasswordStrengthMeter = ({ password, hidden }) => {
  const { activeLanguage } = useSelector((state) => state.languages);

  const indicatorResult = indicator(password);
  const indicatorPercent = (indicatorResult.score * 100) / 4;

  const progressColor = () => {
    switch (indicatorResult.score) {
      case 0:
        return "#828282";
      case 1:
        return "#EA1111";
      case 2:
        return "#FFAD00";
      case 3:
        return "#9bc158";
      case 4:
        return "#00b500";
      default:
        return "none";
    }
  };

  const progressLabel = () => {
    switch (indicatorResult.score) {
      case 0:
        return language[activeLanguage].passwordStrengthLabel.veryWeak;
      case 1:
        return language[activeLanguage].passwordStrengthLabel.weak;
      case 2:
        return language[activeLanguage].passwordStrengthLabel.fear;
      case 3:
        return language[activeLanguage].passwordStrengthLabel.good;
      case 4:
        return language[activeLanguage].passwordStrengthLabel.strong;
      default:
        return "";
    }
  };

  const changePasswordColor = () => ({
    width: `${indicatorPercent}%`,
    background: progressColor(),
    height: "7px",
  });

  return (
    <>
      {hidden ? (
        <>
          <div
            className='progress mt-1'
            style={{ height: "7px", visibility: "hidden" }}>
            <div className='progress-bar' style={changePasswordColor()}></div>
          </div>
          <p
            style={{
              color: progressColor(),
              fontSize: "13px",
              visibility: "hidden",
              marginBottom: "0",
            }}>
            {progressLabel()}
          </p>
        </>
      ) : (
        <>
          <div className='progress mt-1' style={{ height: "7px" }}>
            <div className='progress-bar' style={changePasswordColor()}></div>
          </div>
          <p
            style={{
              color: progressColor(),
              fontSize: "13px",
              marginBottom: "0",
            }}>
            {progressLabel()}
          </p>
        </>
      )}
    </>
  );
};

export default PasswordStrengthMeter;
