export default function courierValidateInfo(values) {
  let errors = {};

  //city validation
  if (!values.city.trim()) {
    errors.city = "Mütlqədir";
  }

  //area validation
  if (!values.area.trim()) {
    errors.area = "Mütlqədir";
  }

  //settlement validation
  if (!values.settlement.trim()) {
    errors.settlement = "Mütlqədir";
  }

  //street validation
  if (!values.street.trim()) {
    errors.street = "Mütlqədir";
  }

  //home validation
  if (!values.home.trim()) {
    errors.home = "Mütlqədir";
  }

  //phone validation
  if (!values.phone.trim()) {
    errors.phone = "Mütlqədir";
  } else if (
    !/^[+]?[0-9]{3}?[-]?[0-9]{2}[-]?[0-9]{3}[-]?[0-9]{2}[-]?[0-9]{2}$/.test(
      values.phoneNumber
    )
  ) {
    errors.phoneNumber = "Nömrəni düzgün daxil edin";
  }

  //parcel validation
  if (values.parcel.length === 0) {
    errors.parcel = "Mütlqədir";
  } else if (values.parcel.includes("")) {
    errors.parcel = "Boş ola bilməz";
  }

  return errors;
}
