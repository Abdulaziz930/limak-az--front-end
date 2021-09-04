import React from "react";
import Navi from "../layout/navbar/Navi";
import Footer from "../layout/footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/actions";
import Routes from "../routes/Routes";
import { Offline, Online } from "react-detect-offline";
import language from "../../translation/language.json";
import Error from "../pages/error/Error";

function App() {
  const dispatch = useDispatch();

  const { activeLanguage } = useSelector((state) => state.languages);

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
      <Offline>
        <Error
          statusCode={503}
          title={language[activeLanguage].errorPage.connectionError.title}
          description={
            language[activeLanguage].errorPage.connectionError.description
          }
          buttonIsExist={false}
        />
      </Offline>
      <Online>
        <Navi />
        <Routes />
        <Footer />
      </Online>
    </>
  );
}

export default App;
