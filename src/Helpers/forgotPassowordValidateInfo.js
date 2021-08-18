import language from "../translation/language.json";

export default function forgotPasswordValidateInfo(values, activeLanguage){
    let errors = {}

    //email validation
  if (!values.email.trim()) {
    errors.email = language[activeLanguage].emailErrorMessage;
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  return errors;
}