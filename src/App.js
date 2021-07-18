import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchLanguages, fetchContents } from "./actions";
import SpinnerWrapper from "./components/SpinnerWrapper";
import Navi from "./components/Navi";
import Dashboard from "./components/Dashboard";

function App() {
  const dispatch = useDispatch();

  const { languages } = useSelector((state) => state.languages);
  const { loading } = useSelector((state) => state.contents);

  useEffect(() => {
    dispatch(fetchLanguages());
    dispatch(fetchContents());
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
