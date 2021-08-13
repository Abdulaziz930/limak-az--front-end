import language from "../translation/language.json";

export default function resetPasswordValidateInfo(values, activeLanguage) {
  let errors = {};
  //password validation
  if (!values.password.trim()) {
    errors.password = language[activeLanguage].passwordErrorMessage;
  } else if (values.password.length < 8) {
    errors.password = "Password needs to be 8 characters or more";
  }

  //confirm password validation
  if (!values.confirmPassword.trim()) {
    errors.confirmPassword =
      language[activeLanguage].confirmPasswordErrorMessage;
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Password and confirm password do not match";
  }

  return errors;
}
