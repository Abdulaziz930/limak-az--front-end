import React from "react";
import Navi from "../layout/navbar/Navi";
import Footer from "../layout/footer/Footer";
import { useDispatch } from "react-redux";
import { setUser } from "../../actions";
import Routes from "../routes/Routes";

function App() {
  const dispatch = useDispatch();

  let expiresDate = new Date(
    localStorage.getItem("expires") || sessionStorage.getItem("expires")
  );
  let dateNow = new Date();

  if (expiresDate < dateNow) {
    if (localStorage.getItem("token")) {
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      localStorage.removeItem("expires");
      dispatch(setUser(""));
      window.location.reload();
    } else if (sessionStorage.getItem("token")) {
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("username");
      sessionStorage.removeItem("expires");
      dispatch(setUser(""));
      window.location.reload();
    }
  }

  return (
    <>
      <Navi />
      <Routes />
      <Footer />
    </>
  );
}

export default App;
