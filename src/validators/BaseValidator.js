export default class BaseValidator {
  constructor(errorMessage, infoMessage) {
    this.errorMessage = errorMessage;
    this.infoMessage = infoMessage;
  }

  getErrorMessage() {
    return this.errorMessage;
  }

  getInfoMessage() {
    return this.infoMessage;
  }

  validateAttribute(obj, attr) {
    return [true, ""];
  }
}