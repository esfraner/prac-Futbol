import { viewPlayers } from "../view/viewPlayers";
import { servicePlayers } from "../services/servicePlayers";
import { Player } from "../models/player.model";
import { PLAYERS } from "../contants/players.mock";
import { iPlayer } from "../models/player.interface";
export class controllerPlayers {
  players: Player[];
  constructor(view: viewPlayers, servicePlayer: servicePlayers) {
    this.players = [];
    this.chargePlayers();
    console.log(this.players);
  }
  chargePlayers() {
    PLAYERS.forEach(_player => this.players.push(new Player(_player)));
  }
}
