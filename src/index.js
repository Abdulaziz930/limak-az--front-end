import React from "react";
import ReactDOM from "react-dom";
import App from "../src/components/root/App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../src/redux/store";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./scss/index.scss";
import "@fortawesome/fontawesome-free";
import "alertifyjs/build/css/alertify.min.css";
import MessengerCustomerChat from "react-messenger-customer-chat";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
    <MessengerCustomerChat pageId='100219905732815' appId='268268381551408' />
  </React.StrictMode>,
  document.getElementById("root")
);
