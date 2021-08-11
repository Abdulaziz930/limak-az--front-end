import language from "../translation/language.json";

export default function loginValidateInfo(values, activeLanguage) {
  let errors = {};

  //username validation
  if (!values.userName.trim()) {
    errors.userName = language[activeLanguage].usernameErrorMessage;
  }

  //password validation
  if (!values.password.trim()) {
    errors.password = language[activeLanguage].passwordErrorMessage;
  }

  return errors;
}
