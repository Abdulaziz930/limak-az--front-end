import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

const useResetPassword = (resetPasswordValidateInfo, id, token) => {
  const replacedToken = token.split(" ").join("+");

  const [values, setValues] = useState({
    password: "",
    confirmPassword: "",
    id: id,
    token: replacedToken,
  });
  const [errors, setErrors] = useState({});
  const [isNull, setIsNull] = useState(false);
  const { activeLanguage } = useSelector((state) => state.languages);
  const isInitialMount = useRef(true);
  const { push } = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    setErrors(resetPasswordValidateInfo(values, activeLanguage));

    if (isNull) {
      axios
        .post("https://localhost:44393/api/Authenticate/resetPassword", values)
        .then((response) => (response.status === 200 ? push("/login") : null))
        .catch(({ response }) =>
          setErrors({
            ...errors,
            common: response.data.message,
          })
        );
    }
  };

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      if (Object.keys(errors).length === 0) {
        setIsNull(true);
      }
    }
  }, [errors]);

  return { values, handleChange, handleSubmitForm, errors };
};

export default useResetPassword;
