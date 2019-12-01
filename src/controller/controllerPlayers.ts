import { viewPlayers } from "../view/viewPlayers";
import { servicePlayers } from "../services/servicePlayers";
import { Player } from "../models/player.model";
import { PLAYERS } from "../contants/players.mock";
export class controllerPlayers {
  players: Player[];
  constructor(view: viewPlayers, servicePlayer: servicePlayers) {
    this.players = [];
    this.chargePlayers();
  }
  chargePlayers() {
    console.log(PLAYERS); //prueba
    // const player1= new Player();
  }
}
