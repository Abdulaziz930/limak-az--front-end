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
  const ForgotPassword = React.lazy(() =>
    import("./components/ForgotPassword")
  );
  const MakeOrder = React.lazy(() => import("./components/MakeOrder"));
  const ResetPassword = React.lazy(() => import("./components/ResetPassword"));
  const VerifyEmail = React.lazy(() => import("./components/VerifyEmail"));
  const UserPanel = React.lazy(() => import("./components/UserPanel"));
  const Addresses = React.lazy(() => import("./components/Addresses"));
  const Balance = React.lazy(() => import("./components/Balance"));
  const WriteQuestion = React.lazy(() => import("./components/WriteQuestion"));
  const Settings = React.lazy(() => import("./components/Settings"));
  const Parcels = React.lazy(() => import("./components/Parcels"));
  const Courier = React.lazy(() => import("./components/Courier"));
  const Error = React.lazy(() => import("./components/Error"));

  const TestComponent = React.lazy(() => import("./components/TestComponent"));

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

    return false;
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
          <Route path='/make-order' component={MakeOrder} />
          <Route path='/reset-password' component={ResetPassword} />
          <Route path='/panel' component={UserPanel} />
          <Route path='/address' component={Addresses} />
          <Route path='/balance' component={Balance} />
          <Route path='/write-question' component={WriteQuestion} />
          <Route path='/settings' component={Settings} />
          <Route path='/test' component={TestComponent} />
          <Route path='/parcels' component={Parcels} />
          <Route path='/courier' component={Courier} />
          {check() === true ? (
            <Route path='*' component={Error} />
          ) : (
            <>
              <Route path='/register' component={Register} />
              <Route path='/verify-email' component={VerifyEmail} />
              <Route path='/login' component={Login} />
              <Route path='/forgot-password' component={ForgotPassword} />
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
