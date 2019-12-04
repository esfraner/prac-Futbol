import { iPlayer } from './player.interface';
import moment = require('moment');
export class Player {
  public id: string;
  public alias: string;
  public name: string;
  public birthday: string;
  public club: string;
  public rol: string;
  public image: string;
  constructor({ id, alias, name, birthday, club, rol, image }: iPlayer) {
    this.id = id;
    this.alias = alias;
    this.name = name;
    this.club = club;
    this.rol = rol;
    this.birthday = moment(birthday).format('DD/MM/YYYY');
    this.image = image;
  }
}
