import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import Panles from "./Panles";
import balanceValidateInfo from "../Helpers/balanceValidateInfo";
import useBalance from "../hooks/useBalance";
import { useSelector } from "react-redux";
import language from "../translation/language.json";
import axios from "axios";

const Balance = () => {
  const { activeLanguage } = useSelector((state) => state.languages);

  const { handleChange, handleSubmitForm, errors, values } =
    useBalance(balanceValidateInfo);

  const [content, setContent] = useState({});

  useEffect(() => {
    const getContent = async () => {
      axios
        .get(
          `https://localhost:44393/api/BalanceContent/balanceContent/${activeLanguage}`
        )
        .then((response) => setContent(response.data));
    };

    getContent();
  }, [activeLanguage]);

  return (
    <div className='balance-wrapper'>
      <Banner bannerTitle='Istifadəçi Paneli' pathName='Istifadəçi Paneli' />
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <Panles />
          </div>
          <div className='col-md-9'>
            <div className='row'>
              <div className='col-md-5'>
                <div className='balance-body'>
                  <div className='balance-box'>
                    <img
                      src='http://localhost:3000/images/balans-mob.png'
                      alt=''
                      className='w-100'
                    />
                    <div className='balance-content'>
                      <div className='balance-text'>
                        <span className='header'>{content.header}</span>
                        <div className='balance-count'>
                          <span className='count'>0.00 &#8380;</span>
                        </div>
                        <div className='balance-description'>
                          <p
                            className='description-text'
                            dangerouslySetInnerHTML={{
                              __html: content.description,
                            }}></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-7'>
                <div className='increase-balance-wrapper'>
                  <div className='increase-balance-content'>
                    <h4>{content.increaseBalanceHeader}</h4>
                    <form onSubmit={handleSubmitForm}>
                      <div className='row'>
                        <div className='col-md-6'>
                          <div className='form-group'>
                            <input
                              type='number'
                              className='form-control'
                              min='0'
                              max='50'
                              name='balance'
                              placeholder={`${language[activeLanguage].balanceInput.placeholder} *`}
                              value={values.balance}
                              onChange={handleChange}
                            />
                            {errors.balance && (
                              <p className='error-message'>{errors.balance}</p>
                            )}
                          </div>
                        </div>
                        <div className='col-md-6'>
                          <div className='btnBox'>
                            <button className='btn' type='submit'>
                              {content.increaseBalanceButtonName}
                            </button>
                          </div>
                        </div>
                        <div className='col-md-12'>
                          <div className='description'>
                            <p>{content.increaseBalanceDescription}</p>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className='col-md-12'>
                <div className='actions'>
                  <table className='table table-bordered'>
                    <thead>
                      <tr>
                        <th scope='col'>{content.tableActionHeader}</th>
                        <th scope='col'>{content.tablePriceHeader}</th>
                        <th scope='col'>{content.tableDateHeader}</th>
                      </tr>
                    </thead>
                    <tbody></tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balance;
