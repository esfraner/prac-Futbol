import { Moment } from "moment";
import { iPlayer } from "./player.interface";
export class Player {
  public id: string;
  public alias: string;
  public name: string;
  public birthday: Moment;

  constructor({ id, alias, name, birthday }: iPlayer) {
    this.id = id;
    this.alias = alias;
    this.name = name;
    this.birthday = birthday;
  }
}
