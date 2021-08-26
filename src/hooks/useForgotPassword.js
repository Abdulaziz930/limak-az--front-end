import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const useForgotPassword = (forgotPassowordValidateInfo) => {
  const [values, setValues] = useState({
    email: "",
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

    setErrors(forgotPassowordValidateInfo(values, activeLanguage));

    if (isNull) {
      axios
        .post("https://localhost:44393/api/Authenticate/forgotPassword", values)
        .then(
          (response) =>
            response.status === 200
              ? (setIsSubmitted(true), setLoading(false))
              : setIsSubmitted(false),
          setLoading(true)
        )
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
      if (
        Object.keys(errors).length === 0 ||
        Object.keys(errors).length === null
      ) {
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

export default useForgotPassword;
