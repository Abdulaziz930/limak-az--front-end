import React from "react";
import SuccessMessage from "../../../common/successMessage/SuccessMessage";

const VerifyEmailRediretion = ({ email }) => {
  return (
    <>
      <SuccessMessage
        email={email}
        firstSide='Link uğurla'
        secondSide='<br />e-poçt adresinə göndərildi, xahiş olunur e-poçt adresinizi yoxlayın və e-poçt adresinizi doğrulayın'
        description='E-poçt adresi doğrulama linki keçərsiz olacaq'
      />
    </>
  );
};

export default VerifyEmailRediretion;
