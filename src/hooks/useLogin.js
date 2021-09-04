import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../redux/actions";

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
  const [expires, setExpires] = useState("");
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
        .then((response) => {
          setToken(response.data.token);
          setExpires(response.data.expires);
        })
        .catch(({ response }) =>
          setErrors({
            ...errors,
            common: response.data.message,
          })
        );
    }
  };

  if (token !== "" && expires !== "") {
    if (isChecked) {
      localStorage.setItem("token", token);
      localStorage.setItem("expires", expires);
      localStorage.setItem("username", values.userName);
      dispatch(setUser(localStorage.getItem("username")));
    } else {
      sessionStorage.setItem("token", token);
      sessionStorage.setItem("expires", expires);
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
