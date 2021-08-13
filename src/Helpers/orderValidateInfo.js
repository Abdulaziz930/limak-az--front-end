import language from "../translation/language.json";

export default function orderValidateInfo(values, isChecked, activeLanguage) {
  let errors = {};

  //username validation
  if (!values.link.trim()) {
    errors.link = language[activeLanguage].linkErrorMessage;
  }

  //price validation
  if (!values.price.trim()) {
    errors.price = language[activeLanguage].priceErrorMessage;
  }

  //note validation
  if (!values.note.trim()) {
    errors.note = language[activeLanguage].noteErrorMessage;
  }

  //check box validation
  if (!isChecked) {
    errors.Checked = language[activeLanguage].checkErrorMessage;
  }

  return errors;
}
