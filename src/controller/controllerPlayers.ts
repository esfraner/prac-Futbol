import { viewPlayers } from '../view/viewPlayers';
import { servicePlayers } from '../services/servicePlayers';
import { formService } from '../services/form.service';
import { Player } from '../models/player.model';
import { PLAYERS } from '../contants/players.mock';
import { iPlayer } from '../models/player.interface';
export class controllerPlayers {
  view: viewPlayers;
  servicePlayer: servicePlayers;
  formService: formService;
  constructor(
    view: viewPlayers,
    servicePlayer: servicePlayers,
    formService: formService
  ) {
    this.view = view;
    this.servicePlayer = servicePlayer;
    this.formService = formService;
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
    this.view._cleanInputsButton();
    /*  this.view.getElementsFromForm(); */
    this.view.bindName(this.handleName);
  }

  handleName = (name: string) => {
    console.log(name);
    return this.formService.validateName(name);
  };

  /*   handleSurname = surName => {
    return this.formService.validateSurname(surName);
  };

  handleAddress = address => {
    return this.formService.validateAddress(address);
  }; */

  handlerLoadPLayers = (): Player[] => {
    return this.servicePlayer.getInitPlayers();
  };

  handlerGetPLayers = (): Player[] => {
    return this.servicePlayer.getPlayers();
  };
}
