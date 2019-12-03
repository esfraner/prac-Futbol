import { iPlayer } from './player.interface';
import moment = require('moment');
export class Player {
  public id: string;
  public alias: string;
  public name: string;
  public birthday: string;

  constructor({ id, alias, name, birthday }: iPlayer) {
    this.id = id;
    this.alias = alias;
    this.name = name;
    this.birthday = moment(birthday).format('DD/MM/YYYY');
  }
}
