import { REGEXP } from '../contants/regexp';

export class formService {
  validateName(name: string) {
    console.log(name);
    return REGEXP.NAME.test(name);
  }

  validateAlias(alias: string) {
    return REGEXP.ALIAS.test(alias);
  }

  validateRol(rol: string) {
    return REGEXP.ROL.test(rol);
  }

  validateClub(club: string) {
    return REGEXP.CLUB.test(club);
  }

  validateBirthday(date: string): boolean {
    return REGEXP.BIRTH_DATE.test(date);
  }
}
