import BaseValidator from './BaseValidator';

export default class StringValidator extends BaseValidator {
  constructor(max=99999, errorMessage='Не более {max} символов.', infoMessage='Не более {max} символов.') {
    super(errorMessage.replace('{max}', max), infoMessage.replace('{max}', max));
    if (max < 0) {
      throw new Error('Max should be greater then 0');
    }

    this.max = max;
  }

  validateAttribute(obj, attr) {
    if (!obj[attr]) {
      return [true, ''];
    }

    if (typeof(obj[attr]) !== 'string') {
      return [false, `Поле ${attr} должно быть строкой`];
    }

    if (obj[attr].length > this.max) {
      return [false, this.errorMessage];
    }

    return [true, '']
  }
}