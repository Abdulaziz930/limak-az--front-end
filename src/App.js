import React, { Suspense } from "react";
import SpinnerWrapper from "./components/SpinnerWrapper";
import Navi from "./components/Navi";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  const Home = React.lazy(() => import("./components/Home"));
  const Contact = React.lazy(() => import("./components/Contact"));
  const Shops = React.lazy(() => import("./components/Shops"));

  return (
    <>
      <Navi />
      <Suspense fallback={<SpinnerWrapper />}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/contact' component={Contact} />
          <Route path='/shops' component={Shops} />
        </Switch>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
