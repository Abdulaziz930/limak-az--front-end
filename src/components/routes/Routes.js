import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import { APP_ROUTES } from "../../routes/constants";
import PrivateRoute from "../guards/privateRoute/PrivateRoute";
import AuthenticadePrivateRoute from "../guards/authenticadePrivateRoute/AuthenticadePrivateRoute";
import SpinnerWrapper from "../common/spinner/SpinnerWrapper";

const Routes = () => {
  const Home = lazy(() => import("../pages/home/Home"));
  const Contact = lazy(() => import("../pages/contact/Contact"));
  const Shops = lazy(() => import("../pages/shop/Shops"));
  const Countries = lazy(() => import("../pages/country/Countries"));
  const Calculator = lazy(() => import("../pages/calculator/Calculator"));
  const Rules = lazy(() => import("../pages/rule/Rules"));
  const Questions = lazy(() => import("../pages/question/Questions"));
  const About = lazy(() => import("../pages/about/About"));
  const Privacy = lazy(() => import("../pages/privacy/Privacy"));
  const AdvertisementDetail = lazy(() =>
    import("../pages/advertisementDetail/AdvertisementDetail")
  );
  const Register = lazy(() => import("../pages/auth/register/Register"));
  const Login = lazy(() => import("../pages/auth/login/Login"));
  const ForgotPassword = lazy(() =>
    import("../pages/auth/resetPassword/ForgotPassword")
  );
  const MakeOrder = lazy(() => import("../pages/makeOrder/MakeOrder"));
  const ResetPassword = lazy(() =>
    import("../pages/auth/resetPassword/ResetPassword")
  );
  const VerifyEmail = lazy(() =>
    import("../pages/auth/verifyEmail/VerifyEmail")
  );
  const UserPanel = lazy(() => import("../pages/userPanel/UserPanel"));
  const Addresses = lazy(() => import("../pages/address/Addresses"));
  const Balance = lazy(() => import("../pages/balance/Balance"));
  const Settings = lazy(() => import("../pages/setting/Settings"));
  const Parcels = lazy(() => import("../pages/parcel/Parcels"));
  const Error = lazy(() => import("../pages/error/Error"));

  return (
    <Suspense fallback={<SpinnerWrapper />}>
      <Switch>
        <Route exact path={APP_ROUTES.Home} component={Home} />
        <Route path={APP_ROUTES.Contact} component={Contact} />
        <Route path={APP_ROUTES.Shop} component={Shops} />
        <Route path={APP_ROUTES.Country} component={Countries} />
        <Route path={APP_ROUTES.Calculator} component={Calculator} />
        <Route path={APP_ROUTES.Rule} component={Rules} />
        <Route path={APP_ROUTES.Question} component={Questions} />
        <Route path={APP_ROUTES.About} component={About} />
        <Route path={APP_ROUTES.Privacy} component={Privacy} />
        <Route
          path={APP_ROUTES.AdvertisementDetail}
          component={AdvertisementDetail}
        />
        <PrivateRoute path={APP_ROUTES.UserPanel}>
          <UserPanel />
        </PrivateRoute>
        <PrivateRoute path={APP_ROUTES.Address}>
          <Addresses />
        </PrivateRoute>
        <PrivateRoute path={APP_ROUTES.Balance}>
          <Balance />
        </PrivateRoute>
        <PrivateRoute path={APP_ROUTES.Setting}>
          <Settings />
        </PrivateRoute>
        <PrivateRoute path={APP_ROUTES.Parcel}>
          <Parcels />
        </PrivateRoute>
        <PrivateRoute path={APP_ROUTES.MakeOrder}>
          <MakeOrder />
        </PrivateRoute>
        <AuthenticadePrivateRoute path={APP_ROUTES.Login}>
          <Login />
        </AuthenticadePrivateRoute>
        <AuthenticadePrivateRoute path={APP_ROUTES.Register}>
          <Register />
        </AuthenticadePrivateRoute>
        <AuthenticadePrivateRoute path={APP_ROUTES.VerifyEmail}>
          <VerifyEmail />
        </AuthenticadePrivateRoute>
        <AuthenticadePrivateRoute path={APP_ROUTES.ForgotPassword}>
          <ForgotPassword />
        </AuthenticadePrivateRoute>
        <AuthenticadePrivateRoute path={APP_ROUTES.ResetPassword}>
          <ResetPassword />
        </AuthenticadePrivateRoute>
        <Route path='*' component={Error} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
