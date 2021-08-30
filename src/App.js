import React, { Suspense } from "react";
import SpinnerWrapper from "./components/common/spinner/SpinnerWrapper";
import Navi from "./components/layout/navbar/Navi";
import { Redirect, Route, Switch } from "react-router-dom";
import Footer from "./components/layout/footer/Footer";
import { useDispatch } from "react-redux";
import { setUser } from "./actions";

function App() {
  const dispatch = useDispatch();

  const Home = React.lazy(() => import("./components/pages/home/Home"));
  const Contact = React.lazy(() =>
    import("./components/pages/contact/Contact")
  );
  const Shops = React.lazy(() => import("./components/pages/shop/Shops"));
  const Countries = React.lazy(() =>
    import("./components/pages/country/Countries")
  );
  const Calculator = React.lazy(() =>
    import("./components/pages/calculator/Calculator")
  );
  const Rules = React.lazy(() => import("./components/pages/rule/Rules"));
  const Questions = React.lazy(() =>
    import("./components/pages/question/Questions")
  );
  const About = React.lazy(() => import("./components/pages/about/About"));
  const Privacy = React.lazy(() =>
    import("./components/pages/privacy/Privacy")
  );
  const AdvertisementDetail = React.lazy(() =>
    import("./components/pages/advertisementDetail/AdvertisementDetail")
  );
  const Register = React.lazy(() =>
    import("./components/pages/auth/register/Register")
  );
  const Login = React.lazy(() => import("./components/pages/auth/login/Login"));
  const ForgotPassword = React.lazy(() =>
    import("./components/pages/auth/resetPassword/ForgotPassword")
  );
  const MakeOrder = React.lazy(() =>
    import("./components/pages/makeOrder/MakeOrder")
  );
  const ResetPassword = React.lazy(() =>
    import("./components/pages/auth/resetPassword/ResetPassword")
  );
  const VerifyEmail = React.lazy(() =>
    import("./components/pages/auth/verifyEmail/VerifyEmail")
  );
  const UserPanel = React.lazy(() => import("./components/pages/userPanel/UserPanel"));
  const Addresses = React.lazy(() =>
    import("./components/pages/address/Addresses")
  );
  const Balance = React.lazy(() => import("./components/pages/balance/Balance"));
  const Settings = React.lazy(() => import("./components/pages/setting/Settings"));
  const Parcels = React.lazy(() => import("./components/pages/parcel/Parcels"));
  const Error = React.lazy(() => import("./components/pages/error/Error"));

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
