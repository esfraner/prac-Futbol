import { Moment } from "moment";

export class Player {
  private id: string;
  private alias: string;
  private name: string;
  private birthday: Moment;

  constructor(id: string, alias: string, name: string, birthday: Moment) {
    this.id = id;
    this.alias = alias;
    this.name = name;
    this.birthday = birthday;
  }

  get Id(): string {
    return this.id;
  }
  set Id(id: string) {
    this.id = id;
  }
  get Alias(): string {
    return this.alias;
  }
  set Alias(alias: string) {
    this.alias = alias;
  }
  get Name(): string {
    return this.name;
  }
  set Name(name: string) {
    this.name = name;
  }
  get Birthday(): Moment {
    return this.birthday;
  }
  set Birthday(birthday: Moment) {
    this.birthday = birthday;
  }
}
