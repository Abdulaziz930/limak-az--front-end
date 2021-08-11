import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

const useLogin = (loginValidateInfo, isChecked) => {
  const [values, setValues] = useState({
    userName: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isNull, setIsNull] = useState(false);
  const [token, setToken] = useState("");
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

    setErrors(loginValidateInfo(values, activeLanguage));

    if (isNull) {
      axios
        .post("https://localhost:44393/api/Authenticate/login", values)
        .then((response) => setToken(response.data.token));
    }
  };

  if (token !== "") {
    if (isChecked) {
      localStorage.setItem("token", token);
    } else {
      sessionStorage.setItem("token", token);
    }
    push("/");
  }

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      if (
        Object.keys(errors).length === 0 ||
        Object.keys(errors).length === null
      ) {
        setIsNull(true);
      }
    }
  }, [errors]);

  return { values, handleChange, handleSubmitForm, errors };
};

export default useLogin;
