import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import Banner from "./Banner";
import axios from "axios";
import Spinner from "./Spinner";

const VerifyEmail = () => {
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(true);

  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const id = searchParams.get("id");
  const token = searchParams.get("token");

  const replacedToken = token.split(" ").join("+");

  useEffect(() => {
    const verifyEmail = async () => {
      await axios
        .post("https://localhost:44393/api/Authenticate/verifyEmail", {
          id,
          token: replacedToken,
        })
        .catch((error) => setError(error.response.data));
      setLoading(false);
    };

    verifyEmail();
  }, [id, token, replacedToken]);

  return (
    <div className='verify-email-wrapper'>
      <Banner bannerTitle='Verify Email' pathName='Verify Email' />
      <div className='container'>
        {loading ? (
          <Spinner />
        ) : error === {} ? (
          <div className='verify-email-content'>
            <h4>Your e-mail address has been verified</h4>
            <p>
              Your email address has been successfully verified, thank you for
              choosing us. You can order your first cargo by clicking the
              "Continue" button.
            </p>
            <div className='btnBox'>
              <Link className='btn' to='/login'>
                Continue
              </Link>
            </div>
          </div>
        ) : error.status === "Bad Request" ? (
          <div className='verify-email-content'>
            <h2>500</h2>
            <h4>{error.message}</h4>
          </div>
        ) : (
          <div className='verify-email-content'>
            <h4>This link has been expired</h4>
            <p>
              The new link sent your e-mail address, please check and verify
              your e-mail address
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VerifyEmail;
