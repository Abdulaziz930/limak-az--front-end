import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const useRegister = (registerValidateInfo, isChecked) => {
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
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { activeLanguage } = useSelector((state) => state.languages);
  const isInitialMount = useRef(true);

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

    setErrors(registerValidateInfo(values, isChecked, activeLanguage));

    if (isNull && isChecked) {
      setLoading(true);
      axios
        .post("https://localhost:44393/api/Authenticate/register", values)
        .then((response) =>
          response.status === 200 ||
          response.status === 409 ||
          response.status === 403
            ? (localStorage.setItem("email", values.email),
              setIsSubmitted(true),
              setLoading(false))
            : setIsSubmitted(false)
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

  return {
    values,
    handleChange,
    handleSubmitForm,
    errors,
    isSubmitted,
    loading,
  };
};

export default useRegister;
