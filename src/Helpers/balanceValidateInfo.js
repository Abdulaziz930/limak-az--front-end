import language from "../translation/language.json";

export default function balanceValidateInfo(values, activeLanguage) {
  let errors = {};

  //balance validation
  if (!values.balance) {
    errors.balance = language[activeLanguage].balanceErrorMessage;
  } else if (values.balance <= 0 || values.balance > 50) {
    errors.balance = "Məbləğ 1 ilə 50 arasında ola bilər";
  } else if (isNaN(values.balance)) {
    errors.balance = "Məbləğ yalnız rəqəm ola bilər";
  }

  return errors;
}
