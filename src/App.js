import React, { Suspense, useEffect } from "react";
import SpinnerWrapper from "./components/SpinnerWrapper";
import Navi from "./components/Navi";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchAdvertisements } from "./actions";

function App() {
  const Home = React.lazy(() => import("./components/Home"));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdvertisements(3));
  }, [dispatch]);

  return (
    <>
      <Navi />
      <Suspense fallback={<SpinnerWrapper />}>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
