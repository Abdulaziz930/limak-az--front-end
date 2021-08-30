import React from "react";
import SuccessMessage from "../../../common/successMessage/SuccessMessage";

const VerifyEmailRediretion = ({ email }) => {
  return (
    <>
      <SuccessMessage
        email={email}
        firstSide='Link sent successfully to'
        secondSide='<br />e-mail address, please check and confirm your e-mail address'
        description='The email verify time will expire after'
      />
    </>
  );
};

export default VerifyEmailRediretion;
