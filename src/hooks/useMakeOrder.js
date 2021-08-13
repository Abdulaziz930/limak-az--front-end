import { useState, useEffect, useRef } from "react";
// import axios from "axios";
// import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";

const useMakeOrder = (orderValidateInfo, isChecked) => {
  // const dispatch = useDispatch();

  const [values, setValues] = useState({
    link: "",
    price: "",
    note: "",
    chacked: "",
  });
  const [errors, setErrors] = useState({});
  const [isNull, setIsNull] = useState(false);
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

    setErrors(orderValidateInfo(values, isChecked, activeLanguage));

    // if (isNull && isChecked) {
    //   axios
    //     .post("https://localhost:44393/api/Authenticate/login", values)
    //     .then((response) => setToken(response.data.token))
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

  return { values, handleChange, handleSubmitForm, errors };
};

export default useMakeOrder;
