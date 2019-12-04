import { Moment } from 'moment';
export interface iPlayer {
  id: string;
  alias: string;
  name: string;
  birthday: string; //moment
  club: string;
  rol: string;
  image?: string;
}
