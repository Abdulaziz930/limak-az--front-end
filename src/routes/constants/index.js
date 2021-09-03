import home from "../pages/home/home.json";
import about from "../pages/about/about.json";
import address from "../pages/address/address.json";
import advertisementDetail from "../pages/advertisementDetail/advertisementDetail.json";
import login from "../pages/auth/login/login.json";
import register from "../pages/auth/register/register.json";
import verifyEmail from "../pages/auth/verifyEmail/verifyEmail.json";
import resetPassword from "../pages/auth/resetPassword/resetPassword.json";
import forgotPassword from "../pages/auth/resetPassword/forgotPassword.json";
import balance from "../pages/balance/balance.json";
import calculator from "../pages/calculator/calculator.json";
import contact from "../pages/contact/contact.json";
import country from "../pages/country/country.json";
import error from "../pages/error/error.json";
import makeOrder from "../pages/makeOrder/makeOrder.json";
import parcel from "../pages/parcel/parcel.json";
import privacy from "../pages/privacy/privacy.json";
import question from "../pages/question/question.json";
import rule from "../pages/rule/rule.json";
import setting from "../pages/setting/setting.json";
import shop from "../pages/shop/shop.json";
import userPanel from "../pages/userPanel/userPanel.json";

export const APP_ROUTES = {
  Home: home.pageRoute,
  About: about.pageRoute,
  Address: address.pageRoute,
  AdvertisementDetail: advertisementDetail.pageRoute,
  Login: login.pageRoute,
  Register: register.pageRoute,
  VerifyEmail: verifyEmail.pageRoute,
  ResetPassword: resetPassword.pageRoute,
  ForgotPassword: forgotPassword.pageRoute,
  Balance: balance.pageRoute,
  Calculator: calculator.pageRoute,
  Contact: contact.pageRoute,
  Country: country.pageRoute,
  MakeOrder: makeOrder.pageRoute,
  Parcel: parcel.pageRoute,
  Privacy: privacy.pageRoute,
  Question: question.pageRoute,
  Rule: rule.pageRoute,
  Setting: setting.pageRoute,
  Shop: shop.pageRoute,
  UserPanel: userPanel.pageRoute,
};

export const REDIRECT_ROUTES = {
  Login: login.redirectRoute,
  Error: error.redirectRoute,
};
