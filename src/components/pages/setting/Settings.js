import React, { useEffect, useState } from "react";
import Banner from "../../common/banner/Banner";
import Panles from "../../common/panels/Panles";
import { Tabs, Tab } from "react-bootstrap";
import language from "../../../translation/language.json";
import { useDispatch, useSelector } from "react-redux";
import { fetchCitiesContent } from "../../../actions";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import moment from "moment";
import { Grid } from "@material-ui/core";
import { fetchGenders } from "../../../actions";
import settingValidateInfo from "../../../Helpers/settingValidateInfo";
import changePasswordValidateInfo from "../../../Helpers/changePasswordValidateInfo";
import useSetting from "../../../hooks/useSetting";
import useChangePassword from "../../../hooks/useChangePassword";
import { mainAPI } from "../../../api";
import { withRouter } from "react-router-dom";

const Settings = (props) => {
  const dispatch = useDispatch();

  const { activeLanguage } = useSelector((state) => state.languages);
  const { cities } = useSelector((state) => state.cities);
  const { genders } = useSelector((state) => state.genders);
  const [userInfo, setUserInfo] = useState({});
  const [content, setContent] = useState({});
  const { values, handleChange, handleSubmitForm } =
    useSetting(settingValidateInfo);
  const { cpValues, cpErrors, handleChangeCp, handleSubmitCpForm } =
    useChangePassword(
      changePasswordValidateInfo,
      localStorage.getItem("username") || sessionStorage.getItem("username")
    );
  const {
    location: { pathname },
  } = props;

  useEffect(() => {
    const getUserInfo = async () => {
      await mainAPI
        .get(
          `https://localhost:44393/api/Profile/getUserInfo/${
            localStorage.getItem("username")
              ? localStorage.getItem("username")
              : sessionStorage.getItem("username")
          }`,
          {
            headers: {
              Authorization: `Bearer ${
                localStorage.getItem("token") || sessionStorage.getItem("token")
              }`,
            },
          }
        )
        .then((response) => setUserInfo(response.data));
    };
    const getContent = async () => {
      await mainAPI
        .get(`Profile/getSettingContent/${activeLanguage}`, {
          headers: {
            Authorization: `Bearer ${
              localStorage.getItem("token") || sessionStorage.getItem("token")
            }`,
          },
        })
        .then((response) => setContent(response.data));
    };
    dispatch(fetchCitiesContent());
    dispatch(fetchGenders());

    getContent();
    getUserInfo();
  }, [dispatch, activeLanguage, userInfo.birthDay]);

  const pathNames = pathname.split("/").filter((x) => x);

  return (
    <div className='settings-wrapper'>
      <Banner
        bannerTitle={language[activeLanguage].userPanelBannerHeader}
        pathName={language[activeLanguage].userPanelBannerHeader}
      />
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <Panles pathName={pathNames[0]} />
          </div>
          <div className='col-md-9'>
            <div className='content'>
              <Tabs
                defaultActiveKey='Profile'
                transition={false}
                id='uncontrolled-tab-example'>
                <Tab eventKey='Profile' title={content.profileTitle}>
                  <form onSubmit={handleSubmitForm}>
                    <div className='row'>
                      <div className='col-md-6'>
                        <div className='form-group'>
                          <input
                            className='form-control'
                            placeholder='Ad'
                            name='name'
                            value={values.name}
                            onChange={handleChange}
                          />
                        </div>
                        <div className='form-group'>
                          <select
                            className='form-control'
                            name='city'
                            onChange={handleChange}>
                            <option value=''>
                              --
                              {language[activeLanguage].cityInput.placeholder}
                              --
                            </option>
                            {cities?.map((city) => {
                              return (
                                <React.Fragment key={city.id}>
                                  {values.city === city.value ? (
                                    <option
                                      value={city.value}
                                      key={city.id}
                                      selected>
                                      {city.name}
                                    </option>
                                  ) : (
                                    <option value={city.value} key={city.id}>
                                      {city.name}
                                    </option>
                                  )}
                                </React.Fragment>
                              );
                            })}
                          </select>
                        </div>
                        <div className='form-group'>
                          <input
                            type='email'
                            className='form-control'
                            placeholder='Email'
                            name='email'
                            value={values.email}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='form-group'>
                          <input
                            type='text'
                            className='form-control'
                            placeholder='Soyad'
                            name='surname'
                            value={values.surname}
                            onChange={handleChange}
                          />
                        </div>
                        <div className='form-group'>
                          <input
                            type='text'
                            className='form-control'
                            placeholder='İstifadəçi adı'
                            name='userName'
                            value={values.userName}
                            onChange={handleChange}
                          />
                        </div>
                        <div className='form-group'>
                          <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid container justifyContent='space-around'>
                              <KeyboardDatePicker
                                disableToolbar
                                variant='inline'
                                format='MM/dd/yyyy'
                                maxDate={Date.parse(
                                  new Date().getFullYear() - 17
                                )}
                                margin='normal'
                                id='date-picker-inline'
                                label='BirthDay'
                                placeholder='birthday'
                                value={moment(values.birthDay).format("L")}
                                name='birthDay'
                                onChange={(e) =>
                                  handleChange(moment(e).format("L"))
                                }
                                KeyboardButtonProps={{
                                  "aria-label": "change date",
                                }}
                              />
                            </Grid>
                          </MuiPickersUtilsProvider>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='form-group'>
                          <input
                            type='number'
                            className='form-control'
                            placeholder='Seriya'
                            name='serialNumber'
                            value={values.serialNumber}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='form-group'>
                          <input
                            type='text'
                            className='form-control'
                            placeholder='FIN'
                            name='finCode'
                            value={values.finCode}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-md-9'>
                        <div className='form-group'>
                          <input
                            className='form-control'
                            placeholder='Adres'
                            name='address'
                            value={values.address}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className='col-md-3'>
                        <select
                          className='form-control'
                          name='gender'
                          value={values.gender}
                          onChange={handleChange}>
                          <option value=''>
                            {language[activeLanguage].genderInput.placeholder}
                          </option>
                          {genders.map((gender) => {
                            return (
                              <option value='male' key={gender.id}>
                                {gender.name}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                    <div className='btnBox'>
                      <button className='btn' type='submit'>
                        {content.buttonName}
                      </button>
                    </div>
                  </form>
                </Tab>
                <Tab eventKey='Password' title={content.changePasswordTitle}>
                  <form onSubmit={handleSubmitCpForm}>
                    <div className='form-group'>
                      <input
                        type='password'
                        className='form-control'
                        name='oldPassword'
                        placeholder={
                          language[activeLanguage].oldPassword.placeholder
                        }
                        value={cpValues.oldPassword}
                        onChange={handleChangeCp}
                      />
                      {cpErrors.oldPassword && (
                        <p className='error-message'>{cpErrors.oldPassword}</p>
                      )}
                    </div>
                    <div className='form-group'>
                      <input
                        type='password'
                        className='form-control'
                        name='newPassword'
                        placeholder={
                          language[activeLanguage].newPassword.placeholder
                        }
                        value={cpValues.newPassword}
                        onChange={handleChangeCp}
                      />
                      {cpErrors.newPassword && (
                        <p className='error-message'>{cpErrors.newPassword}</p>
                      )}
                    </div>
                    <div className='form-group'>
                      <input
                        type='password'
                        className='form-control'
                        name='confirmPassword'
                        placeholder={
                          language[activeLanguage].confirmPasswordInput
                            .placeholder
                        }
                        value={cpValues.confirmPassword}
                        onChange={handleChangeCp}
                      />
                      {cpErrors.confirmPassword && (
                        <p className='error-message'>
                          {cpErrors.confirmPassword}
                        </p>
                      )}
                      {cpErrors.common && (
                        <p className='error-message'>{cpErrors.common}</p>
                      )}
                    </div>
                    <div className='btnBox'>
                      <button className='btn' type='submit'>
                        {content.buttonName}
                      </button>
                    </div>
                  </form>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Settings);
