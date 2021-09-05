import React from "react";
import Navi from "../layout/navbar/Navi";
import Footer from "../layout/footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/actions";
import Routes from "../routes/Routes";
import { Offline, Online } from "react-detect-offline";
import language from "../../translation/language.json";
import Error from "../pages/error/Error";
import logout from "../../Helpers/logout";

function App() {
  const dispatch = useDispatch();

  const { activeLanguage } = useSelector((state) => state.languages);

  let expiresDate = new Date(
    localStorage.getItem("expires") || sessionStorage.getItem("expires")
  );
  let dateNow = new Date();

  if (expiresDate < dateNow) {
    logout();
    dispatch(setUser(""));
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
