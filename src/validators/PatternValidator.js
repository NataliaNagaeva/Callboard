import BaseValidator from './BaseValidator';

export default class PatternValidator extends BaseValidator {
  constructor(pattern, errorMessage='Неверный формат', infoMessage='') {
    super(errorMessage, infoMessage);

    this.pattern = pattern;
  }

  validateAttribute(obj, attr='value') {

    if(!(this.pattern instanceof RegExp)) {
      return [false, 'Неверный формат регулярного выражения'];
    }

    const str = obj[attr].trim();
    if (!this.pattern.test(str)) {
      return [false, this.errorMessage];
    }

    return [true, ''];
  }
}