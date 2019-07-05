import BaseValidator from "./BaseValidator"

export default class RequiredValidator extends BaseValidator {
  constructor(errorMessage="Заполните поле", infoMessage="Обязательное поле") {
    super(errorMessage, infoMessage);
  }

  validateAttribute(obj, attr) {
    if (!obj[attr]) {
      return [false, this.errorMessage];
    }

    return [true, ""];
  }
}