import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { useSelector } from "react-redux";
import Banner from "../../../common/banner/Banner";
import axios from "axios";
import Spinner from "../../../common/spinner/Spinner";
import verifyEmailRoute from "../../../../routes/auth/verifyEmail/verifyEmail.json";
import MetaDecorator from "../../../utils/metaDecorator/MetaDecorator";

const VerifyEmail = () => {
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(true);

  const { search } = useLocation();
  const { activeLanguage } = useSelector((state) => state.languages);
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
      <MetaDecorator
        title={verifyEmailRoute[activeLanguage].pageTitle}
        description={verifyEmailRoute[activeLanguage].pageDescription}
      />
      <Banner
        bannerTitle='Verify Email'
        pathName={verifyEmailRoute[activeLanguage].breadcrumbRoute}
      />
      <div className='container'>
        {loading ? (
          <Spinner />
        ) : error === {} ? (
          <div className='verify-email-content'>
            <h4>Your e-mail address has been verified</h4>
            <p>
              E-poçt adresiniz uğurla təsdiqləndi, bizi seçdiyiniz üçün təşəkkür
              edirik. İlk kargonuzu "Davam et" düyməsi tıklayaraq sifariş edə
              bilərsiniz.
            </p>
            <div className='btnBox'>
              <Link className='btn' to='/login'>
                Davam et
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
            <h4>Bu link artıq keçərsizdir</h4>
            <p>
              Yeni link e-poçt adresinizə göndərildi, xahiş olunur e-poçt
              adresinzi yoxlayın və e-poçt adresinzi təstiqləyin
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VerifyEmail;
