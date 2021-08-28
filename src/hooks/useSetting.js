import { useState, useEffect, useRef } from "react";
import axios from "axios";
import alertify from "alertifyjs";

const useSetting = (settingValidateInfo) => {
  const [values, setValues] = useState({
    userName: "",
    name: "",
    surname: "",
    email: "",
    city: "",
    serialNumber: "",
    birthDay: "",
    gender: "",
    finCode: "",
    address: "",
    phoneNumber: "",
  });
  const [loading, setLoading] = useState(false);
  const isInitialMount = useRef(true);

  const handleChange = (e) => {
    if (typeof e !== "object") {
      setValues({
        ...values,
        birthDay: e,
      });
    } else {
      const { name, value } = e.target;
      setValues({
        ...values,
        [name]: value,
      });
    }
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    setLoading(true);
    axios
      .put("https://localhost:44393/api/Profile/updateUser", values)
      .then((response) =>
        response.status === 200
          ? alertify.success("Your profile successfully updated", 2)
          : alertify.error("Your profile not updated", 2)
      );
  };

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    }
  }, []);

  useEffect(() => {
    const getUserInfo = async () => {
      await axios
        .get(
          `https://localhost:44393/api/Profile/getUserInfo/${
            localStorage.getItem("username")
              ? localStorage.getItem("username")
              : sessionStorage.getItem("username")
          }`,
          {
            headers: {
              Authorization: `Bearer ${
                localStorage.getItem("token") || sessionStorage.getItem("token")
              }`,
            },
          }
        )
        .then((response) => setValues(response.data));
    };

    getUserInfo();
  }, []);

  return {
    values,
    handleChange,
    handleSubmitForm,
    loading,
  };
};

export default useSetting;
