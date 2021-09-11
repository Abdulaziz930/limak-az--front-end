import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import alertify from "alertifyjs";

const useChangePassword = (changePasswordValidateInfo, userName) => {
  const [cpValues, setCpValues] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
    userName: userName,
  });
  const [cpErrors, setCpErrors] = useState({});
  const [isNull, setIsNull] = useState(false);
  const { activeLanguage } = useSelector((state) => state.languages);
  const isInitialMount = useRef(true);

  const handleChangeCp = (e) => {
    const { name, value } = e.target;

    setCpValues({
      ...cpValues,
      [name]: value,
    });

    setCpErrors({
      ...cpErrors,
      [name]: "",
    });
  };

  const handleSubmitCpForm = (e) => {
    e.preventDefault();

    setCpErrors(changePasswordValidateInfo(cpValues, activeLanguage));

    if (isNull) {
      axios
        .post(
          "https://localhost:44393/api/Authenticate/changePassword",
          cpValues
        )
        .then((response) =>
          response.status === 200
            ? (alertify.success("Profiliniz uğurla yeniləndi", 2),
              setCpValues({
                oldPassword: "",
                newPassword: "",
                confirmPassword: "",
              }))
            : alertify.error("Profiliniz yenilənmədi", 2)
        )
        .catch(({ response }) =>
          setCpErrors({
            ...cpErrors,
            common: response.data.message,
          })
        );
    }
  };

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      if (Object.keys(cpErrors).length === 0) {
        setIsNull(true);
      }
    }
  }, [cpErrors]);

  return { cpValues, handleChangeCp, handleSubmitCpForm, cpErrors };
};

export default useChangePassword;
