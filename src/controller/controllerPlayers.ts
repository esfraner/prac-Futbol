import { viewPlayers } from '../view/viewPlayers';
import { servicePlayers } from '../services/servicePlayers';
import { Player } from '../models/player.model';
import { PLAYERS } from '../contants/players.mock';
import { iPlayer } from '../models/player.interface';
export class controllerPlayers {
  view: viewPlayers;
  servicePlayer: servicePlayers;
  constructor(view: viewPlayers, servicePlayer: servicePlayers) {
    this.view = view;
    this.servicePlayer = servicePlayer;
    this.view.bindLoadPlayers(this.handlerLoadPLayers);
    this.view._addPlayersEvent(
      this.servicePlayer.addPlayer,
      this.handlerGetPLayers
    );
    this.view._updatePlayersEvent(
      this.servicePlayer.updatePlayerAttributes,
      this.handlerGetPLayers
    );
    this.view._removePlayersEvent(
      this.servicePlayer.removePlayer,
      this.handlerGetPLayers
    );
  }

  handlerLoadPLayers = (): Player[] => {
    return this.servicePlayer.getInitPlayers();
  };

  handlerGetPLayers = (): Player[] => {
    return this.servicePlayer.getPlayers();
  };
}
