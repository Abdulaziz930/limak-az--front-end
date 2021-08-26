import React, { Suspense } from "react";
import SpinnerWrapper from "./components/SpinnerWrapper";
import Navi from "./components/Navi";
import { Redirect, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { setUser } from "./actions";

function App() {
  const dispatch = useDispatch();

  const { push } = useHistory();

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
  const Settings = React.lazy(() => import("./components/Settings"));
  const Parcels = React.lazy(() => import("./components/Parcels"));
  const Error = React.lazy(() => import("./components/Error"));

  function PrivateRoute({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render={() => {
          return localStorage.getItem("token") ||
            sessionStorage.getItem("token") ? (
            children
          ) : (
            <Redirect to='login' />
          );
        }}
      />
    );
  }

  function LoginPrivateRoute({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render={() => {
          return localStorage.getItem("token") ||
            sessionStorage.getItem("token") ? (
            <Redirect to='error' />
          ) : (
            children
          );
        }}
      />
    );
  }

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
      push("/");
    } else if (sessionStorage.getItem("token")) {
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("username");
      sessionStorage.removeItem("expires");
      dispatch(setUser(""));
      push("/");
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
          <PrivateRoute path='/panel'>
            <UserPanel />
          </PrivateRoute>
          <PrivateRoute path='/address'>
            <Addresses />
          </PrivateRoute>
          <PrivateRoute path='/balance'>
            <Balance />
          </PrivateRoute>
          <PrivateRoute path='/settings'>
            <Settings />
          </PrivateRoute>
          <PrivateRoute path='/parcels'>
            <Parcels />
          </PrivateRoute>
          <PrivateRoute path='/make-order'>
            <MakeOrder />
          </PrivateRoute>
          <LoginPrivateRoute path='/login'>
            <Login />
          </LoginPrivateRoute>
          <LoginPrivateRoute path='/register'>
            <Register />
          </LoginPrivateRoute>
          <LoginPrivateRoute path='/verify-email'>
            <VerifyEmail />
          </LoginPrivateRoute>
          <LoginPrivateRoute path='/forgot-password'>
            <ForgotPassword />
          </LoginPrivateRoute>
          <LoginPrivateRoute path='/reset-password'>
            <ResetPassword />
          </LoginPrivateRoute>
          <Route path='*' component={Error} />
        </Switch>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
