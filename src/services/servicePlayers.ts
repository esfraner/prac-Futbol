import { Player } from "../models/player.model";
import { PLAYERS } from "../contants/players.mock";

export class servicePlayers {
  players: Player[];
  constructor() {
    this.players = [];
  }
  getPlayers = () => {
    PLAYERS.forEach((_player: Player) =>
      this.players.push(new Player(_player))
    );
    return this.players;
  };
}
