import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchLanguages, fetchContents, fetchCertificate } from "./actions";
import SpinnerWrapper from "./components/SpinnerWrapper";
import Navi from "./components/Navi";
import Dashboard from "./components/Dashboard";

function App() {
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.contents);

  useEffect(() => {
    dispatch(fetchLanguages());
    dispatch(fetchContents());
    dispatch(fetchCertificate());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <SpinnerWrapper />
      ) : (
        <>
          <Navi />
          <Dashboard />
        </>
      )}
    </>
  );
}

export default App;
