import { viewPlayers } from "../view/viewPlayers";
import { servicePlayers } from "../services/servicePlayers";
import { Player } from "../models/player.model";
import { PLAYERS } from "../contants/players.mock";
import { iPlayer } from "../models/player.interface";
export class controllerPlayers {
  players: Player[];
  view: viewPlayers;
  constructor(view: viewPlayers, servicePlayer: servicePlayers) {
    this.view = view;
    this.players = [];
    this.chargePlayers();
    console.log(this.players);
    this.view.chargeCards(this.players);
  }
  chargePlayers() {
    PLAYERS.forEach((_player: iPlayer) =>
      this.players.push(new Player(_player))
    );
  }
}
