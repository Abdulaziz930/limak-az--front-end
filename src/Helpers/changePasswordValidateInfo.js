import language from "../translation/language.json";

export default function changePasswordValidateInfo(values, activeLanguage) {
  let errors = {};

  //old password validation
  if (!values.oldPassword.trim()) {
    errors.oldPassword = language[activeLanguage].passwordErrorMessage;
  } else if (values.oldPassword.length < 8) {
    errors.oldPassword = "Password needs to be 8 characters or more";
  }

  //new password validation
  if (!values.newPassword.trim()) {
    errors.newPassword = language[activeLanguage].passwordErrorMessage;
  } else if (values.newPassword.length < 8) {
    errors.newPassword = "Password needs to be 8 characters or more";
  }

  //confirm password validation
  if (!values.confirmPassword.trim()) {
    errors.confirmPassword =
      language[activeLanguage].confirmPasswordErrorMessage;
  } else if (values.confirmPassword !== values.newPassword) {
    errors.confirmPassword = "Password and confirm password do not match";
  }

  return errors;
}
