import language from "../translation/language.json";

export default function validateInfo(values, isChecked, activeLanguage) {
  let errors = {};

  if (!isChecked) {
    errors.Checked = language[activeLanguage].checkErrorMessage;
  }

  //username validation
  if (!values.userName.trim()) {
    errors.userName = language[activeLanguage].usernameErrorMessage;
  }

  //name validation
  if (!values.name.trim()) {
    errors.name = language[activeLanguage].nameErrorMessage;
  } else if (values.name.length > 255) {
    errors.name = "Name can be up to 255 characters";
  }

  //surname validation
  if (!values.surname.trim()) {
    errors.surname = language[activeLanguage].surnameErrorMessage;
  } else if (values.surname.length > 255) {
    errors.surname = "Surname can be up to 255 characters";
  }

  //email validation
  if (!values.email) {
    errors.email = language[activeLanguage].emailErrorMessage;
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

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

  //city validation
  if (!values.city || values.city === "") {
    errors.city = language[activeLanguage].officeErrorMessage;
  }

  //serail number validation
  if (!values.serialNumber.trim()) {
    errors.serialNumber = language[activeLanguage].serialNumberErrorMessage;
  } else if (isNaN(values.serialNumber)) {
    errors.serialNumber = "Serial number should be consist of numbers";
  } else if (values.serialNumber.length !== 8) {
    errors.serialNumber = "Serail number needs to be 8 characters";
  }

  //birthday validation
  if (!values.birthDay) {
    errors.birthDay = language[activeLanguage].birthDayErrorMessage;
  } else if (isNaN(Date.parse(values.birthDay))) {
    errors.birthDay = "This is not a valid date format.";
  }

  //fin code validation
  if (!values.finCode.trim()) {
    errors.finCode = language[activeLanguage].finCodeErrorMessage;
  } else if (values.finCode.length !== 7) {
    errors.finCode = "Fin code needs to be 7 characters";
  }

  //address validation
  if (!values.address.trim()) {
    errors.address = language[activeLanguage].addressErrorMessage;
  }

  //phone number validation
  if (!values.phoneNumber.trim()) {
    errors.phoneNumber = language[activeLanguage].phoneNumberErrorMessage;
  } else if (
    !/^[+]?[0-9]{3}?[-]?[0-9]{2}[-]?[0-9]{3}[-]?[0-9]{2}[-]?[0-9]{2}$/.test(
      values.phoneNumber
    )
  ) {
    errors.phoneNumber = "Phone number is invalid";
  }

  return errors;
}
