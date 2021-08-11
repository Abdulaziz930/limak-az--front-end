import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../actions";

const useLogin = (loginValidateInfo, isChecked) => {
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    userName: "",
    password: "",
    common: "",
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
        .then((response) => setToken(response.data.token))
        .catch(({ response }) =>
          setErrors({
            ...errors,
            common: response.data.message,
          })
        );
    }
  };

  if (token !== "") {
    if (isChecked) {
      localStorage.setItem("token", token);
      localStorage.setItem("username", values.userName);
      dispatch(setUser(localStorage.getItem("username")));
    } else {
      sessionStorage.setItem("token", token);
      sessionStorage.setItem("username", values.userName);
      dispatch(setUser(sessionStorage.getItem("username")));
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
