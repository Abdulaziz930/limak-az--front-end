import React, { Suspense } from "react";
import SpinnerWrapper from "./components/SpinnerWrapper";
import Navi from "./components/Navi";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import { withRouter } from "react-router";

function App(props) {
  const Home = React.lazy(() => import("./components/Home"));
  const Contact = React.lazy(() => import("./components/Contact"));
  const Shops = React.lazy(() => import("./components/Shops"));
  const Countries = React.lazy(() => import("./components/Countries"));
  const Calculator = React.lazy(() => import("./components/Calculator"));
  const Rules = React.lazy(() => import("./components/Rules"));
  const Questions = React.lazy(() => import("./components/Questions"));
  const About = React.lazy(() => import("./components/About"));
  const Privacy = React.lazy(() => import("./components/Privacy"));
  const AdvertisementDetail = React.lazy(() =>
    import("./components/AdvertisementDetail")
  );
  const Register = React.lazy(() => import("./components/Register"));
  const Login = React.lazy(() => import("./components/Login"));
  const Error = React.lazy(() => import("./components/Error"));

  const {
    location: { pathname },
  } = props;

  const pathnames = pathname.split("/").filter((x) => x);

  function check() {
    if (pathnames[0] === "register" || pathnames[0] === "login") {
      if (localStorage.getItem("token") || sessionStorage.getItem("token")) {
        return true;
      }
    }
  }

  return (
    <>
      <Navi />
      <Suspense fallback={<SpinnerWrapper />}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/contact' component={Contact} />
          <Route path='/shops' component={Shops} />
          <Route path='/countries' component={Countries} />
          <Route path='/calculator' component={Calculator} />
          <Route path='/rules' component={Rules} />
          <Route path='/questions' component={Questions} />
          <Route path='/about' component={About} />
          <Route path='/privacy' component={Privacy} />
          <Route path='/advertisements/:id' component={AdvertisementDetail} />
          {check() === true ? (
            <Route path='*' component={Error} />
          ) : (
            <>
              <Route path='/register' component={Register} />
              <Route path='/login' component={Login} />
            </>
          )}
          <Route path='*' component={Error} />
        </Switch>
      </Suspense>
      <Footer />
    </>
  );
}

export default withRouter(App);
