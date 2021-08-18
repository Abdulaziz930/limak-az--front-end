import { useState, useEffect, useRef } from "react";
import axios from "axios";

const useCourier = (courierValidateInfo) => {
  const [values, setValues] = useState({
    city: "",
    area: "",
    settlement: "",
    street: "",
    home: "",
    phone: "",
    parcel: [],
  });
  const [errors, setErrors] = useState({});
  const [isNull, setIsNull] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const isInitialMount = useRef(true);

  const handleChange = (e) => {
    const { name, value, selectedOptions } = e.target;

    if (name === "parcel") {
      let resultValue = Array.from(selectedOptions, (option) => option.value);
      setValues({
        ...values,
        parcel: resultValue,
      });
    } else {
      setValues({
        ...values,
        [name]: value,
      });
    }

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    setErrors(courierValidateInfo(values));

    // if (isNull) {
    //   setLoading(true);
    //   axios
    //     .post("https://localhost:44393/api/Authenticate/forgotPassword", values)
    //     .then(
    //       (response) =>
    //         response.status === 200
    //           ? (setIsSubmitted(true), setLoading(false))
    //           : setIsSubmitted(false),
    //       setLoading(false)
    //     )
    //     .catch(({ response }) =>
    //       setErrors({
    //         ...errors,
    //         common: response.data.message,
    //       })
    //     );
    // }
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

export default useCourier;
