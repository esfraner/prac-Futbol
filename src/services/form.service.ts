import { REGEXP } from '../contants/regexp';

export class formService {
  validateName(name: string) {
    console.log(name);
    return REGEXP.NAME.test(name);
  }

  validateSurname(surname = '') {
    return REGEXP.SURNAME.test(surname);
  }

  validateAddress(address = '') {
    return REGEXP.ADDRESS.test(address);
  }

  validatePostCode(cp = '') {
    return REGEXP.POSTAL_CODE.test(cp);
  }

  validateLandLine(landline = '') {
    return REGEXP.LAND_LINE.test(landline);
  }

  validateMobilePhone(phone = '') {
    return REGEXP.MOVILE_PHONE.test(phone);
  }

  validateEmail(email = '') {
    return REGEXP.EMAIL.test(email);
  }

  validateBirthDate(date: string = ''): boolean {
    const yearLimit = 2020; // moment().year();
    const year = +date.slice(-4);
    const isYearLimitGreaterYear = this.isYearLimitGreaterYear(yearLimit, year);
    return isYearLimitGreaterYear && REGEXP.BIRTH_DATE.test(date);
  }

  isYearLimitGreaterYear(yearLimit: number, year: number): boolean {
    return yearLimit > year;
  }
}
