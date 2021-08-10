import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

const useForm = (validateInfo, isChecked) => {
  const [values, setValues] = useState({
    userName: "",
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
    city: "",
    serialNumber: "",
    birthDay: "",
    gender: "",
    finCode: "",
    address: "",
    phoneNumber: "",
    Checked: "",
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

    setErrors(validateInfo(values, isChecked, activeLanguage));

    if (isNull && isChecked) {
      axios
        .post("https://localhost:44393/api/Authenticate/register", values)
        .then(push("/login"));
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

export default useForm;
