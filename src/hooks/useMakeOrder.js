import { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { mainAPI } from "../api";

const useMakeOrder = (orderValidateInfo, isChecked, counter, sum, balance) => {
  const { user } = useSelector((state) => state.user);
  const [values, setValues] = useState({
    userName: user,
    url: "",
    price: "",
    note: "",
    count: "1",
    chacked: "",
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
  };

  const makeOreder = async () => {
    await mainAPI
      .post("Order/makeOrder", [values], {
        headers: {
          Authorization: `Bearer ${
            localStorage.getItem("token") || sessionStorage.getItem("token")
          }`,
        },
      })
      .then((response) => (response.status === 200 ? push("/parcels") : ""));
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    setErrors(
      orderValidateInfo(values, isChecked, activeLanguage, sum, balance)
    );

    if (isNull && isChecked) {
      let resultBalance = Number(balance) - Number(sum);
      await mainAPI
        .post(
          "Payment/decreaseBalance",
          {
            userName: user,
            resultBalance: resultBalance.toFixed(2),
            amount: sum,
          },
          {
            headers: {
              Authorization: `Bearer ${
                localStorage.getItem("token") || sessionStorage.getItem("token")
              }`,
            },
          }
        )
        .then((response) => (response.status === 200 ? makeOreder() : ""));
    }
  };

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      console.log(Object.keys(errors).length);
      if (Object.keys(errors).length === 0) {
        setIsNull(true);
      }
    }
  }, [errors]);

  useEffect(() => {
    setValues({
      ...values,
      count: counter,
    });
  }, [counter]);

  return { values, handleChange, handleSubmitForm, errors };
};

export default useMakeOrder;
