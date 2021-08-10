export default function validateInfo(values, isChecked) {
  let errors = {};

  if (!isChecked) {
    errors.Checked = "Required";
  }

  //username validation
  if (!values.userName.trim()) {
    errors.userName = "Username is required";
  }

  //name validation
  if (!values.name.trim()) {
    errors.name = "Name is required";
  } else if (values.name.length > 255) {
    errors.name = "Name can be up to 255 characters";
  }

  //surname validation
  if (!values.surname.trim()) {
    errors.surname = "Surname is required";
  } else if (values.surname.length > 255) {
    errors.surname = "Surname can be up to 255 characters";
  }

  //email validation
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  //password validation
  if (!values.password.trim()) {
    errors.password = "Password is required";
  } else if (values.password.length < 8) {
    errors.password = "Password needs to be 8 characters or more";
  }

  //confirm password validation
  if (!values.confirmPassword.trim()) {
    errors.confirmPassword = "Confirm password is required";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Password and confirm password do not match";
  }

  //city validation
  if (!values.city || values.city === "") {
    errors.city = "City is required";
  }

  //serail number validation
  if (!values.serialNumber.trim()) {
    errors.serialNumber = "Serial number is required";
  } else if (isNaN(values.serialNumber)) {
    errors.serialNumber = "Serial number should be consist of numbers";
  } else if (values.serialNumber.length !== 8) {
    errors.serialNumber = "Serail number needs to be 8 characters";
  }

  //birthday validation
  if (!values.birthDay) {
    errors.birthDay = "Birthday is required";
  } else if (isNaN(Date.parse(values.birthDay))) {
    errors.birthDay = "This is not a valid date format.";
  }

  //fin code validation
  if (!values.finCode.trim()) {
    errors.finCode = "Fin code is required";
  } else if (values.finCode.length !== 7) {
    errors.finCode = "Fin code needs to be 7 characters";
  }

  //address validation
  if (!values.address.trim()) {
    errors.address = "Address is required";
  }

  //phone number validation
  if (!values.phoneNumber.trim()) {
    errors.phoneNumber = "Phone number is required";
  } else if (
    !/^[+]?[0-9]{3}?[-]?[0-9]{2}[-]?[0-9]{3}[-]?[0-9]{2}[-]?[0-9]{2}$/.test(
      values.phoneNumber
    )
  ) {
    errors.phoneNumber = "Phone number is invalid";
  }

  //   if (errors !== {}) {
  //     errors.isError = true;
  //   } else {
  //     errors.isError = false;
  //   }

  return errors;
}
